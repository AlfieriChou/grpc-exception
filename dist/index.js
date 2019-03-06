'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const grpc_1 = require('grpc')
class Exception {
  constructor(code, message) {
    this.name = 'ServiceError'
    this.code = code
    this.message = message || 'Service Error'
  }
}
exports.Exception = Exception
class NotFound extends Exception {
  constructor(STATUS = grpc_1.status.NOT_FOUND, message = 'not found') {
    super(STATUS, message)
  }
}
exports.NotFound = NotFound
class NotAuthenticated extends Exception {
  constructor(
    STATUS = grpc_1.status.UNAUTHENTICATED,
    message = 'unauthenticated'
  ) {
    super(STATUS, message)
  }
}
exports.NotAuthenticated = NotAuthenticated
class PermissionDenied extends Exception {
  constructor(
    STATUS = grpc_1.status.PERMISSION_DENIED,
    message = 'permission denied'
  ) {
    super(STATUS, message)
  }
}
exports.PermissionDenied = PermissionDenied
class InvalidArgument extends Exception {
  constructor(
    STATUS = grpc_1.status.INVALID_ARGUMENT,
    message = 'invalid argument'
  ) {
    super(STATUS, message)
  }
}
exports.InvalidArgument = InvalidArgument
class Unknown extends Exception {
  constructor(STATUS = grpc_1.status.UNKNOWN, message = 'unknow') {
    super(STATUS, message)
  }
}
exports.Unknown = Unknown
class FailedPrecondition extends Exception {
  constructor(
    STATUS = grpc_1.status.FAILED_PRECONDITION,
    message = 'failed precondition'
  ) {
    super(STATUS, message)
  }
}
exports.FailedPrecondition = FailedPrecondition
class Internal extends Exception {
  constructor(STATUS = grpc_1.status.INTERNAL, message = 'Internal') {
    super(STATUS, message)
  }
}
exports.Internal = Internal
class Ok extends Exception {
  constructor(STATUS = grpc_1.status.OK, message = 'ok') {
    super(STATUS, message)
  }
}
exports.Ok = Ok
class OutOfRange extends Exception {
  constructor(STATUS = grpc_1.status.OUT_OF_RANGE, message = 'out of range') {
    super(STATUS, message)
  }
}
exports.OutOfRange = OutOfRange
class ResourceExhausted extends Exception {
  constructor(
    STATUS = grpc_1.status.RESOURCE_EXHAUSTED,
    message = 'resource exhausted'
  ) {
    super(STATUS, message)
  }
}
exports.ResourceExhausted = ResourceExhausted
class AlreadyExists extends Exception {
  constructor(
    STATUS = grpc_1.status.ALREADY_EXISTS,
    message = 'already exists'
  ) {
    super(STATUS, message)
  }
}
exports.AlreadyExists = AlreadyExists
class Cancelled extends Exception {
  constructor(STATUS = grpc_1.status.CANCELLED, message = 'Cancelled') {
    super(STATUS, message)
  }
}
exports.Cancelled = Cancelled
class Aborted extends Exception {
  constructor(STATUS = grpc_1.status.ABORTED, message = 'aborted') {
    super(STATUS, message)
  }
}
exports.Aborted = Aborted
class DataLoss extends Exception {
  constructor(STATUS = grpc_1.status.DATA_LOSS, message = 'data loss') {
    super(STATUS, message)
  }
}
exports.DataLoss = DataLoss
class DeadlineExceeded extends Exception {
  constructor(
    STATUS = grpc_1.status.DEADLINE_EXCEEDED,
    message = 'deadline exceeded'
  ) {
    super(STATUS, message)
  }
}
exports.DeadlineExceeded = DeadlineExceeded
class Unavailable extends Exception {
  constructor(STATUS = grpc_1.status.UNAVAILABLE, message = 'unavailable') {
    super(STATUS, message)
  }
}
exports.Unavailable = Unavailable
class Unimplemented extends Exception {
  constructor(STATUS = grpc_1.status.UNIMPLEMENTED, message = 'unimplemented') {
    super(STATUS, message)
  }
}
exports.Unimplemented = Unimplemented
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMkM7QUFFM0MsTUFBYSxTQUFTO0lBSXBCLFlBQVksSUFBWSxFQUFFLE9BQWdCO1FBSG5DLFNBQUksR0FBVyxjQUFjLENBQUE7UUFJbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksZUFBZSxDQUFBO0lBQzNDLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBRUQsTUFBYSxRQUFTLFNBQVEsU0FBUztJQUNyQyxZQUFZLE1BQU0sR0FBRyxhQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sR0FBRyxXQUFXO1FBQzFELEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBSkQsNEJBSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsWUFBWSxNQUFNLEdBQUcsYUFBTSxDQUFDLGVBQWUsRUFBRSxPQUFPLEdBQUcsaUJBQWlCO1FBQ3RFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBSkQsNENBSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsWUFDRSxNQUFNLEdBQUcsYUFBTSxDQUFDLGlCQUFpQixFQUNqQyxPQUFPLEdBQUcsbUJBQW1CO1FBRTdCLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBUEQsNENBT0M7QUFFRCxNQUFhLGVBQWdCLFNBQVEsU0FBUztJQUM1QyxZQUFZLE1BQU0sR0FBRyxhQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxHQUFHLGtCQUFrQjtRQUN4RSxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Q0FDRjtBQUpELDBD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
