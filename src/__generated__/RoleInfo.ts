/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoleInfo
// ====================================================

export interface RoleInfo_guild {
  __typename: "Guild";
  id: string;
}

export interface RoleInfo {
  guild: RoleInfo_guild;
}

export interface RoleInfoVariables {
  server: string;
}
