/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MemberInfo
// ====================================================

export interface MemberInfo_guild_member {
  __typename: "Member";
  id: string | null;
  displayName: string | null;
  displayHexColor: string | null;
}

export interface MemberInfo_guild {
  __typename: "Guild";
  member: MemberInfo_guild_member | null;
}

export interface MemberInfo {
  guild: MemberInfo_guild;
}

export interface MemberInfoVariables {
  server: string;
  member: string;
}
