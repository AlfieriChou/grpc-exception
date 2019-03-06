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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMkM7QUFFM0MsTUFBYSxTQUFTO0lBSXBCLFlBQVksSUFBWSxFQUFFLE9BQWdCO1FBSG5DLFNBQUksR0FBVyxjQUFjLENBQUE7UUFJbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksZUFBZSxDQUFBO0lBQzNDLENBQUM7Q0FDRjtBQVJELDhCQVFDO0FBRUQsTUFBYSxRQUFTLFNBQVEsU0FBUztJQUNyQyxZQUFZLE1BQU0sR0FBRyxhQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sR0FBRyxXQUFXO1FBQzFELEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBSkQsNEJBSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsWUFBWSxNQUFNLEdBQUcsYUFBTSxDQUFDLGVBQWUsRUFBRSxPQUFPLEdBQUcsaUJBQWlCO1FBQ3RFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBSkQsNENBSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsWUFDRSxNQUFNLEdBQUcsYUFBTSxDQUFDLGlCQUFpQixFQUNqQyxPQUFPLEdBQUcsbUJBQW1CO1FBRTdCLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBUEQsNENBT0M7QUFFRCxNQUFhLGVBQWdCLFNBQVEsU0FBUztJQUM1QyxZQUFZLE1BQU0sR0FBRyxhQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxHQUFHLGtCQUFrQjtRQUN4RSxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Q0FDRjtBQUpELDBDQUlDO0FBRUQsTUFBYSxPQUFRLFNBQVEsU0FBUztJQUNwQyxZQUFZLE1BQU0sR0FBRyxhQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxRQUFRO1FBQ3JELEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBSkQsMEJBSUMifQ==
