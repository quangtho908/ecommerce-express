import {Router} from "express";
import * as service from "./service";
import * as middleware from "./middleware";
const routerOder = Router();

routerOder.get("/bill", service.getBills)

routerOder.get("/bill/detail/:id", 
    middleware.checkId,
    service.getDetailBills)

routerOder.post("/bill",
    middleware.handleCreateBill,  
    service.createBill)

routerOder.put("/bill/status", 
    middleware.checkId,
    service.updateStatus)

routerOder.delete("/bill", 
    middleware.checkId,
    service.cancelBill);

export default routerOder;