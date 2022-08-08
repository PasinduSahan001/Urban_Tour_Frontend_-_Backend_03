/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateBicycle = /* GraphQL */ `
  subscription OnCreateBicycle(
    $filter: ModelSubscriptionBicycleFilterInput
    $owner: String
  ) {
    onCreateBicycle(filter: $filter, owner: $owner) {
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
export const onUpdateBicycle = /* GraphQL */ `
  subscription OnUpdateBicycle(
    $filter: ModelSubscriptionBicycleFilterInput
    $owner: String
  ) {
    onUpdateBicycle(filter: $filter, owner: $owner) {
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
export const onDeleteBicycle = /* GraphQL */ `
  subscription OnDeleteBicycle(
    $filter: ModelSubscriptionBicycleFilterInput
    $owner: String
  ) {
    onDeleteBicycle(filter: $filter, owner: $owner) {
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
export const onCreateFuelStation = /* GraphQL */ `
  subscription OnCreateFuelStation(
    $filter: ModelSubscriptionFuelStationFilterInput
    $owner: String
  ) {
    onCreateFuelStation(filter: $filter, owner: $owner) {
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
export const onUpdateFuelStation = /* GraphQL */ `
  subscription OnUpdateFuelStation(
    $filter: ModelSubscriptionFuelStationFilterInput
    $owner: String
  ) {
    onUpdateFuelStation(filter: $filter, owner: $owner) {
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
export const onDeleteFuelStation = /* GraphQL */ `
  subscription OnDeleteFuelStation(
    $filter: ModelSubscriptionFuelStationFilterInput
    $owner: String
  ) {
    onDeleteFuelStation(filter: $filter, owner: $owner) {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onCreateVehicle(filter: $filter, owner: $owner) {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onUpdateVehicle(filter: $filter, owner: $owner) {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onDeleteVehicle(filter: $filter, owner: $owner) {
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
