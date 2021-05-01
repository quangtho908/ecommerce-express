import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "../product/product.model";
import {CategoryController} from "./category.controller";
import { CategorySchema } from "./category.model";
import {CategoryService} from "./category.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "categories", schema: CategorySchema}, {name: "products", schema: ProductSchema}])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}