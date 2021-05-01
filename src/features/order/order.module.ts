import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderController } from "./order.controller";
import { OrderSchema } from "./order.model";
import { OrderService } from "./order.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "bills", schema: OrderSchema}])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}