import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.model";
import { UserSerivce } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "users", schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserSerivce],
    exports: [UserSerivce]
})
export class UserModule {}