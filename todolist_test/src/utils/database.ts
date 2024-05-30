import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { ListEntity, MapItem } from "../models";

const databasePath = path.join(__dirname, "../../storage/list.json");

const getCurrentDate = () => {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000);
};

const readAll = async () => {
  try {
    const rawData = fs.readFileSync(databasePath, "utf8");
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};

const read = async (id: string) => {
  try {
    const data = await readAll();
    return data?.find((item: MapItem) => item.id === id);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};

const insert = async (list: Omit<ListEntity, "id" | "created_at">) => {
  const newId = uuid();
  try {
    const data = await readAll();
    data.push({
      ...list,
      id: newId,
      created_at: getCurrentDate(),
    });
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
    return { id: newId };
  } catch (error) {
    console.error("Error insert data:", error);
    throw error;
  }
};

const update = async (list: Omit<ListEntity, "created_at">) => {
  try {
    const data = await readAll();
    const index = data.findIndex((item: MapItem) => item.id === list.id);
    data[index] = {
      ...data[index],
      ...list,
      created_at: data[index].created_at,
    };
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
    return { id: list.id };
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};

const deleteData = async (id: string) => {
  try {
    const data = await readAll();
    const index = data.findIndex((item: MapItem) => item.id === id);
    data.splice(index, 1);
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
    return { id };
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export default { readAll, read, insert, update, deleteData } as const;
