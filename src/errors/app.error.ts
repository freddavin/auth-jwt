import { HttpStatus } from './types/enums';

export class AppError extends Error {
  public readonly statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(HttpStatus.BadRequest, message);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(HttpStatus.NotFound, message);
  }
}
