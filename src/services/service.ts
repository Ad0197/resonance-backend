import Airtable from 'airtable'
import Record from 'airtable/lib/record'
import Table from 'airtable/lib/table'
import { ModelBuilder } from '../models/model'

/**
 * @class Service
 *
 * This class connect Airtable with the App using AirtableJs.
 */

export default abstract class Service<T> {
  protected table: Table

  constructor (connection: Function, private classToCreate: ModelBuilder<T>) {
    this.table = connection(classToCreate.tableName)
  }

  /**
   * @function getAllRecord
   *
   * Get All Record from Airtable
   *
   * @returns List
   */
  getAllRecord = (): Promise<T[]> =>
    this.table.select().all()
      .then(this.mapResponse);

  /**
   * @function findById
   * @param id String
   *
   * Get a Record from RecordId
   *
   * @returns T
   */
  findById = (id: string) => this.table.find(id).then((record: Record) => this.classToCreate
    .mapFromFieldToInstance({ id: record.getId(), createAt: record.get('createdTime'), ...record.fields }));

  /**
   * @function create
   * @param newRecord
   *
   * Create a new record.
   */

  create = (newRecord: T) => {
    if (this.classToCreate?.mapFromInstanceToField !== undefined) {
      const mappedField = this.classToCreate.mapFromInstanceToField(newRecord)
      console.log(mappedField)
      return this.table.create(mappedField)
    }
    throw Error('Must set a MapFromInstancaToField fn')
  }

  /**
   * @function mapResponse
   * @protected
   *
   * Map Fields of Record to Model object.
   */

  protected mapResponse = (resp: Record[]) => resp.map((record: Record, index: Number) => {
    return this.classToCreate.mapFromFieldToInstance({
      id: record.getId(),
      createAt: record.get('createdTime'),
      ...record.fields
    })
  })
}

export const getConnection = () => new Airtable({ apiKey: process.env.AIRTABLE_APIKEY })
  .base(process.env.AIRTABLE_BASEID || '')
