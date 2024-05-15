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
  MiPerson,
  MiPersonCreateData,
  MiPersonDeleteData,
  MiPersonDetailData,
  MiPersonListData,
  MiPersonListParams,
  MiPersonUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Person<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags person
   * @name PersonList
   * @summary Get one or more persons
   * @request GET:/person
   * @secure
   */
  personList = (query: MiPersonListParams, params: RequestParams = {}) =>
    this.request<MiPersonListData, any>({
      path: `/person`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags person
   * @name PersonCreate
   * @summary Add a person
   * @request POST:/person
   * @secure
   */
  personCreate = (person: MiPerson, params: RequestParams = {}) =>
    this.request<MiPersonCreateData, any>({
      path: `/person`,
      method: 'POST',
      body: person,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags person
   * @name PersonDetail
   * @summary Retrieve a person by id.
   * @request GET:/person/{id}/
   * @secure
   */
  personDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiPersonDetailData, any>({
      path: `/person/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags person
   * @name PersonUpdate
   * @summary Update a person by id.
   * @request PUT:/person/{id}/
   * @secure
   */
  personUpdate = (id: number, person: MiPerson, params: RequestParams = {}) =>
    this.request<MiPersonUpdateData, any>({
      path: `/person/${id}/`,
      method: 'PUT',
      body: person,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags person
   * @name PersonDelete
   * @summary Delete a person
   * @request DELETE:/person/{id}/
   * @secure
   */
  personDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiPersonDeleteData, any>({
      path: `/person/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
