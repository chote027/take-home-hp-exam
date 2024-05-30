import { ListEntity } from "../models";
import listRepository from "../repositories/list.repository";

const findAll = async () => {
  const list = await listRepository.findAll();
  return list;
};

const findOne = async (id: string) => {
  const result = await listRepository.findOne(id);
  return result;
};

const insertList = async (list: Omit<ListEntity, "id" | "created_at">) => {
  const result = await listRepository.insertList(list);
  return result;
};

const updateList = async (list: Omit<ListEntity, "created_at">) => {
  const result = await listRepository.updateList(list);
  return result;
};

const deleteList = async (id: string) => {
  const result = await listRepository.deleteList(id);
  return result;
};

export default {
  findAll,
  findOne,
  insertList,
  updateList,
  deleteList,
} as const;
