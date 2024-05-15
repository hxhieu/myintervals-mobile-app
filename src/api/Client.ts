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
  MiClient,
  MiClientCreateData,
  MiClientDeleteData,
  MiClientDetailData,
  MiClientListData,
  MiClientListParams,
  MiClientUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Client<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags client
   * @name ClientList
   * @summary Get one or more clients
   * @request GET:/client
   * @secure
   */
  clientList = (query: MiClientListParams, params: RequestParams = {}) =>
    this.request<MiClientListData, any>({
      path: `/client`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags client
   * @name ClientCreate
   * @summary Add a client
   * @request POST:/client
   * @secure
   */
  clientCreate = (client: MiClient, params: RequestParams = {}) =>
    this.request<MiClientCreateData, any>({
      path: `/client`,
      method: 'POST',
      body: client,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags client
   * @name ClientDetail
   * @summary Retrieve a client by id.
   * @request GET:/client/{id}/
   * @secure
   */
  clientDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiClientDetailData, any>({
      path: `/client/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags client
   * @name ClientUpdate
   * @summary Update a client by id.
   * @request PUT:/client/{id}/
   * @secure
   */
  clientUpdate = (id: number, client: MiClient, params: RequestParams = {}) =>
    this.request<MiClientUpdateData, any>({
      path: `/client/${id}/`,
      method: 'PUT',
      body: client,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags client
   * @name ClientDelete
   * @summary Delete a client
   * @request DELETE:/client/{id}/
   * @secure
   */
  clientDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiClientDeleteData, any>({
      path: `/client/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
