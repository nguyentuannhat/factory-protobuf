/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { UserDetailModel } from "../../../base/userdetail/v1/userdetail";

/** Request for `GetUserDetail` */
export interface GetUserDetailRequest {
  /** the user id */
  userId: number;
}

/** Response for `GetUserDetail` */
export interface GetUserDetailResponse {
  /** user detail */
  userDetail: UserDetailModel | undefined;
}

/** UserDetailService */

export interface UserDetailServiceClient {
  /**
   * GetUserDetail
   * Request: {
   * user_id: 1
   * }
   *
   * Response : {
   * "user_detail": {
   * "id": "1",
   * "name": "username",
   * "owned_pets": [
   * {
   * "id": 1,
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   * ]
   * }
   * }
   */

  getUserDetail(request: GetUserDetailRequest, metadata?: Metadata): Observable<GetUserDetailResponse>;
}

/** UserDetailService */

export interface UserDetailServiceController {
  /**
   * GetUserDetail
   * Request: {
   * user_id: 1
   * }
   *
   * Response : {
   * "user_detail": {
   * "id": "1",
   * "name": "username",
   * "owned_pets": [
   * {
   * "id": 1,
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   * ]
   * }
   * }
   */

  getUserDetail(
    request: GetUserDetailRequest,
    metadata?: Metadata,
  ): Promise<GetUserDetailResponse> | Observable<GetUserDetailResponse> | GetUserDetailResponse;
}

export function UserDetailServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUserDetail"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserDetailService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserDetailService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_DETAIL_SERVICE_NAME = "UserDetailService";
