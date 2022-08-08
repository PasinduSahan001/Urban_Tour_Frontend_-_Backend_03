/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        bicycle {
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
      nextToken
    }
  }
`;
export const getBicycle = /* GraphQL */ `
  query GetBicycle($id: ID!) {
    getBicycle(id: $id) {
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
export const listBicycles = /* GraphQL */ `
  query ListBicycles(
    $filter: ModelBicycleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBicycles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getFuelStation = /* GraphQL */ `
  query GetFuelStation($id: ID!) {
    getFuelStation(id: $id) {
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
export const listFuelStations = /* GraphQL */ `
  query ListFuelStations(
    $filter: ModelFuelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFuelStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
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
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
