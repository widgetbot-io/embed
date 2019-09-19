/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoleInfo
// ====================================================

export interface RoleInfo_guild_role {
  __typename: "Role";
  id: string | null;
  name: string | null;
  hexColor: string | null;
}

export interface RoleInfo_guild {
  __typename: "Guild";
  role: RoleInfo_guild_role | null;
}

export interface RoleInfo {
  guild: RoleInfo_guild;
}

export interface RoleInfoVariables {
  server: string;
  role: string;
}
