import { IsNotEmpty } from "class-validator"

export class CreateOrderDto {
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    userId: string

    @IsNotEmpty()
    owner: string

    @IsNotEmpty()
    product: string

    @IsNotEmpty()
    status: Status
}

export enum Status {
    PROCESSING = "Processing",
    RECEIVE = "Receive",
    PACKING = "Packing",
    TRANSPORT = "Transport",
    DONE = "Done"
}
