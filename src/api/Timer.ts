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
  MiTimer,
  MiTimerCreateData,
  MiTimerDeleteData,
  MiTimerDetailData,
  MiTimerListData,
  MiTimerListParams,
  MiTimerUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Timer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags timer
   * @name TimerList
   * @summary Get one or more timers
   * @request GET:/timer
   * @secure
   */
  timerList = (query: MiTimerListParams, params: RequestParams = {}) =>
    this.request<MiTimerListData, any>({
      path: `/timer`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags timer
   * @name TimerCreate
   * @summary Add a timer
   * @request POST:/timer
   * @secure
   */
  timerCreate = (timer: MiTimer, params: RequestParams = {}) =>
    this.request<MiTimerCreateData, any>({
      path: `/timer`,
      method: 'POST',
      body: timer,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags timer
   * @name TimerDetail
   * @summary Retrieve a timer by id.
   * @request GET:/timer/{id}/
   * @secure
   */
  timerDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiTimerDetailData, any>({
      path: `/timer/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags timer
   * @name TimerUpdate
   * @summary Update a timer by id.
   * @request PUT:/timer/{id}/
   * @secure
   */
  timerUpdate = (id: number, timer: MiTimer, params: RequestParams = {}) =>
    this.request<MiTimerUpdateData, any>({
      path: `/timer/${id}/`,
      method: 'PUT',
      body: timer,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags timer
   * @name TimerDelete
   * @summary Delete a timer
   * @request DELETE:/timer/{id}/
   * @secure
   */
  timerDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiTimerDeleteData, any>({
      path: `/timer/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
