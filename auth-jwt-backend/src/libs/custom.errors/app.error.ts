import { GeneralErrorCode, HttpStatusCode } from "./types/enums";

export class AppError extends Error {
  public errorCode: string = GeneralErrorCode.InternalServerError;
  constructor(message: string, errorCode: string) {
    super(message);
    this.errorCode = errorCode;
  }
}

export class HttpError extends AppError {
  public statusCode: number;
  constructor(message: string, errorCode: string, statusCode: number) {
    super(message, errorCode);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, GeneralErrorCode.BadRequestError, HttpStatusCode.BadRequest);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, GeneralErrorCode.NotFoundError, HttpStatusCode.NotFound);
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(message, GeneralErrorCode.ConflictError, HttpStatusCode.Conflict);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(
      message,
      GeneralErrorCode.UnauthorizedError,
      HttpStatusCode.Unauthorized
    );
  }
}
