/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MemberInfo
// ====================================================

export interface MemberInfo_stats {
  __typename: "Stats";
  /**
   * Total amount of online guests (socket.io count)
   */
  onlineGuests: number;
}

export interface MemberInfo {
  stats: MemberInfo_stats;
}
