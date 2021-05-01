import {IsNotEmpty} from "class-validator";
export class UpdateCategoryDto {
    @IsNotEmpty()
    id: string
    @IsNotEmpty()
    name: string
}