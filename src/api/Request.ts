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
  MiRequest,
  MiRequestCreateData,
  MiRequestDeleteData,
  MiRequestDetailData,
  MiRequestListData,
  MiRequestListParams,
  MiRequestUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Request<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags request
   * @name RequestList
   * @summary Get one or more requests
   * @request GET:/request
   * @secure
   */
  requestList = (query: MiRequestListParams, params: RequestParams = {}) =>
    this.request<MiRequestListData, any>({
      path: `/request`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags request
   * @name RequestCreate
   * @summary Add a request
   * @request POST:/request
   * @secure
   */
  requestCreate = (request: MiRequest, params: RequestParams = {}) =>
    this.request<MiRequestCreateData, any>({
      path: `/request`,
      method: 'POST',
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags request
   * @name RequestDetail
   * @summary Retrieve a request by id.
   * @request GET:/request/{id}/
   * @secure
   */
  requestDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiRequestDetailData, any>({
      path: `/request/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags request
   * @name RequestUpdate
   * @summary Update a request by id.
   * @request PUT:/request/{id}/
   * @secure
   */
  requestUpdate = (id: number, request: MiRequest, params: RequestParams = {}) =>
    this.request<MiRequestUpdateData, any>({
      path: `/request/${id}/`,
      method: 'PUT',
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags request
   * @name RequestDelete
   * @summary Delete a request
   * @request DELETE:/request/{id}/
   * @secure
   */
  requestDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiRequestDeleteData, any>({
      path: `/request/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
