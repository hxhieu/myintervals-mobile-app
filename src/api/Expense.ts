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
  MiExpense,
  MiExpenseCreateData,
  MiExpenseDeleteData,
  MiExpenseDetailData,
  MiExpenseListData,
  MiExpenseListParams,
  MiExpenseUpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Expense<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags expense
   * @name ExpenseList
   * @summary Get one or more expenses
   * @request GET:/expense
   * @secure
   */
  expenseList = (query: MiExpenseListParams, params: RequestParams = {}) =>
    this.request<MiExpenseListData, any>({
      path: `/expense`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags expense
   * @name ExpenseCreate
   * @summary Add a expense
   * @request POST:/expense
   * @secure
   */
  expenseCreate = (expense: MiExpense, params: RequestParams = {}) =>
    this.request<MiExpenseCreateData, any>({
      path: `/expense`,
      method: 'POST',
      body: expense,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Executive user levels.
   *
   * @tags expense
   * @name ExpenseDetail
   * @summary Retrieve a expense by id.
   * @request GET:/expense/{id}/
   * @secure
   */
  expenseDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiExpenseDetailData, any>({
      path: `/expense/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager user levels.
   *
   * @tags expense
   * @name ExpenseUpdate
   * @summary Update a expense by id.
   * @request PUT:/expense/{id}/
   * @secure
   */
  expenseUpdate = (id: number, expense: MiExpense, params: RequestParams = {}) =>
    this.request<MiExpenseUpdateData, any>({
      path: `/expense/${id}/`,
      method: 'PUT',
      body: expense,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator user levels.
   *
   * @tags expense
   * @name ExpenseDelete
   * @summary Delete a expense
   * @request DELETE:/expense/{id}/
   * @secure
   */
  expenseDelete = (id: number, params: RequestParams = {}) =>
    this.request<MiExpenseDeleteData, any>({
      path: `/expense/${id}/`,
      method: 'DELETE',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
