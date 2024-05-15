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

import { MiPaymenttypeDetailData, MiPaymenttypeListData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Paymenttype<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags paymenttype
   * @name PaymenttypeList
   * @summary Get one or more paymenttypes
   * @request GET:/paymenttype
   * @secure
   */
  paymenttypeList = (params: RequestParams = {}) =>
    this.request<MiPaymenttypeListData, any>({
      path: `/paymenttype`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to  user levels.
   *
   * @tags paymenttype
   * @name PaymenttypeDetail
   * @summary Retrieve a paymenttype by id.
   * @request GET:/paymenttype/{id}/
   * @secure
   */
  paymenttypeDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiPaymenttypeDetailData, any>({
      path: `/paymenttype/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
