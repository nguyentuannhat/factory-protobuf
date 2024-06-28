/* eslint-disable */
import { PetModel } from "../../pet/v1/pet";

/** User detail */
export interface UserDetailModel {
  /** User ID - Primary Column */
  id: number;
  /** User Name */
  userName: string;
  /** List of pets currently owned */
  ownedPets: PetModel[];
}
