import { Injectable, NestMiddleware, NotAcceptableException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";
import { UserSerivce } from "../user/user.service";

@Injectable()
export class SignUpMiddleware implements NestMiddleware {

    constructor(
        private userSerivce: UserSerivce,
        private jwtService: JwtService
    ) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const {username, password} = req.body;
        const check = await this.userSerivce.findUser(username);
        if(!!check) throw new NotAcceptableException();
        const hash = this.jwtService.sign(password);
        const token = this.jwtService.sign({username, hash})
        req.body = {username, hash, token}
        next();
    }
}