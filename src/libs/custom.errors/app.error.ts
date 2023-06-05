import { GeneralErrorCode, HttpStatusCode } from './types/enums';

export class AppError extends Error {
  public errorCode: string = GeneralErrorCode.InternalServerError;
  constructor(message: string, errorCode: string) {
    super(message);
    this.errorCode = errorCode;
  }
}

export class HttpError extends AppError {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message, GeneralErrorCode.ValidationError);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.BadRequest);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.NotFound);
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.Conflict);
  }
}
