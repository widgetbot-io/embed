/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MemberInfo
// ====================================================

export interface MemberInfo_guild {
  __typename: "Guild";
  id: string;
}

export interface MemberInfo {
  guild: MemberInfo_guild;
}

export interface MemberInfoVariables {
  server: string;
}
