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
  MiProject,
  MiProjectCreateData,
  MiProjectDeleteData,
  MiProjectDetailData,
  MiProjectListData,
  MiProjectListParams,
  MiProjectUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Project<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags project
   * @name ProjectList
   * @summary Get one or more projects
   * @request GET:/project
   * @secure
   */
  projectList = (query: MiProjectListParams, params: RequestParams = {}) =>
    this.request<MiProjectListData, any>({
      path: `/project`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags project
   * @name ProjectCreate
   * @summary Add a project
   * @request POST:/project
   * @secure
   */
  projectCreate = (project: MiProject, params: RequestParams = {}) =>
    this.request<MiProjectCreateData, any>({
      path: `/project`,
      method: 'POST',
      body: project,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags project
   * @name ProjectDetail
   * @summary Retrieve a project by id.
   * @request GET:/project/{id}/
   * @secure
   */
  projectDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectDetailData, any>({
      path: `/project/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags project
   * @name ProjectUpdate
   * @summary Update a project by id.
   * @request PUT:/project/{id}/
   * @secure
   */
  projectUpdate = (id: number, project: MiProject, params: RequestParams = {}) =>
    this.request<MiProjectUpdateData, any>({
      path: `/project/${id}/`,
      method: 'PUT',
      body: project,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags project
   * @name ProjectDelete
   * @summary Delete a project
   * @request DELETE:/project/{id}/
   * @secure
   */
  projectDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiProjectDeleteData, any>({
      path: `/project/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
