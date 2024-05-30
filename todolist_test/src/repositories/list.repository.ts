import { ListEntity } from "../models";
import database from "../utils/database";

const { readAll, read, insert, update, deleteData } = database;

const findAll = async () => {
  const result = await readAll();
  return result;
};

const findOne = async (id: string) => {
  const result = await read(id);
  return result;
};

const insertList = async (list: Omit<ListEntity, "id" | "created_at">) => {
  const result = await insert(list);
  return result;
};

const updateList = async (list: Omit<ListEntity, "created_at">) => {
    const result = await update(list);
    return result;
}

const deleteList = async (id: string) => {
    const result = await deleteData(id);
    return result;
}

export default { findAll, findOne, insertList, updateList, deleteList } as const;
