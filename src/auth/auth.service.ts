import { Injectable } from "@nestjs/common";
import { UserSerivce } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userSerivce: UserSerivce,
        private jwtService: JwtService,
    ) {}

    async validateUser(name: string, hash: string): Promise<any> {
        const user = await this.userSerivce.findUser(name);
        if(!user) return null;
        const {token} = user;
        if(hash !== user.hash) return null;
        return {token};
    }

    async checkToken(token: string) {
        const check = await this.userSerivce.findToken(token);
        if(!check) return null;
        return check;
    }

    login(user: any){
        return user;
    }
    
    async signup(user: any) {
        await this.userSerivce.create(user);
        return {
            statusCode: 201,
            message: "User is create"
        }
    }
}

