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

import { MiModuleDetailData, MiModuleListData, MiModuleListParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Module<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator user levels.
   *
   * @tags module
   * @name ModuleList
   * @summary Get one or more modules
   * @request GET:/module
   * @secure
   */
  moduleList = (query: MiModuleListParams, params: RequestParams = {}) =>
    this.request<MiModuleListData, any>({
      path: `/module`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags module
   * @name ModuleDetail
   * @summary Retrieve a module by id.
   * @request GET:/module/{id}/
   * @secure
   */
  moduleDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiModuleDetailData, any>({
      path: `/module/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
