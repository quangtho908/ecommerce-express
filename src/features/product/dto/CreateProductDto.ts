import {IsNotEmpty} from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    id: string
    @IsNotEmpty()
    name: string
}