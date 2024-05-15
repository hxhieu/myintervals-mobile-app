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

import { MiTasklistfilterDetailData, MiTasklistfilterListData, MiTasklistfilterListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tasklistfilter<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags tasklistfilter
   * @name TasklistfilterList
   * @summary Get one or more tasklistfilters
   * @request GET:/tasklistfilter
   * @secure
   */
  tasklistfilterList = (query: MiTasklistfilterListParams, params: RequestParams = {}) =>
    this.request<MiTasklistfilterListData, any>({
      path: `/tasklistfilter`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags tasklistfilter
   * @name TasklistfilterDetail
   * @summary Retrieve a tasklistfilter by id.
   * @request GET:/tasklistfilter/{id}/
   * @secure
   */
  tasklistfilterDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTasklistfilterDetailData, any>({
      path: `/tasklistfilter/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
