/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { PetModel } from "../../../base/pet/v1/pet";

/** Request for `GetPets` */
export interface GetPetsRequest {
}

/** Response for `GetPets` */
export interface GetPetsResponse {
  /** list of pets */
  pets: PetModel[];
}

/** Request for `CreatePet`. */
export interface CreatePetRequest {
  /** the pet name */
  name: string;
  /** the owner id (user id) */
  ownerId: string;
}

/** Response for `CreatePet`. */
export interface CreatePetResponse {
  /** the pet id */
  id: string;
  /** the pet name */
  name: string;
  /** the owner id (user id) */
  ownerId: string;
}

/** PetService */

export interface PetServiceClient {
  /**
   * GetPets
   * Request: {}
   *
   * Response : {
   * "pets": [
   * {
   * "id": "1",
   * "name": "Pet name",
   * "password": "petpassword"
   * }
   * ]
   * }
   */

  getPets(request: GetPetsRequest, metadata?: Metadata): Observable<GetPetsResponse>;

  /**
   * CreatePet
   * Request: {
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   *
   * Response : {
   * "id": 1,
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   */

  createPet(request: CreatePetRequest, metadata?: Metadata): Observable<CreatePetResponse>;
}

/** PetService */

export interface PetServiceController {
  /**
   * GetPets
   * Request: {}
   *
   * Response : {
   * "pets": [
   * {
   * "id": "1",
   * "name": "Pet name",
   * "password": "petpassword"
   * }
   * ]
   * }
   */

  getPets(
    request: GetPetsRequest,
    metadata?: Metadata,
  ): Promise<GetPetsResponse> | Observable<GetPetsResponse> | GetPetsResponse;

  /**
   * CreatePet
   * Request: {
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   *
   * Response : {
   * "id": 1,
   * "name": "Pet Name",
   * "owner_id": 2
   * }
   */

  createPet(
    request: CreatePetRequest,
    metadata?: Metadata,
  ): Promise<CreatePetResponse> | Observable<CreatePetResponse> | CreatePetResponse;
}

export function PetServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getPets", "createPet"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PetService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PetService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PET_SERVICE_NAME = "PetService";
