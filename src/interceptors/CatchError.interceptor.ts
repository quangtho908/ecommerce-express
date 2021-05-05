import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import {Request} from "express";
import { Observable, throwError } from "rxjs";
import {catchError} from "rxjs/operators"

@Injectable()
export class CatchErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest<Request>()
        console.log(`${req.method} with url ${req.url}`);
        return next.handle().pipe(catchError(err => throwError(new BadGatewayException())));
    }
}