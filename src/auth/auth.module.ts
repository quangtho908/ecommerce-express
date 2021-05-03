import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtContants } from "./constants";
import { LocalAuthGuard } from "./auth.guard";
import { SignUpMiddleware } from "./auth.middleware";

@Global()
@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtContants.secret,
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [JwtModule, AuthService]
})
export class AuthModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
            .apply(SignUpMiddleware)
            .forRoutes({path: "auth/signup", method: RequestMethod.POST})
    }
}