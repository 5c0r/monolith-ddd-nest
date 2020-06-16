import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CorrelationInterceptor implements NestInterceptor {
  public static readonly CorrelationIdHeader: string = 'correlation-id';

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    request.headers[CorrelationInterceptor.CorrelationIdHeader] = uuid();
    return next.handle();
  }
}
