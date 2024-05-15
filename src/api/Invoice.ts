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
  MiInvoice,
  MiInvoiceCreateData,
  MiInvoiceDeleteData,
  MiInvoiceDetailData,
  MiInvoiceListData,
  MiInvoiceListParams,
  MiInvoiceUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Invoice<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags invoice
   * @name InvoiceList
   * @summary Get one or more invoices
   * @request GET:/invoice
   * @secure
   */
  invoiceList = (query: MiInvoiceListParams, params: RequestParams = {}) =>
    this.request<MiInvoiceListData, any>({
      path: `/invoice`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoice
   * @name InvoiceCreate
   * @summary Add a invoice
   * @request POST:/invoice
   * @secure
   */
  invoiceCreate = (invoice: MiInvoice, params: RequestParams = {}) =>
    this.request<MiInvoiceCreateData, any>({
      path: `/invoice`,
      method: 'POST',
      body: invoice,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags invoice
   * @name InvoiceDetail
   * @summary Retrieve a invoice by id.
   * @request GET:/invoice/{id}/
   * @secure
   */
  invoiceDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoiceDetailData, any>({
      path: `/invoice/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoice
   * @name InvoiceUpdate
   * @summary Update a invoice by id.
   * @request PUT:/invoice/{id}/
   * @secure
   */
  invoiceUpdate = (id: number, invoice: MiInvoice, params: RequestParams = {}) =>
    this.request<MiInvoiceUpdateData, any>({
      path: `/invoice/${id}/`,
      method: 'PUT',
      body: invoice,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags invoice
   * @name InvoiceDelete
   * @summary Delete a invoice
   * @request DELETE:/invoice/{id}/
   * @secure
   */
  invoiceDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoiceDeleteData, any>({
      path: `/invoice/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
