import {ArgumentMetadata, BadRequestException, Injectable ,PipeTransform} from "@nestjs/common";

@Injectable()
export class validatorUpdate implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata){
        if(!(value.data) || !Object.keys(value.data).length) {
            throw new BadRequestException()
        }else return value;
    }
}
