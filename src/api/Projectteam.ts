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
  MiProjectteam,
  MiProjectteamCreateData,
  MiProjectteamDeleteData,
  MiProjectteamDetailData,
  MiProjectteamListData,
  MiProjectteamListParams,
  MiProjectteamUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projectteam<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectteam
   * @name ProjectteamList
   * @summary Get one or more projectteams
   * @request GET:/projectteam
   * @secure
   */
  projectteamList = (query: MiProjectteamListParams, params: RequestParams = {}) =>
    this.request<MiProjectteamListData, any>({
      path: `/projectteam`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectteam
   * @name ProjectteamCreate
   * @summary Add a projectteam
   * @request POST:/projectteam
   * @secure
   */
  projectteamCreate = (projectteam: MiProjectteam, params: RequestParams = {}) =>
    this.request<MiProjectteamCreateData, any>({
      path: `/projectteam`,
      method: 'POST',
      body: projectteam,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectteam
   * @name ProjectteamDetail
   * @summary Retrieve a projectteam by id.
   * @request GET:/projectteam/{id}/
   * @secure
   */
  projectteamDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectteamDetailData, any>({
      path: `/projectteam/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectteam
   * @name ProjectteamUpdate
   * @summary Update a projectteam by id.
   * @request PUT:/projectteam/{id}/
   * @secure
   */
  projectteamUpdate = (id: number, projectteam: MiProjectteam, params: RequestParams = {}) =>
    this.request<MiProjectteamUpdateData, any>({
      path: `/projectteam/${id}/`,
      method: 'PUT',
      body: projectteam,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectteam
   * @name ProjectteamDelete
   * @summary Delete a projectteam
   * @request DELETE:/projectteam/{id}/
   * @secure
   */
  projectteamDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectteamDeleteData, any>({
      path: `/projectteam/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
