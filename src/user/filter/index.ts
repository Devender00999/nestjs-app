import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();
    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      header: req.headers,
    });
  }
}
