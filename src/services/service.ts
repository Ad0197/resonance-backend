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

  protected mapResponse = (resp: Record[]) => resp.map((record: Record, index: Number) =>
    this.classToCreate.mapFromFieldToInstance({
      id: record.getId(),
      createAt: record.get('createdTime'),
      ...record.fields
    }
    ))
}

export const getConnection = () => new Airtable({ apiKey: process.env.AIRTABLE_APIKEY })
  .base(process.env.AIRTABLE_BASEID || '')
