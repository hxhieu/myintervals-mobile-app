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
  MiInvoiceitem,
  MiInvoiceitemCreateData,
  MiInvoiceitemDeleteData,
  MiInvoiceitemDetailData,
  MiInvoiceitemListData,
  MiInvoiceitemListParams,
  MiInvoiceitemUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Invoiceitem<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags invoiceitem
   * @name InvoiceitemList
   * @summary Get one or more invoiceitems
   * @request GET:/invoiceitem
   * @secure
   */
  invoiceitemList = (query: MiInvoiceitemListParams, params: RequestParams = {}) =>
    this.request<MiInvoiceitemListData, any>({
      path: `/invoiceitem`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoiceitem
   * @name InvoiceitemCreate
   * @summary Add a invoiceitem
   * @request POST:/invoiceitem
   * @secure
   */
  invoiceitemCreate = (invoiceitem: MiInvoiceitem, params: RequestParams = {}) =>
    this.request<MiInvoiceitemCreateData, any>({
      path: `/invoiceitem`,
      method: 'POST',
      body: invoiceitem,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags invoiceitem
   * @name InvoiceitemDetail
   * @summary Retrieve a invoiceitem by id.
   * @request GET:/invoiceitem/{id}/
   * @secure
   */
  invoiceitemDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoiceitemDetailData, any>({
      path: `/invoiceitem/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoiceitem
   * @name InvoiceitemUpdate
   * @summary Update a invoiceitem by id.
   * @request PUT:/invoiceitem/{id}/
   * @secure
   */
  invoiceitemUpdate = (id: number, invoiceitem: MiInvoiceitem, params: RequestParams = {}) =>
    this.request<MiInvoiceitemUpdateData, any>({
      path: `/invoiceitem/${id}/`,
      method: 'PUT',
      body: invoiceitem,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoiceitem
   * @name InvoiceitemDelete
   * @summary Delete a invoiceitem
   * @request DELETE:/invoiceitem/{id}/
   * @secure
   */
  invoiceitemDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoiceitemDeleteData, any>({
      path: `/invoiceitem/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
