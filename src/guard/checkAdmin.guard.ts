import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class CheckAdminAuth implements CanActivate {
    constructor(private jwtService: JwtService) {}
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest<Request>()
        const auth = req.headers.authorization;
        if(!auth) throw new UnauthorizedException();
        const token = this.jwtService.sign(auth.split(" ")[1])
        if(token !== "23062002") throw new UnauthorizedException() 
        return true;
    }
}