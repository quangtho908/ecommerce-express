import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './features/category/category.module';
import { LibraryModule } from './features/library/library.module';
import { OrderModule } from './features/order/order.module';
import { ProductModule } from './features/product/product.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://quangtho:23062002@cluster0.c0pmn.mongodb.net/ecommerce?retryWrites=true&w=majority", {useFindAndModify: false}),
    ServeStaticModule.forRoot({rootPath: join(__dirname, "..", "..", "uploads")}),
    CategoryModule,
    ProductModule,
    OrderModule,
    LibraryModule
  ],
})
export class AppModule {}