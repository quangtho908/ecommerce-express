import {Router} from "express";
import upload from "../config/multer_config";
import * as service from "./service";

const routerLibrary: Router = Router();

routerLibrary.get("/library", service.getImage);

routerLibrary.post("/library",
    upload.array("images"),
    service.createImage);

routerLibrary.delete("/library", service.deleteImage);

export default routerLibrary;