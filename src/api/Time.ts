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

import {
  MiTime,
  MiTimeCreateData,
  MiTimeDeleteData,
  MiTimeDetailData,
  MiTimeListData,
  MiTimeListParams,
  MiTimeUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Time<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags time
   * @name TimeList
   * @summary Get one or more times
   * @request GET:/time
   * @secure
   */
  timeList = (query: MiTimeListParams, params: RequestParams = {}) =>
    this.request<MiTimeListData, any>({
      path: `/time`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags time
   * @name TimeCreate
   * @summary Add a time
   * @request POST:/time
   * @secure
   */
  timeCreate = (time: MiTime, params: RequestParams = {}) =>
    this.request<MiTimeCreateData, any>({
      path: `/time`,
      method: 'POST',
      body: time,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags time
   * @name TimeDetail
   * @summary Retrieve a time by id.
   * @request GET:/time/{id}/
   * @secure
   */
  timeDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTimeDetailData, any>({
      path: `/time/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags time
   * @name TimeUpdate
   * @summary Update a time by id.
   * @request PUT:/time/{id}/
   * @secure
   */
  timeUpdate = (id: number, time: MiTime, params: RequestParams = {}) =>
    this.request<MiTimeUpdateData, any>({
      path: `/time/${id}/`,
      method: 'PUT',
      body: time,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags time
   * @name TimeDelete
   * @summary Delete a time
   * @request DELETE:/time/{id}/
   * @secure
   */
  timeDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiTimeDeleteData, any>({
      path: `/time/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
