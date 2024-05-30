import { Router } from "express";
import listController from "../controllers/list.controller";

const apiRouter = Router();

apiRouter.get("/", listController.getAllLists);
apiRouter.get("/:id", listController.getOneList);
apiRouter.post("/create", listController.postList);
apiRouter.put("/update", listController.updateList);
apiRouter.delete("/delete/:id", listController.deleteList);

export default apiRouter;
