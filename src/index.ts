import { ServiceError, status } from 'grpc'

export class Exception implements ServiceError {
  public name: string = 'ServiceError'
  public code: status
  public message: string
  constructor(code: status, message?: string) {
    this.code = code
    this.message = message || 'Service Error'
  }
}

export class NotFound extends Exception {
  constructor(STATUS = status.NOT_FOUND, message = 'not found') {
    super(STATUS, message)
  }
}

export class NotAuthenticated extends Exception {
  constructor(STATUS = status.UNAUTHENTICATED, message = 'unauthenticated') {
    super(STATUS, message)
  }
}

export class PermissionDenied extends Exception {
  constructor(
    STATUS = status.PERMISSION_DENIED,
    message = 'permission denied'
  ) {
    super(STATUS, message)
  }
}

export class InvalidArgument extends Exception {
  constructor(STATUS = status.INVALID_ARGUMENT, message = 'invalid argument') {
    super(STATUS, message)
  }
}

export class Unknown extends Exception {
  constructor(STATUS = status.UNKNOWN, message = 'unknow') {
    super(STATUS, message)
  }
}

export class FailedPrecondition extends Exception {
  constructor(
    STATUS = status.FAILED_PRECONDITION,
    message = 'failed precondition'
  ) {
    super(STATUS, message)
  }
}

export class Internal extends Exception {
  constructor(STATUS = status.INTERNAL, message = 'Internal') {
    super(STATUS, message)
  }
}

export class Ok extends Exception {
  constructor(STATUS = status.OK, message = 'ok') {
    super(STATUS, message)
  }
}

export class OutOfRange extends Exception {
  constructor(STATUS = status.OUT_OF_RANGE, message = 'out of range') {
    super(STATUS, message)
  }
}

export class ResourceExhausted extends Exception {
  constructor(
    STATUS = status.RESOURCE_EXHAUSTED,
    message = 'resource exhausted'
  ) {
    super(STATUS, message)
  }
}

export class AlreadyExists extends Exception {
  constructor(STATUS = status.ALREADY_EXISTS, message = 'already exists') {
    super(STATUS, message)
  }
}

export class Cancelled extends Exception {
  constructor(STATUS = status.CANCELLED, message = 'Cancelled') {
    super(STATUS, message)
  }
}

export class Aborted extends Exception {
  constructor(STATUS = status.ABORTED, message = 'aborted') {
    super(STATUS, message)
  }
}

export class DataLoss extends Exception {
  constructor(STATUS = status.DATA_LOSS, message = 'data loss') {
    super(STATUS, message)
  }
}

export class DeadlineExceeded extends Exception {
  constructor(
    STATUS = status.DEADLINE_EXCEEDED,
    message = 'deadline exceeded'
  ) {
    super(STATUS, message)
  }
}

export class Unavailable extends Exception {
  constructor(STATUS = status.UNAVAILABLE, message = 'unavailable') {
    super(STATUS, message)
  }
}

export class Unimplemented extends Exception {
  constructor(STATUS = status.UNIMPLEMENTED, message = 'unimplemented') {
    super(STATUS, message)
  }
}
