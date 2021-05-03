import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {Request} from "express";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class CheckAuthGuard implements CanActivate{
    constructor(
        private authService: AuthService
    ) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest<Request>();
        const auth = req.headers.authorization;
        if(!auth) throw new UnauthorizedException();
        const token = auth.split(" ")[1];
        const check = await this.authService.checkToken(token);
        if(!check) throw new UnauthorizedException();
        return true;
    }
}