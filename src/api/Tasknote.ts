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
  MiTasknote,
  MiTasknoteCreateData,
  MiTasknoteDeleteData,
  MiTasknoteDetailData,
  MiTasknoteListData,
  MiTasknoteListParams,
  MiTasknoteUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tasknote<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags tasknote
   * @name TasknoteList
   * @summary Get one or more tasknotes
   * @request GET:/tasknote
   * @secure
   */
  tasknoteList = (query: MiTasknoteListParams, params: RequestParams = {}) =>
    this.request<MiTasknoteListData, any>({
      path: `/tasknote`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags tasknote
   * @name TasknoteCreate
   * @summary Add a tasknote
   * @request POST:/tasknote
   * @secure
   */
  tasknoteCreate = (tasknote: MiTasknote, params: RequestParams = {}) =>
    this.request<MiTasknoteCreateData, any>({
      path: `/tasknote`,
      method: 'POST',
      body: tasknote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags tasknote
   * @name TasknoteDetail
   * @summary Retrieve a tasknote by id.
   * @request GET:/tasknote/{id}/
   * @secure
   */
  tasknoteDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTasknoteDetailData, any>({
      path: `/tasknote/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags tasknote
   * @name TasknoteUpdate
   * @summary Update a tasknote by id.
   * @request PUT:/tasknote/{id}/
   * @secure
   */
  tasknoteUpdate = (id: number, tasknote: MiTasknote, params: RequestParams = {}) =>
    this.request<MiTasknoteUpdateData, any>({
      path: `/tasknote/${id}/`,
      method: 'PUT',
      body: tasknote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags tasknote
   * @name TasknoteDelete
   * @summary Delete a tasknote
   * @request DELETE:/tasknote/{id}/
   * @secure
   */
  tasknoteDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiTasknoteDeleteData, any>({
      path: `/tasknote/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
