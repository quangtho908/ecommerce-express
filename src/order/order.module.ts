import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/user/user.model";
import { OrderController } from "./order.controller";
import { OrderSchema } from "./order.model";
import { OrderService } from "./order.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "bills", schema: OrderSchema}, {name: "users", schema: UserSchema}])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}