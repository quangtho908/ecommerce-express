import { IsNotEmpty } from "class-validator";
export class UpdateProductDto {
    @IsNotEmpty()
    id: string
    data: {[feildname: string]: any}
}