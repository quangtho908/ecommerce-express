import { Body, Controller, Put } from "@nestjs/common";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { UserSerivce } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private userService: UserSerivce) {}
    @Put()
    async update(@Body() {id, data}: UpdateUserDto) {
        return await this.userService.update({id, data});
    }
}
