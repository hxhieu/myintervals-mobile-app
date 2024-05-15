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
  MiTask,
  MiTaskCreateData,
  MiTaskDeleteData,
  MiTaskDetailData,
  MiTaskListData,
  MiTaskListParams,
  MiTaskUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Task<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags task
   * @name TaskList
   * @summary Get one or more tasks
   * @request GET:/task
   * @secure
   */
  taskList = (query: MiTaskListParams, params: RequestParams = {}) =>
    this.request<MiTaskListData, any>({
      path: `/task`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags task
   * @name TaskCreate
   * @summary Add a task
   * @request POST:/task
   * @secure
   */
  taskCreate = (task: MiTask, params: RequestParams = {}) =>
    this.request<MiTaskCreateData, any>({
      path: `/task`,
      method: 'POST',
      body: task,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags task
   * @name TaskDetail
   * @summary Retrieve a task by id.
   * @request GET:/task/{id}/
   * @secure
   */
  taskDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTaskDetailData, any>({
      path: `/task/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags task
   * @name TaskUpdate
   * @summary Update a task by id.
   * @request PUT:/task/{id}/
   * @secure
   */
  taskUpdate = (id: number, task: MiTask, params: RequestParams = {}) =>
    this.request<MiTaskUpdateData, any>({
      path: `/task/${id}/`,
      method: 'PUT',
      body: task,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags task
   * @name TaskDelete
   * @summary Delete a task
   * @request DELETE:/task/{id}/
   * @secure
   */
  taskDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiTaskDeleteData, any>({
      path: `/task/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
