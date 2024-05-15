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

import { MiDocumentDetailData, MiDocumentListData, MiDocumentListParams, MiDownloadDetailData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Document<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags document
   * @name DocumentList
   * @summary Get one or more documents
   * @request GET:/document
   * @secure
   */
  documentList = (query: MiDocumentListParams, params: RequestParams = {}) =>
    this.request<MiDocumentListData, any>({
      path: `/document`,
      method: 'GET',
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Available to Administrator, Manager, Resource, Executive user levels.
   *
   * @tags document
   * @name DocumentDetail
   * @summary Retrieve a document by id.
   * @request GET:/document/{id}/
   * @secure
   */
  documentDetail = (id: number, params: RequestParams = {}) =>
    this.request<MiDocumentDetailData, any>({
      path: `/document/${id}/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Allows you to download the most recent version of this document.
   *
   * @tags document
   * @name DownloadDetail
   * @summary Download a document
   * @request GET:/document/{documentid}/download/
   * @secure
   */
  downloadDetail = (documentid: number, params: RequestParams = {}) =>
    this.request<MiDownloadDetailData, any>({
      path: `/document/${documentid}/download/`,
      method: 'GET',
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
