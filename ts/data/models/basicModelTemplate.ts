import type * as Knex from "knex";

interface ModelTemplateArg<T> {
  db: Knex<any, unknown[]>;
  tableName: string;
  keyColumnName?: string;
  preprocessData?: (data: T) => any;
  processResult?: (result) => T;
}

export const basicModelTemplate = <T>({
  db,
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
      .then(([id]) => get({ [keyColumnName]: id } as T))
      .then(([result]) => result as T);

  interface UpdateArg {
    keyValue: any;
    changes: T;
  }

  const update = ({ keyValue, changes }: UpdateArg) =>
    db(tableName)
      .where({ [keyColumnName]: keyValue })
      .update(preprocessData(changes))
      .then((count) =>
        count > 0 ? get({ [keyColumnName]: keyValue } as T) : null
      );

  const remove = (arg) =>
    db(tableName).where(keyColumnName, arg[keyColumnName]).del();

  return {
    get,
    insert,
    update,
    remove,
  };
};
