import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { LibraryModule } from './library/library.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://quangtho:23062002@cluster0.c0pmn.mongodb.net/ecommerce?retryWrites=true&w=majority", {useFindAndModify: false}),
    ServeStaticModule.forRoot({rootPath: join(__dirname, "..", "..", "uploads")}),
    CategoryModule,
    ProductModule,
    OrderModule,
    LibraryModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}