import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { ProductSchema } from "./product.model";
import { ProductService } from "./product.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "products", schema: ProductSchema}])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}