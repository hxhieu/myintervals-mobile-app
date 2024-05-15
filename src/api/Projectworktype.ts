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
  MiProjectworktype,
  MiProjectworktypeCreateData,
  MiProjectworktypeDeleteData,
  MiProjectworktypeDetailData,
  MiProjectworktypeListData,
  MiProjectworktypeListParams,
  MiProjectworktypeUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projectworktype<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags projectworktype
   * @name ProjectworktypeList
   * @summary Get one or more projectworktypes
   * @request GET:/projectworktype
   * @secure
   */
  projectworktypeList = (query: MiProjectworktypeListParams, params: RequestParams = {}) =>
    this.request<MiProjectworktypeListData, any>({
      path: `/projectworktype`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectworktype
   * @name ProjectworktypeCreate
   * @summary Add a projectworktype
   * @request POST:/projectworktype
   * @secure
   */
  projectworktypeCreate = (projectworktype: MiProjectworktype, params: RequestParams = {}) =>
    this.request<MiProjectworktypeCreateData, any>({
      path: `/projectworktype`,
      method: 'POST',
      body: projectworktype,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags projectworktype
   * @name ProjectworktypeDetail
   * @summary Retrieve a projectworktype by id.
   * @request GET:/projectworktype/{id}/
   * @secure
   */
  projectworktypeDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectworktypeDetailData, any>({
      path: `/projectworktype/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectworktype
   * @name ProjectworktypeUpdate
   * @summary Update a projectworktype by id.
   * @request PUT:/projectworktype/{id}/
   * @secure
   */
  projectworktypeUpdate = (id: number, projectworktype: MiProjectworktype, params: RequestParams = {}) =>
    this.request<MiProjectworktypeUpdateData, any>({
      path: `/projectworktype/${id}/`,
      method: 'PUT',
      body: projectworktype,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectworktype
   * @name ProjectworktypeDelete
   * @summary Delete a projectworktype
   * @request DELETE:/projectworktype/{id}/
   * @secure
   */
  projectworktypeDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectworktypeDeleteData, any>({
      path: `/projectworktype/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
