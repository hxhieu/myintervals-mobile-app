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

import { MiContactdescriptorListData, MiContactdescriptorListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Contactdescriptor<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to  user levels.
   *
   * @tags contactdescriptor
   * @name ContactdescriptorList
   * @summary Get one or more contactdescriptors
   * @request GET:/contactdescriptor
   * @secure
   */
  contactdescriptorList = (query: MiContactdescriptorListParams, params: RequestParams = {}) =>
    this.request<MiContactdescriptorListData, any>({
      path: `/contactdescriptor`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
