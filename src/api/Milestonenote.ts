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
  MiMilestonenote,
  MiMilestonenoteCreateData,
  MiMilestonenoteDeleteData,
  MiMilestonenoteDetailData,
  MiMilestonenoteListData,
  MiMilestonenoteListParams,
  MiMilestonenoteUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Milestonenote<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags milestonenote
   * @name MilestonenoteList
   * @summary Get one or more milestonenotes
   * @request GET:/milestonenote
   * @secure
   */
  milestonenoteList = (query: MiMilestonenoteListParams, params: RequestParams = {}) =>
    this.request<MiMilestonenoteListData, any>({
      path: `/milestonenote`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags milestonenote
   * @name MilestonenoteCreate
   * @summary Add a milestonenote
   * @request POST:/milestonenote
   * @secure
   */
  milestonenoteCreate = (milestonenote: MiMilestonenote, params: RequestParams = {}) =>
    this.request<MiMilestonenoteCreateData, any>({
      path: `/milestonenote`,
      method: 'POST',
      body: milestonenote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags milestonenote
   * @name MilestonenoteDetail
   * @summary Retrieve a milestonenote by id.
   * @request GET:/milestonenote/{id}/
   * @secure
   */
  milestonenoteDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiMilestonenoteDetailData, any>({
      path: `/milestonenote/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags milestonenote
   * @name MilestonenoteUpdate
   * @summary Update a milestonenote by id.
   * @request PUT:/milestonenote/{id}/
   * @secure
   */
  milestonenoteUpdate = (id: number, milestonenote: MiMilestonenote, params: RequestParams = {}) =>
    this.request<MiMilestonenoteUpdateData, any>({
      path: `/milestonenote/${id}/`,
      method: 'PUT',
      body: milestonenote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags milestonenote
   * @name MilestonenoteDelete
   * @summary Delete a milestonenote
   * @request DELETE:/milestonenote/{id}/
   * @secure
   */
  milestonenoteDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiMilestonenoteDeleteData, any>({
      path: `/milestonenote/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
