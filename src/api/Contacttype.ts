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

import { MiContacttypeListData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Contacttype<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags contacttype
   * @name ContacttypeList
   * @summary Get one or more contacttypes
   * @request GET:/contacttype
   * @secure
   */
  contacttypeList = (params: RequestParams = {}) =>
    this.request<MiContacttypeListData, any>({
      path: `/contacttype`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
