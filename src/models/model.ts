export interface Model {

};
export interface ModelBuilder<T extends Model> {
    new(): T;
    tableName: String;
    mapFromInstanceToField?: (object: any) => any;
    mapFromFieldToInstance: (record: any) => any;
}
