import { Request, Response } from "express";
import listService from "../services/list.service";

const getAllLists = async (req: Request, res: Response) => {
  try {
    const result = await listService.findAll();
    res.status(200).send({ result: result });
  } catch (error) {
    console.log("error ", error);
    res.status(400).end();
  }
};

const getOneList = async (req: Request, res: Response) => {
  try {
    const result = await listService.findOne(req.params.id);
    res.status(200).send({ result: result });
  } catch (error) {
    console.log("error ", error);
    res.status(400).end();
  }
};

const postList = async (req: Request, res: Response) => {
  try {
    const result = await listService.insertList(req.body);
    res.status(201).send({ result: result });
  } catch (error) {
    console.log("error ", error);
    res.status(400).end();
  }
};

const updateList = async (req: Request, res: Response) => {
  try {
    const result = await listService.updateList(req.body);
    res.status(200).send({ result: result });
  } catch (error) {
    console.log("error ", error);
    res.status(400).end();
  }
};

const deleteList = async (req: Request, res: Response) => {
  try {
    const result = await listService.deleteList(req.params.id);
    res.status(200).send({ result: result });
  } catch (error) {
    console.log("error ", error);
    res.status(400).end();
  }
};

export default {
  getAllLists,
  getOneList,
  postList,
  updateList,
  deleteList,
} as const;
