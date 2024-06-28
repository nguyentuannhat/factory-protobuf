# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [app/petshop/base/pet/v1/pet.proto](#app_petshop_base_pet_v1_pet-proto)
    - [PetModel](#app-petshop-base-pet-v1-PetModel)
  
- [app/petshop/base/petdetail/v1/petdetail.proto](#app_petshop_base_petdetail_v1_petdetail-proto)
    - [PetDetailModel](#app-petshop-base-petdetail-v1-PetDetailModel)
  
- [app/petshop/base/user/v1/user.proto](#app_petshop_base_user_v1_user-proto)
    - [UserModel](#app-petshop-base-user-v1-UserModel)
  
- [app/petshop/base/userdetail/v1/userdetail.proto](#app_petshop_base_userdetail_v1_userdetail-proto)
    - [UserDetailModel](#app-petshop-base-userdetail-v1-UserDetailModel)
  
- [app/petshop/pet/service/v1/pet.proto](#app_petshop_pet_service_v1_pet-proto)
    - [CreatePetRequest](#app-petshop-pet-service-v1-CreatePetRequest)
    - [CreatePetResponse](#app-petshop-pet-service-v1-CreatePetResponse)
    - [GetPetsRequest](#app-petshop-pet-service-v1-GetPetsRequest)
    - [GetPetsResponse](#app-petshop-pet-service-v1-GetPetsResponse)
  
    - [PetService](#app-petshop-pet-service-v1-PetService)
  
- [app/petshop/petdetail/service/v1/petdetail.proto](#app_petshop_petdetail_service_v1_petdetail-proto)
    - [GetPetDetailRequest](#app-petshop-petdetail-service-v1-GetPetDetailRequest)
    - [GetPetDetailResponse](#app-petshop-petdetail-service-v1-GetPetDetailResponse)
  
    - [PetDetailService](#app-petshop-petdetail-service-v1-PetDetailService)
  
- [app/petshop/user/service/v1/user.proto](#app_petshop_user_service_v1_user-proto)
    - [GetUsersRequest](#app-petshop-user-service-v1-GetUsersRequest)
    - [GetUsersResponse](#app-petshop-user-service-v1-GetUsersResponse)
  
    - [UserService](#app-petshop-user-service-v1-UserService)
  
- [app/petshop/userdetail/service/v1/userdetail.proto](#app_petshop_userdetail_service_v1_userdetail-proto)
    - [GetUserDetailRequest](#app-petshop-userdetail-service-v1-GetUserDetailRequest)
    - [GetUserDetailResponse](#app-petshop-userdetail-service-v1-GetUserDetailResponse)
  
    - [UserDetailService](#app-petshop-userdetail-service-v1-UserDetailService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="app_petshop_base_pet_v1_pet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/base/pet/v1/pet.proto



<a name="app-petshop-base-pet-v1-PetModel"></a>

### PetModel
Pet model


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int32](#int32) |  | Pet ID - Primary Column |
| name | [string](#string) |  | Pet Name |
| owner_id | [int32](#int32) |  | The owner id |





 

 

 

 



<a name="app_petshop_base_petdetail_v1_petdetail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/base/petdetail/v1/petdetail.proto



<a name="app-petshop-base-petdetail-v1-PetDetailModel"></a>

### PetDetailModel
Pet detail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int32](#int32) |  | Pet ID - Primary Column |
| name | [string](#string) |  | Pet Name |
| owner_id | [int32](#int32) |  | The owner id |





 

 

 

 



<a name="app_petshop_base_user_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/base/user/v1/user.proto



<a name="app-petshop-base-user-v1-UserModel"></a>

### UserModel
User model


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int32](#int32) |  | User ID - Primary Column |
| user_name | [string](#string) |  | User Name |





 

 

 

 



<a name="app_petshop_base_userdetail_v1_userdetail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/base/userdetail/v1/userdetail.proto



<a name="app-petshop-base-userdetail-v1-UserDetailModel"></a>

### UserDetailModel
User detail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int32](#int32) |  | User ID - Primary Column |
| user_name | [string](#string) |  | User Name |
| owned_pets | [app.petshop.base.pet.v1.PetModel](#app-petshop-base-pet-v1-PetModel) | repeated | List of pets currently owned |





 

 

 

 



<a name="app_petshop_pet_service_v1_pet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/pet/service/v1/pet.proto



<a name="app-petshop-pet-service-v1-CreatePetRequest"></a>

### CreatePetRequest
Request for `CreatePet`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | the pet name |
| owner_id | [string](#string) |  | the owner id (user id) |






<a name="app-petshop-pet-service-v1-CreatePetResponse"></a>

### CreatePetResponse
Response for `CreatePet`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | the pet id |
| name | [string](#string) |  | the pet name |
| owner_id | [string](#string) |  | the owner id (user id) |






<a name="app-petshop-pet-service-v1-GetPetsRequest"></a>

### GetPetsRequest
Request for `GetPets`






<a name="app-petshop-pet-service-v1-GetPetsResponse"></a>

### GetPetsResponse
Response for `GetPets`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pets | [app.petshop.base.pet.v1.PetModel](#app-petshop-base-pet-v1-PetModel) | repeated | list of pets |





 

 

 


<a name="app-petshop-pet-service-v1-PetService"></a>

### PetService
PetService

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPets | [GetPetsRequest](#app-petshop-pet-service-v1-GetPetsRequest) | [GetPetsResponse](#app-petshop-pet-service-v1-GetPetsResponse) | GetPets Request: {}

Response : { &#34;pets&#34;: [ { &#34;id&#34;: &#34;1&#34;, &#34;name&#34;: &#34;Pet name&#34;, &#34;password&#34;: &#34;petpassword&#34; } ] } |
| CreatePet | [CreatePetRequest](#app-petshop-pet-service-v1-CreatePetRequest) | [CreatePetResponse](#app-petshop-pet-service-v1-CreatePetResponse) | CreatePet Request: { &#34;name&#34;: &#34;Pet Name&#34;, &#34;owner_id&#34;: 2 }

Response : { &#34;id&#34;: 1, &#34;name&#34;: &#34;Pet Name&#34;, &#34;owner_id&#34;: 2 } |

 



<a name="app_petshop_petdetail_service_v1_petdetail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/petdetail/service/v1/petdetail.proto



<a name="app-petshop-petdetail-service-v1-GetPetDetailRequest"></a>

### GetPetDetailRequest
Request for `GetPetDetail`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pet_id | [int32](#int32) |  | the pet id |






<a name="app-petshop-petdetail-service-v1-GetPetDetailResponse"></a>

### GetPetDetailResponse
Response for `GetPetDetail`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pet_detail | [app.petshop.base.petdetail.v1.PetDetailModel](#app-petshop-base-petdetail-v1-PetDetailModel) |  | pet detail |





 

 

 


<a name="app-petshop-petdetail-service-v1-PetDetailService"></a>

### PetDetailService
PetDetailService

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPetDetail | [GetPetDetailRequest](#app-petshop-petdetail-service-v1-GetPetDetailRequest) | [GetPetDetailResponse](#app-petshop-petdetail-service-v1-GetPetDetailResponse) | GetPetDetail Request: { pet_id: 1 }

Response : { &#34;pet_detail&#34;: { &#34;id&#34;: &#34;1&#34;, &#34;name&#34;: &#34;pet name&#34;, &#34;owned_id&#34;: 1 } } |

 



<a name="app_petshop_user_service_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/user/service/v1/user.proto



<a name="app-petshop-user-service-v1-GetUsersRequest"></a>

### GetUsersRequest
Request for `GetUsers`






<a name="app-petshop-user-service-v1-GetUsersResponse"></a>

### GetUsersResponse
Response for `GetUsers`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| users | [app.petshop.base.user.v1.UserModel](#app-petshop-base-user-v1-UserModel) | repeated | list of users |





 

 

 


<a name="app-petshop-user-service-v1-UserService"></a>

### UserService
UserService

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUsers | [GetUsersRequest](#app-petshop-user-service-v1-GetUsersRequest) | [GetUsersResponse](#app-petshop-user-service-v1-GetUsersResponse) | GetUsers Request: {}

Response : { &#34;users&#34;: [ { &#34;id&#34;: &#34;1&#34;, &#34;name&#34;: &#34;username&#34;, } ] } |

 



<a name="app_petshop_userdetail_service_v1_userdetail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/petshop/userdetail/service/v1/userdetail.proto



<a name="app-petshop-userdetail-service-v1-GetUserDetailRequest"></a>

### GetUserDetailRequest
Request for `GetUserDetail`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [int32](#int32) |  | the user id |






<a name="app-petshop-userdetail-service-v1-GetUserDetailResponse"></a>

### GetUserDetailResponse
Response for `GetUserDetail`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_detail | [app.petshop.base.userdetail.v1.UserDetailModel](#app-petshop-base-userdetail-v1-UserDetailModel) |  | user detail |





 

 

 


<a name="app-petshop-userdetail-service-v1-UserDetailService"></a>

### UserDetailService
UserDetailService

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUserDetail | [GetUserDetailRequest](#app-petshop-userdetail-service-v1-GetUserDetailRequest) | [GetUserDetailResponse](#app-petshop-userdetail-service-v1-GetUserDetailResponse) | GetUserDetail Request: { user_id: 1 }

Response : { &#34;user_detail&#34;: { &#34;id&#34;: &#34;1&#34;, &#34;name&#34;: &#34;username&#34;, &#34;owned_pets&#34;: [ { &#34;id&#34;: 1, &#34;name&#34;: &#34;Pet Name&#34;, &#34;owner_id&#34;: 2 } ] } } |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

