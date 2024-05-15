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
  MiInvoicenote,
  MiInvoicenoteCreateData,
  MiInvoicenoteDeleteData,
  MiInvoicenoteDetailData,
  MiInvoicenoteListData,
  MiInvoicenoteListParams,
  MiInvoicenoteUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Invoicenote<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoicenote
   * @name InvoicenoteList
   * @summary Get one or more invoicenotes
   * @request GET:/invoicenote
   * @secure
   */
  invoicenoteList = (query: MiInvoicenoteListParams, params: RequestParams = {}) =>
    this.request<MiInvoicenoteListData, any>({
      path: `/invoicenote`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoicenote
   * @name InvoicenoteCreate
   * @summary Add a invoicenote
   * @request POST:/invoicenote
   * @secure
   */
  invoicenoteCreate = (invoicenote: MiInvoicenote, params: RequestParams = {}) =>
    this.request<MiInvoicenoteCreateData, any>({
      path: `/invoicenote`,
      method: 'POST',
      body: invoicenote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoicenote
   * @name InvoicenoteDetail
   * @summary Retrieve a invoicenote by id.
   * @request GET:/invoicenote/{id}/
   * @secure
   */
  invoicenoteDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoicenoteDetailData, any>({
      path: `/invoicenote/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags invoicenote
   * @name InvoicenoteUpdate
   * @summary Update a invoicenote by id.
   * @request PUT:/invoicenote/{id}/
   * @secure
   */
  invoicenoteUpdate = (id: number, invoicenote: MiInvoicenote, params: RequestParams = {}) =>
    this.request<MiInvoicenoteUpdateData, any>({
      path: `/invoicenote/${id}/`,
      method: 'PUT',
      body: invoicenote,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags invoicenote
   * @name InvoicenoteDelete
   * @summary Delete a invoicenote
   * @request DELETE:/invoicenote/{id}/
   * @secure
   */
  invoicenoteDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoicenoteDeleteData, any>({
      path: `/invoicenote/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
