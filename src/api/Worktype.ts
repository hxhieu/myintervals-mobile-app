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

import { MiWorktypeDetailData, MiWorktypeListData, MiWorktypeListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Worktype<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator user levels.
   *
   * @tags worktype
   * @name WorktypeList
   * @summary Get one or more worktypes
   * @request GET:/worktype
   * @secure
   */
  worktypeList = (query: MiWorktypeListParams, params: RequestParams = {}) =>
    this.request<MiWorktypeListData, any>({
      path: `/worktype`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags worktype
   * @name WorktypeDetail
   * @summary Retrieve a worktype by id.
   * @request GET:/worktype/{id}/
   * @secure
   */
  worktypeDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiWorktypeDetailData, any>({
      path: `/worktype/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
