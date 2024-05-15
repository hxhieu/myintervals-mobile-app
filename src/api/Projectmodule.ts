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
  MiProjectmodule,
  MiProjectmoduleCreateData,
  MiProjectmoduleDeleteData,
  MiProjectmoduleDetailData,
  MiProjectmoduleListData,
  MiProjectmoduleListParams,
  MiProjectmoduleUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projectmodule<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags projectmodule
   * @name ProjectmoduleList
   * @summary Get one or more projectmodules
   * @request GET:/projectmodule
   * @secure
   */
  projectmoduleList = (query: MiProjectmoduleListParams, params: RequestParams = {}) =>
    this.request<MiProjectmoduleListData, any>({
      path: `/projectmodule`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectmodule
   * @name ProjectmoduleCreate
   * @summary Add a projectmodule
   * @request POST:/projectmodule
   * @secure
   */
  projectmoduleCreate = (projectmodule: MiProjectmodule, params: RequestParams = {}) =>
    this.request<MiProjectmoduleCreateData, any>({
      path: `/projectmodule`,
      method: 'POST',
      body: projectmodule,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags projectmodule
   * @name ProjectmoduleDetail
   * @summary Retrieve a projectmodule by id.
   * @request GET:/projectmodule/{id}/
   * @secure
   */
  projectmoduleDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectmoduleDetailData, any>({
      path: `/projectmodule/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectmodule
   * @name ProjectmoduleUpdate
   * @summary Update a projectmodule by id.
   * @request PUT:/projectmodule/{id}/
   * @secure
   */
  projectmoduleUpdate = (id: number, projectmodule: MiProjectmodule, params: RequestParams = {}) =>
    this.request<MiProjectmoduleUpdateData, any>({
      path: `/projectmodule/${id}/`,
      method: 'PUT',
      body: projectmodule,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags projectmodule
   * @name ProjectmoduleDelete
   * @summary Delete a projectmodule
   * @request DELETE:/projectmodule/{id}/
   * @secure
   */
  projectmoduleDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectmoduleDeleteData, any>({
      path: `/projectmodule/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
