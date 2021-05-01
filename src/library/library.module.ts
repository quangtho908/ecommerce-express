import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { ProductSchema } from "../product/product.model";
import { LibraryController } from "./library.controller";
import { FileSchema } from "./library.model";
import { LibraryService } from "./library.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "libraries", schema: FileSchema},
            {name: "products", schema: ProductSchema}
        ]),
        MulterModule.register()
    ],
    controllers: [LibraryController],
    providers: [LibraryService]
})
export class LibraryModule {}