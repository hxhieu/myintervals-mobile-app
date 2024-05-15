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

import { MiInvoicetermDetailData, MiInvoicetermListData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Invoiceterm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags invoiceterm
   * @name InvoicetermList
   * @summary Get one or more invoiceterms
   * @request GET:/invoiceterm
   * @secure
   */
  invoicetermList = (params: RequestParams = {}) =>
    this.request<MiInvoicetermListData, any>({
      path: `/invoiceterm`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to  user levels.
   *
   * @tags invoiceterm
   * @name InvoicetermDetail
   * @summary Retrieve a invoiceterm by id.
   * @request GET:/invoiceterm/{id}/
   * @secure
   */
  invoicetermDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiInvoicetermDetailData, any>({
      path: `/invoiceterm/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
