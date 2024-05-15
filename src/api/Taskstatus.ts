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

import { MiTaskstatusDetailData, MiTaskstatusListData, MiTaskstatusListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Taskstatus<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags taskstatus
   * @name TaskstatusList
   * @summary Get one or more taskstatus
   * @request GET:/taskstatus
   * @secure
   */
  taskstatusList = (query: MiTaskstatusListParams, params: RequestParams = {}) =>
    this.request<MiTaskstatusListData, any>({
      path: `/taskstatus`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags taskstatus
   * @name TaskstatusDetail
   * @summary Retrieve a taskstatus by id.
   * @request GET:/taskstatus/{id}/
   * @secure
   */
  taskstatusDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTaskstatusDetailData, any>({
      path: `/taskstatus/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
