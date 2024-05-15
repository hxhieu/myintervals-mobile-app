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

import { MiGetMe2Data, MiGetMeData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Me<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags me
   * @name GetMe
   * @summary View your account
   * @request GET:/me
   * @secure
   */
  getMe = (params: RequestParams = {}) =>
    this.request<MiGetMeData, any>({
      path: `/me`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to  user levels.
   *
   * @tags me
   * @name GetMe2
   * @summary Retrieve a me by id.
   * @request GET:/me/{id}/
   * @originalName getMe
   * @duplicate
   * @secure
   */
  getMe2 = (id: number, params: RequestParams = {}) =>
    this.request<MiGetMe2Data, any>({
      path: `/me/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
