import db from "../dbConfig";

interface ModelTemplateArg<T> {
  tableName: string;
  keyColumnName?: string;
  preprocessData?: (data: T) => any;
  processResult?: (result) => T;
}

export const basicModelTemplate = <T>({
  tableName,
  keyColumnName = "id",
  preprocessData = (data: T) => data,
  processResult = (result) => result as T,
}: ModelTemplateArg<T>) => {
  const get = (where: T = {} as T) =>
    db(tableName)
      .where(where)
      .then((data) =>
        data !== undefined ? data.map(processResult) : undefined
      );

  interface InsertArg {
    item: T;
  }

  const insert = ({ item }: InsertArg) =>
    db(tableName)
      .insert(preprocessData(item), keyColumnName)
      .then(([id]) => get({ [keyColumnName]: id } as T));

  interface UpdateArg {
      keyValue: any,
      changes: T,
  }    
};
