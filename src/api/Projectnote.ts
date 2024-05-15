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
  MiProjectnote,
  MiProjectnoteCreateData,
  MiProjectnoteDeleteData,
  MiProjectnoteDetailData,
  MiProjectnoteListData,
  MiProjectnoteListParams,
  MiProjectnoteUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projectnote<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags projectnote
   * @name ProjectnoteList
   * @summary Get one or more projectnotes
   * @request GET:/projectnote
   * @secure
   */
  projectnoteList = (query: MiProjectnoteListParams, params: RequestParams = {}) =>
    this.request<MiProjectnoteListData, any>({
      path: `/projectnote`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags projectnote
   * @name ProjectnoteCreate
   * @summary Add a projectnote
   * @request POST:/projectnote
   * @secure
   */
  projectnoteCreate = (projectnote: MiProjectnote, params: RequestParams = {}) =>
    this.request<MiProjectnoteCreateData, any>({
      path: `/projectnote`,
      method: 'POST',
      body: projectnote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags projectnote
   * @name ProjectnoteDetail
   * @summary Retrieve a projectnote by id.
   * @request GET:/projectnote/{id}/
   * @secure
   */
  projectnoteDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectnoteDetailData, any>({
      path: `/projectnote/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags projectnote
   * @name ProjectnoteUpdate
   * @summary Update a projectnote by id.
   * @request PUT:/projectnote/{id}/
   * @secure
   */
  projectnoteUpdate = (id: number, projectnote: MiProjectnote, params: RequestParams = {}) =>
    this.request<MiProjectnoteUpdateData, any>({
      path: `/projectnote/${id}/`,
      method: 'PUT',
      body: projectnote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags projectnote
   * @name ProjectnoteDelete
   * @summary Delete a projectnote
   * @request DELETE:/projectnote/{id}/
   * @secure
   */
  projectnoteDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectnoteDeleteData, any>({
      path: `/projectnote/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
