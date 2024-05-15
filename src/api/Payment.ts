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
  MiPayment,
  MiPaymentCreateData,
  MiPaymentDeleteData,
  MiPaymentDetailData,
  MiPaymentListData,
  MiPaymentListParams,
  MiPaymentUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Payment<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags payment
   * @name PaymentList
   * @summary Get one or more payments
   * @request GET:/payment
   * @secure
   */
  paymentList = (query: MiPaymentListParams, params: RequestParams = {}) =>
    this.request<MiPaymentListData, any>({
      path: `/payment`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags payment
   * @name PaymentCreate
   * @summary Add a payment
   * @request POST:/payment
   * @secure
   */
  paymentCreate = (payment: MiPayment, params: RequestParams = {}) =>
    this.request<MiPaymentCreateData, any>({
      path: `/payment`,
      method: 'POST',
      body: payment,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags payment
   * @name PaymentDetail
   * @summary Retrieve a payment by id.
   * @request GET:/payment/{id}/
   * @secure
   */
  paymentDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiPaymentDetailData, any>({
      path: `/payment/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags payment
   * @name PaymentUpdate
   * @summary Update a payment by id.
   * @request PUT:/payment/{id}/
   * @secure
   */
  paymentUpdate = (id: number, payment: MiPayment, params: RequestParams = {}) =>
    this.request<MiPaymentUpdateData, any>({
      path: `/payment/${id}/`,
      method: 'PUT',
      body: payment,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags payment
   * @name PaymentDelete
   * @summary Delete a payment
   * @request DELETE:/payment/{id}/
   * @secure
   */
  paymentDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiPaymentDeleteData, any>({
      path: `/payment/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
