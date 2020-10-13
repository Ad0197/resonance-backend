import Airtable from 'airtable'
import Record from 'airtable/lib/record'
import Table from 'airtable/lib/table'

/**
 * @class Service
 *
 * This class connect Airtable with the App using AirtableJs.
 */

export abstract class Service {
    private _connection: Table

    constructor (private tableName: string) {
      this._connection = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY })
        .base(process.env.AIRTABLE_BASEID || '')(tableName)
    }

    /**
     * @function getAllRecord
     *
     * Get All Record from Airtable
     *
     * @returns List
     */
    protected getAllRecord = (): Promise<any[]> =>
      this._connection.select().all()
        .then((resp: Record[]) => resp.map((record: Record, index: Number) => record.fields))
}
