/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { UserModel } from "../../../base/user/v1/user";

/** Request for `GetUsers` */
export interface GetUsersRequest {
}

/** Response for `GetUsers` */
export interface GetUsersResponse {
  /** list of users */
  users: UserModel[];
}

/** UserService */

export interface UserServiceClient {
  /**
   * GetUsers
   * Request: {}
   *
   * Response : {
   * "users": [
   * {
   * "id": "1",
   * "name": "username",
   * }
   * ]
   * }
   */

  getUsers(request: GetUsersRequest, metadata?: Metadata): Observable<GetUsersResponse>;
}

/** UserService */

export interface UserServiceController {
  /**
   * GetUsers
   * Request: {}
   *
   * Response : {
   * "users": [
   * {
   * "id": "1",
   * "name": "username",
   * }
   * ]
   * }
   */

  getUsers(
    request: GetUsersRequest,
    metadata?: Metadata,
  ): Promise<GetUsersResponse> | Observable<GetUsersResponse> | GetUsersResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUsers"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
