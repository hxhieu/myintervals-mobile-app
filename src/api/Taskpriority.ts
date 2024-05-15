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

import { MiTaskpriorityDetailData, MiTaskpriorityListData, MiTaskpriorityListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Taskpriority<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags taskpriority
   * @name TaskpriorityList
   * @summary Get one or more taskprioritys
   * @request GET:/taskpriority
   * @secure
   */
  taskpriorityList = (query: MiTaskpriorityListParams, params: RequestParams = {}) =>
    this.request<MiTaskpriorityListData, any>({
      path: `/taskpriority`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags taskpriority
   * @name TaskpriorityDetail
   * @summary Retrieve a taskpriority by id.
   * @request GET:/taskpriority/{id}/
   * @secure
   */
  taskpriorityDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTaskpriorityDetailData, any>({
      path: `/taskpriority/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
