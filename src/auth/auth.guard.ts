import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import {Request} from "express";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalAuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    async canActivate(
        context: ExecutionContext
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const result = await this.authService.validateUser(request.body.username, request.body.password);
        if(!result) throw new UnauthorizedException();
        request.user = result;
        return true;
    }
}