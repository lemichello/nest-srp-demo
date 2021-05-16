import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorMessages } from '../common/error-messages.constants';

@Catch(Error)
export class ErrorExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const resp = ctx.getResponse<Response>();
    const respStatus =
      ErrorExceptionFilter.getResponseStatusBasedOnError(exception);

    resp.status(respStatus).json({
      statusCode: respStatus,
      message: exception.message,
    });
  }

  private static getResponseStatusBasedOnError(error: Error): number {
    if (error instanceof HttpException) {
      return error.getStatus();
    }

    for (const [, value] of Object.entries(ErrorMessages)) {
      if (value.msg === error.message) {
        return value.status;
      }
    }

    return 500;
  }
}
