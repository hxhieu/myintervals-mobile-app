/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { MiGroupDetailData, MiGroupListData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Group<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags group
   * @name GroupList
   * @summary Get one or more groups
   * @request GET:/group
   * @secure
   */
  groupList = (params: RequestParams = {}) =>
    this.request<MiGroupListData, any>({
      path: `/group`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to  user levels.
   *
   * @tags group
   * @name GroupDetail
   * @summary Retrieve a group by id.
   * @request GET:/group/{id}/
   * @secure
   */
  groupDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiGroupDetailData, any>({
      path: `/group/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
