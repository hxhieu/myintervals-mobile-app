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
  MiPersoncontact,
  MiPersoncontactCreateData,
  MiPersoncontactDeleteData,
  MiPersoncontactDetailData,
  MiPersoncontactListData,
  MiPersoncontactListParams,
  MiPersoncontactUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Personcontact<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags personcontact
   * @name PersoncontactList
   * @summary Get one or more personcontacts
   * @request GET:/personcontact
   * @secure
   */
  personcontactList = (query: MiPersoncontactListParams, params: RequestParams = {}) =>
    this.request<MiPersoncontactListData, any>({
      path: `/personcontact`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags personcontact
   * @name PersoncontactCreate
   * @summary Add a personcontact
   * @request POST:/personcontact
   * @secure
   */
  personcontactCreate = (personcontact: MiPersoncontact, params: RequestParams = {}) =>
    this.request<MiPersoncontactCreateData, any>({
      path: `/personcontact`,
      method: 'POST',
      body: personcontact,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags personcontact
   * @name PersoncontactDetail
   * @summary Retrieve a personcontact by id.
   * @request GET:/personcontact/{id}/
   * @secure
   */
  personcontactDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiPersoncontactDetailData, any>({
      path: `/personcontact/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags personcontact
   * @name PersoncontactUpdate
   * @summary Update a personcontact by id.
   * @request PUT:/personcontact/{id}/
   * @secure
   */
  personcontactUpdate = (id: number, personcontact: MiPersoncontact, params: RequestParams = {}) =>
    this.request<MiPersoncontactUpdateData, any>({
      path: `/personcontact/${id}/`,
      method: 'PUT',
      body: personcontact,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags personcontact
   * @name PersoncontactDelete
   * @summary Delete a personcontact
   * @request DELETE:/personcontact/{id}/
   * @secure
   */
  personcontactDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiPersoncontactDeleteData, any>({
      path: `/personcontact/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
