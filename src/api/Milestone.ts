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
  MiMilestone,
  MiMilestoneCreateData,
  MiMilestoneDeleteData,
  MiMilestoneDetailData,
  MiMilestoneListData,
  MiMilestoneListParams,
  MiMilestoneUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Milestone<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags milestone
   * @name MilestoneList
   * @summary Get one or more milestones
   * @request GET:/milestone
   * @secure
   */
  milestoneList = (query: MiMilestoneListParams, params: RequestParams = {}) =>
    this.request<MiMilestoneListData, any>({
      path: `/milestone`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags milestone
   * @name MilestoneCreate
   * @summary Add a milestone
   * @request POST:/milestone
   * @secure
   */
  milestoneCreate = (milestone: MiMilestone, params: RequestParams = {}) =>
    this.request<MiMilestoneCreateData, any>({
      path: `/milestone`,
      method: 'POST',
      body: milestone,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource user levels.
   *
   * @tags milestone
   * @name MilestoneDetail
   * @summary Retrieve a milestone by id.
   * @request GET:/milestone/{id}/
   * @secure
   */
  milestoneDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiMilestoneDetailData, any>({
      path: `/milestone/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags milestone
   * @name MilestoneUpdate
   * @summary Update a milestone by id.
   * @request PUT:/milestone/{id}/
   * @secure
   */
  milestoneUpdate = (id: number, milestone: MiMilestone, params: RequestParams = {}) =>
    this.request<MiMilestoneUpdateData, any>({
      path: `/milestone/${id}/`,
      method: 'PUT',
      body: milestone,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags milestone
   * @name MilestoneDelete
   * @summary Delete a milestone
   * @request DELETE:/milestone/{id}/
   * @secure
   */
  milestoneDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiMilestoneDeleteData, any>({
      path: `/milestone/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
