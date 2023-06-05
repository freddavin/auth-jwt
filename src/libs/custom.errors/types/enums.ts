export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  NotFound = 404,
  Conflict = 409,
  InternalServerError = 500,
}

export enum GeneralErrorCode {
  UnknownError = 'UnknownError',
  ValidationError = 'ValidationError',
  InternalServerError = 'InternalServerError',
  NotFoundError = 'NotFoundError',
  BadRequestError = 'BadRequestError',
  ConflictError = 'ConflictError',
}
