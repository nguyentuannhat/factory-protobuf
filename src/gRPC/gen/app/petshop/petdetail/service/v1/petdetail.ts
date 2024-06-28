/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { PetDetailModel } from "../../../base/petdetail/v1/petdetail";

/** Request for `GetPetDetail` */
export interface GetPetDetailRequest {
  /** the pet id */
  petId: number;
}

/** Response for `GetPetDetail` */
export interface GetPetDetailResponse {
  /** pet detail */
  petDetail: PetDetailModel | undefined;
}

/** PetDetailService */

export interface PetDetailServiceClient {
  /**
   * GetPetDetail
   * Request: {
   * pet_id: 1
   * }
   *
   * Response : {
   * "pet_detail": {
   * "id": "1",
   * "name": "pet name",
   * "owned_id": 1
   * }
   * }
   */

  getPetDetail(request: GetPetDetailRequest, metadata?: Metadata): Observable<GetPetDetailResponse>;
}

/** PetDetailService */

export interface PetDetailServiceController {
  /**
   * GetPetDetail
   * Request: {
   * pet_id: 1
   * }
   *
   * Response : {
   * "pet_detail": {
   * "id": "1",
   * "name": "pet name",
   * "owned_id": 1
   * }
   * }
   */

  getPetDetail(
    request: GetPetDetailRequest,
    metadata?: Metadata,
  ): Promise<GetPetDetailResponse> | Observable<GetPetDetailResponse> | GetPetDetailResponse;
}

export function PetDetailServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getPetDetail"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PetDetailService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PetDetailService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PET_DETAIL_SERVICE_NAME = "PetDetailService";
