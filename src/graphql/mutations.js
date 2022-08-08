/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      description
      address
      nic
      mobileNumber
      email
      vehicles {
        items {
          id
          fuelType
          ownerID
          numberPlate
          model
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bicycle {
        items {
          id
          distance
          model
          ownerID
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      distance
      avgSpeed
      calories
      spendTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      description
      address
      nic
      mobileNumber
      email
      vehicles {
        items {
          id
          fuelType
          ownerID
          numberPlate
          model
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bicycle {
        items {
          id
          distance
          model
          ownerID
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      distance
      avgSpeed
      calories
      spendTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      description
      address
      nic
      mobileNumber
      email
      vehicles {
        items {
          id
          fuelType
          ownerID
          numberPlate
          model
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bicycle {
        items {
          id
          distance
          model
          ownerID
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      distance
      avgSpeed
      calories
      spendTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBicycle = /* GraphQL */ `
  mutation CreateBicycle(
    $input: CreateBicycleInput!
    $condition: ModelBicycleConditionInput
  ) {
    createBicycle(input: $input, condition: $condition) {
      id
      distance
      model
      ownerID
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBicycle = /* GraphQL */ `
  mutation UpdateBicycle(
    $input: UpdateBicycleInput!
    $condition: ModelBicycleConditionInput
  ) {
    updateBicycle(input: $input, condition: $condition) {
      id
      distance
      model
      ownerID
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBicycle = /* GraphQL */ `
  mutation DeleteBicycle(
    $input: DeleteBicycleInput!
    $condition: ModelBicycleConditionInput
  ) {
    deleteBicycle(input: $input, condition: $condition) {
      id
      distance
      model
      ownerID
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFuelStation = /* GraphQL */ `
  mutation CreateFuelStation(
    $input: CreateFuelStationInput!
    $condition: ModelFuelStationConditionInput
  ) {
    createFuelStation(input: $input, condition: $condition) {
      id
      fuelStationName
      locationCordinates
      availPetrol92
      availPetrol95
      availDiesel
      availSuperDiesel
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFuelStation = /* GraphQL */ `
  mutation UpdateFuelStation(
    $input: UpdateFuelStationInput!
    $condition: ModelFuelStationConditionInput
  ) {
    updateFuelStation(input: $input, condition: $condition) {
      id
      fuelStationName
      locationCordinates
      availPetrol92
      availPetrol95
      availDiesel
      availSuperDiesel
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFuelStation = /* GraphQL */ `
  mutation DeleteFuelStation(
    $input: DeleteFuelStationInput!
    $condition: ModelFuelStationConditionInput
  ) {
    deleteFuelStation(input: $input, condition: $condition) {
      id
      fuelStationName
      locationCordinates
      availPetrol92
      availPetrol95
      availDiesel
      availSuperDiesel
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
      id
      fuelType
      ownerID
      numberPlate
      model
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
      id
      fuelType
      ownerID
      numberPlate
      model
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
      id
      fuelType
      ownerID
      numberPlate
      model
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
