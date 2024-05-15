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

export interface MiClient {
  /**
   * The name of the client
   * @maxLength 255
   */
  name: string;
  /** @format date */
  datecreated: string;
  /** The client description/notes area. This field accepts HTML, but certain HTML elements may be stripped out. */
  description?: string;
  /**
   * The main client email address. This email can also be part of a person contact, that is a person  profile who cannot login.
   * @maxLength 255
   */
  email?: string;
  /**
   * Client website URL.
   * @maxLength 255
   */
  website?: string;
  /**
   * Client phone number.
   * @maxLength 50
   */
  phone?: string;
  /**
   * Client fax number.
   * @maxLength 50
   */
  fax?: string;
  /** The client address. */
  address?: string;
  active: boolean;
}

export interface MiExpense {
  projectid: number;
  /** Set the person for the expense. If omitted, it defaults to the current person who is saving the expense. */
  personid?: number;
  /**
   * The date that the expense was incurred.
   * @format date
   */
  date: string;
  /**
   * The amount of the expense is what the expense cost the company. Executive users do not see this value.
   * @format double
   */
  expense: number;
  /**
   * This is what you are charging the client. If you are marking up the expense, the fee should be greater than the expense value. If you are not marking up the expense, this should be the same as the expense value.
   * @format double
   */
  fee: number;
  /**
   * The description of the expense.
   * @maxLength 255
   */
  note?: string;
}

export interface MiInvoice {
  projectid: number;
  /** @format date */
  date: string;
  termid: number;
  /**
   * If you specify the termid as "other" (6), you can assign a custom term name to this invoice.
   * @maxLength 255
   */
  termother?: string;
  /**
   * If you specify the termid as "other" (6), you must specify the custom due date of this invoice.
   * @format date
   */
  termotherdatedue?: string;
  /**
   * The invoice title.
   * @maxLength 255
   */
  title: string;
  description?: string;
  addressfrom?: string;
  addressto?: string;
  /** @maxLength 55 */
  purchaseorder?: string;
  /** @format double */
  tax?: number;
  /**
   * For places with dual taxation levels, the value of the secondary tax level.
   * @format double
   */
  secondtax?: number;
  /** For places with dual taxation levels, true if the second tax is compounded, false if the second tax is added. */
  secondtaxcompound?: boolean;
  disclaimer?: string;
  /**
   * If you wish to create a pre-filled invoice based on work performed, set this to the start date of the time entries you wish to include.
   * @format date
   */
  datebegin?: string;
  /**
   * If you wish to create a pre-filled invoice based on work performed, set this to the end date of the time entries you wish to include.
   * @format date
   */
  dateend?: string;
}

export interface MiInvoiceitem {
  /** The ID of the invoice to which this item applies. Not settable for existing non-custom items. */
  invoiceid: number;
  /**
   * The name for this line item.
   * @maxLength 255
   */
  name: string;
  /** The line item description. */
  description?: string;
  /**
   * Settable only for new/custom line items.
   * @format double
   */
  quantity?: number;
  /**
   * Settable only for new/custom line items.
   * @format double
   */
  rate?: number;
  /**
   * The value for the amount must be the product of the quantity and the rate, if they are both specified. Not settable for existing non-custom items.
   * @format double
   */
  amount: number;
}

export interface MiInvoicenote {
  invoiceid: number;
  /**
   * The title of the note.
   * @maxLength 255
   */
  title: string;
  /** The description of the note. */
  note?: string;
  /** @format date */
  date?: string;
}

export interface MiMilestone {
  /** The ID of the project the milestone belongs to. */
  projectid: number;
  /** The ID of the owner of this milestone. You can submit multiple owners in the form of comma separated integers (e.g. '22,334,222'). */
  ownerid: number;
  /**
   * The title of the milestone.
   * @maxLength 255
   */
  title: string;
  /**
   * The due date of the milestone. Milestones that are not completed and have a due date in the past are considered overdue. Milestones that are completed that have a due date in the future are considered in progress.
   * @format date
   */
  datedue: string;
  /** The milestone description. This field accepts HTML, but certain HTML elements may be stripped out. */
  description?: string;
  /** Whether the milestone has been completed or not. Milestones that are not completed that have a due date in the past are considered overdue. Milestones that are completed that have a due date in the future are considered in progress. */
  complete: boolean;
}

export interface MiMilestonenote {
  /** The ID of the milestone this note belongs to. */
  milestoneid: number;
  /** The body of the milestone note. This field accepts HTML, but certain HTML elements may be stripped out. */
  note: string;
  /** If true, this task note will be visible to executive users. For executive users, all notes created are public. */
  public: boolean;
}

export interface MiPayment {
  projectid: number;
  /** @format date */
  date: string;
  /** @format double */
  amount: number;
  typeid: number;
  /**
   * If the payment type is of type Other, a descriptor for that can be stored here.
   * @maxLength 35
   */
  reference?: string;
  /**
   * A description for the payment.
   * @maxLength 255
   */
  note?: string;
  invoiceid?: number;
}

export interface MiPerson {
  /** This ID of the client this person is associated with. */
  clientid?: number;
  /** @maxLength 255 */
  title?: string;
  /** @maxLength 65 */
  firstname: string;
  /** @maxLength 85 */
  lastname?: string;
  /** If 'Yes', this person will be added to the project team for all future projects. It does not grant access to existing projects. */
  allprojects?: boolean;
  /** A short description for this person. This field accepts HTML, but certain HTML elements may be stripped out. */
  notes?: string;
  /** Whether this person's contact information is visible to resource- and executive-level users. */
  private: boolean;
  /** Whether the person is active or inactive. */
  active: boolean;
  /**
   * For users that can log in, the username they will log in with. To remove a person's ability to log in, set this field to blank.
   * @maxLength 255
   */
  username?: string;
  /**
   * For users that can log in, the password they will log in with.
   * @maxLength 30
   */
  password?: string;
  /**
   * REQUIRED for adding a new person who can log in. Otherwise, edit a person's contact information using the personcontact resource.
   * @maxLength 255
   */
  email?: string;
  /** REQUIRED for adding a person who can log in. */
  groupid?: number;
}

export interface MiPersoncontact {
  /** The ID of the person to whom this contact information applies. Keep in mind only administrators may edit other people's contact information. */
  personid: number;
  value: string;
  contacttypeid: number;
  contactdescriptorid: number;
}

export interface MiProject {
  /** The ID of the client this project belongs to. */
  clientid?: number;
  /** The ID of the person who is manager of this project. Only administrator and manager user levels can be project managers. You can submit multiple managers in the form of comma separated integers (e.g. '22,334,222'). */
  managerid?: number;
  /**
   * The name of this project.
   * @maxLength 255
   */
  name: string;
  /** A short description of the project. This field accepts HTML, but certain HTML elements may be stripped out. */
  description?: string;
  /**
   * The start date of the project.
   * @format date
   */
  datestart: string;
  /**
   * The end date of the project.
   * @format date
   */
  dateend?: string;
  /**
   * The project budget.
   * @format double
   */
  budget?: number;
  /** Whether this project is billable or unbillable. This value becomes the default value for time submitted for this project. */
  billable: boolean;
  /** Whether the project is active or not. Certain plans have a limited number of active accounts available. */
  active: boolean;
  /**
   * Setting this value will send an alert to the project manager when a certain percentage of the budget is reached.
   * @format double
   */
  alert_percent?: number;
}

export interface MiProjectmodule {
  /** Once a project ID has been set for a project module, it cannot be changed. It must be deleted for this project and then re-created for the new project. */
  projectid: number;
  /** moduleid corresponds to the default module id located on the 'module' resource. ONLY REQUIRED IF adding a default module, NOT REQUIRED if adding a custom module. */
  moduleid?: number;
  description?: string;
  active: boolean;
  /**
   * The name of the module. REQUIRED IF adding a custom module OR converting a default module to a custom module.
   * @maxLength 155
   */
  module?: string;
}

export interface MiProjectnote {
  /** The project this note belongs to. You can only add new notes to active projects. */
  projectid: number;
  /**
   * The title of the project note.
   * @maxLength 255
   */
  title: string;
  /** The body of the project note. This field accepts HTML, but certain HTML elements may be stripped out. */
  note: string;
  /** Secure project notes are securely encoded before storage; they are also only visible to people with access to secure notes for this project. */
  secure: boolean;
}

export interface MiProjectteam {
  /** Limits the list to people belonging to this project. */
  projectid: number;
}

export interface MiProjectworktype {
  /** Once a project ID has been set for a project worktype, it cannot be changed. It must be deleted for this project and then re-created for the new project. */
  projectid: number;
  /** REQUIRED IF adding a project work type from the defaults section. NOT REQUIRED when editing. */
  worktypeid?: number;
  /**
   * REQUIRED IF adding a custom work type.
   * @format double
   */
  hourlyrate: number;
  /** @format double */
  esttime?: number;
  active: boolean;
  /**
   * REQUIRED IF adding a custom project worktype. The name of the work type.
   * @maxLength 155
   */
  worktype?: string;
}

export interface MiRequest {
  /** The ID of the owner of the work request. */
  personid: number;
  /** The project the work request belongs to. */
  projectid?: number;
  /** The ID of the priority of the work request. Please see the taskpriority resource for more information. */
  priorityid: number;
  /**
   * The work request title.
   * @maxLength 255
   */
  title: string;
  /**
   * The date on which the work request is due. If this is left blank, the date will default to one week ahead
   * @format date
   */
  datedue?: string;
  /** The work request description. This field accepts HTML, but certain HTML elements may be stripped out. */
  description?: string;
}

export interface MiTask {
  /** Allows you to specify the task assignee. You can submit multiple assignees in the form of comma separated integers (e.g. '22,334,222'). */
  assigneeid?: number;
  /** Allows you to specify the task followers. You can submit multiple followers in the form of comma separated integers (e.g. '22,334,222'). */
  followerid?: number;
  /** The milestone the task belongs to. */
  milestoneid?: number;
  /** The corresponding status of the task. Tasks that have a status other than closed and a due date in the past are considered overdue. */
  statusid: number;
  /** The project the task belongs to. */
  projectid: number;
  /** The module the task belongs to. */
  moduleid: number;
  /**
   * The task title.
   * @maxLength 255
   */
  title: string;
  /** The task summary. This field accepts HTML, but certain HTML elements may be stripped out. */
  summary?: string;
  /**
   * The start date of the task.
   * @format date
   */
  dateopen: string;
  /**
   * The due date of the task. Tasks that have a due date in the past that don't have the status set to closed are considered overdue.
   * @format date
   */
  datedue?: string;
  /**
   * The date on which the task was closed.
   * @format date
   */
  dateclosed?: string;
  /**
   * The estimated hours for the task.
   * @format double
   */
  estimate?: number;
  /** The ID of the owner of the task. You can submit multiple owners in the form of comma separated integers (e.g. '22,334,222'). NOTE: Resource-level users may not set the owner of a new task to someone other than themselves, and they are not allowed to change the owner of an existing task. */
  ownerid: number;
  /** The ID of the priority of the task. */
  priorityid: number;
}

export interface MiTasknote {
  /** The ID of the task this note belongs to. */
  taskid: number;
  /** The body of the task note. This field accepts HTML, but certain HTML elements may be stripped out. */
  note: string;
  /** If true, this task note will be visible to executive users. For executive users, all notes created are public. */
  public: boolean;
}

export interface MiTime {
  /** For adding general time, projectid is required, as is moduleid; the taskid field must be left blank (otherwise the entry will be interpreted as task time). For adding time associated with a task, this field, along with the moduleid field, may be left blank, as its values will be ignored. */
  projectid?: number;
  /** For adding general time, moduleid is required, as is projectid; the taskid field must be left blank (otherwise the entry will be interpreted as task time). For adding time associated with a task, this field, along with the projectid field, may be left blank, as its values will be ignored. */
  moduleid?: number;
  /** For adding time associated with a task, taskid is required. Since the task contains project and module information, moduleid and projectid may be left blank. By passing taskid, any values you pass for projectid and/or moduleid will be ignored. */
  taskid?: number;
  /** The worktypeid you pass should be associated with the project you pass, or in the case of task time, the project of the task you pass. */
  worktypeid: number;
  /** The personid you pass should be associated with the project you pass, or in the case of task time, the project of the task you pass. */
  personid: number;
  /** @format date */
  date: string;
  /**
   * The time in decimal format.
   * @format double
   */
  time: number;
  description?: string;
  billable: boolean;
  /**
   * The date this time entry was modified.
   * @format date-time
   */
  datemodified?: string;
}

export interface MiTimer {
  /** The ID of the task this timer is associated with. If left blank, this timer will be a General Timer */
  taskid?: number;
  /** The ID of the person this timer is associated with. */
  personid: number;
  /**
   * REQUIRED IF time field is blank. Setting this field indicates that a timer is running. If missing, server time will be used when creating a new timer.
   * @format date-time
   */
  starttime?: string;
  /**
   * REQUIRED IF starttime field is blank.
   * @format double
   */
  time?: number;
  /**
   * Time elapsed since timer was started. This field is ready only.
   * @format double
   */
  timelapsed?: number;
  /**
   * A description you want to apply to the timer.
   * @maxLength 255
   */
  name?: string;
  /**
   * The date on which the timer was last started or stopped
   * @format date
   */
  lastupdate?: string;
}

export interface MiClientListParams {
  /** Restricts the list based on a client's "localid," which is the number that appears associated with the client in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to clients who are either active or inactive. */
  active?: boolean;
  /** Limits the list to clients who match the search string. Searches client name, description and localid. */
  search?: string;
  /** Limits the list to clients who have active projects only. */
  projectsonly?: boolean;
  /** Sort the list by any of the following fields: id, localid, name, datecreated */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return clients starting from the nth client. */
  offset?: number;
  /** Sets a limit to the amount of clients returned in the response. */
  limit?: number;
}

export type MiClientListData = any;

export type MiClientCreateData = any;

export type MiClientDetailData = any;

export type MiClientUpdateData = any;

export type MiClientDeleteData = any;

export interface MiContactdescriptorListParams {
  /** Each contact type has various descriptors. This limits the list by the contact type of the ID passed. */
  contacttypeid: number;
}

export type MiContactdescriptorListData = any;

export type MiContacttypeListData = any;

export interface MiDocumentListParams {
  /** Limits the list to only documents visible to executive-level users. */
  public?: boolean;
  /** Limits the list to documents that are part of the task having the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  taskid?: number;
  /** Limits the list to documents that are part of the milestone having the ID passed, either belonging to the milestone itself or belonging to a task that is part of that milestone. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  milestoneid?: number;
  /** Limits the list to documents that are part of the work request having the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  queueid?: number;
  /** Limits the list to documents belonging to the client with the ID passed; belonging to projects, tasks or milestones that are part of that client. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to documents belonging to the project with the ID passed, either belonging to the project itself or belonging to tasks or milestones that are part of that project. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to documents belonging to tasks that have the module with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  moduleid?: number;
  /** Limits the list to documents originally uploaded by the person with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  personid?: number;
  /** Limits the list to documents that match the search string.. Searches title, notes, filename and tags. */
  search?: string;
  /** Limits the list to documents belonging to either active or inactive projects. */
  projectactive?: boolean;
  /** Excludes task documents in which the person with the ID passed is not a task assignee, owner or follower. */
  taskassignedorownedby?: number;
  /** Limits the list to documents tagged with the tag passed. */
  tag?: string;
  /**
   * Limits the list to documents uploaded on or after the date passed.
   * @format date
   */
  datebegin?: string;
  /**
   * Limits the list to documents uploaded on or before the date passed.
   * @format date
   */
  dateend?: string;
  /** Sort the list by any of the following fields: id, personid, title, public, datemodified, active. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return documents starting from the nth document. */
  offset?: number;
  /** Sets a limit to the amount of documents returned in the response. */
  limit?: number;
  /** A workaround to requesting the member resource, as the collection resource is much more detailed. */
  id?: number;
}

export type MiDocumentListData = any;

export type MiDocumentDetailData = any;

export type MiDownloadDetailData = any;

export interface MiExpenseListParams {
  /** Limits the list to expenses belonging to the projects with the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to expenses added by the persons with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  personid?: number;
  /** Limits the list to expenses belonging to a project belonging to the clients with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to expenses belonging to a project managed by the persons with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  managerid?: number;
  /**
   * Limits the list to expenses having a date on or after the date passed.
   * @format date
   */
  datebegin?: string;
  /**
   * Limits the list to expenses having a date on or before the date passed.
   * @format date
   */
  dateend?: string;
  /**
   * Limits the list to expenses having the date passed.
   * @format date
   */
  date?: string;
  /** Sort the list by any of the following fields: id, projectid, date, expense, fee, note, personid, project, client, and person */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return expenses starting from the nth expense. */
  offset?: number;
  /** Sets a limit to the amount of expenses returned in the response. */
  limit?: number;
}

export type MiExpenseListData = any;

export type MiExpenseCreateData = any;

export type MiExpenseDetailData = any;

export type MiExpenseUpdateData = any;

export type MiExpenseDeleteData = any;

export type MiGroupListData = any;

export type MiGroupDetailData = any;

export interface MiInvoiceListParams {
  /** Restricts the list based on a invoice's "localid," which is the number that appears associated with the invoice in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to invoices belonging to the client with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to invoices belonging to the project with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /**
   * Limits the list to expenses having a date on or after the date passed.
   * @format date
   */
  datebegin?: string;
  /**
   * Limits the list to expenses having a date on or before the date passed.
   * @format date
   */
  dateend?: string;
  /** Useful for specifying specific invoice statuses. Can be either "outstanding" or "paid". */
  status?: string;
  /** Limits the list to invoices that match the search string.. Searches title, description, localid, purchase order and address fields. */
  search?: string;
  /** Sort the list by any of the following fields: id, projectid, date, title, description, localid, purchaseorder, project, client, datepaid, subtotal, total, payments, balance, datedue, and daysoverdue. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return invoices starting from the nth invoice. */
  offset?: number;
  /** Sets a limit to the amount of invoices returned in the response. */
  limit?: number;
}

export type MiInvoiceListData = any;

export type MiInvoiceCreateData = any;

export type MiInvoiceDetailData = any;

export type MiInvoiceUpdateData = any;

export type MiInvoiceDeleteData = any;

export interface MiInvoiceitemListParams {
  /** Limits the list to invoice items belonging to the invoice with the ID passed. */
  invoiceid: number;
  /** Sort the list by any of the following fields: id, invoiceid, name, description, quantity, rate, and amount. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return invoiceitems starting from the nth invoiceitem. */
  offset?: number;
  /** Sets a limit to the amount of invoiceitems returned in the response. */
  limit?: number;
}

export type MiInvoiceitemListData = any;

export type MiInvoiceitemCreateData = any;

export type MiInvoiceitemDetailData = any;

export type MiInvoiceitemUpdateData = any;

export type MiInvoiceitemDeleteData = any;

export interface MiInvoicenoteListParams {
  /** Limits the list to invoice notes belonging to the invoice with the ID passed. */
  invoiceid: number;
  /** Limits the list to invoice notes created by the person with the ID passed. */
  authorid?: number;
  /** Return invoicenotes starting from the nth invoicenote. */
  offset?: number;
  /** Sets a limit to the amount of invoicenotes returned in the response. */
  limit?: number;
}

export type MiInvoicenoteListData = any;

export type MiInvoicenoteCreateData = any;

export type MiInvoicenoteDetailData = any;

export type MiInvoicenoteUpdateData = any;

export type MiInvoicenoteDeleteData = any;

export type MiInvoicetermListData = any;

export type MiInvoicetermDetailData = any;

export type MiGetMeData = any;

export type MiGetMe2Data = any;

export interface MiMilestoneListParams {
  /** Restricts the task list based on a task's "localid," which is the number that appears associated with the task in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to milestones that match the search string. Searches title, description, notes, and localid. */
  search?: string;
  /** Limits the list to milestones that belong to the client corresponding to the ID(s) passed. You can pass a value of -1 for projects that have no client. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to milestones that belong to the project corresponding to the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to milestones that belong to the owner corresponding to the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  ownerid?: number;
  /** Limits the list to milestones that are either owned by, or contains tasks which the people with the IDs specified are assigned, own, or are followers of. For restricted resources (users who can only see tasks that they own or that are assigned to them), this value will be set to the user by default. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  hasmilestonerelation?: number;
  /** Limits the list to milestones that are either complete or incomplete. */
  complete?: boolean;
  /**
   * Limits the list to milestones that have a due date on or after the date passed.
   * @format date
   */
  dateduebegin?: string;
  /**
   * Limits the list to milestones that have a due date on or before the date passed.
   * @format date
   */
  datedueend?: string;
  /** Limits the list to milestones with titles containing the search string. */
  title?: string;
  /** Sort the list by any of the following fields: id, localid, projectid, clientid, datedue, title, description, progress, estimate, actual, owner. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return milestones starting from the nth milestone. */
  offset?: number;
  /** Sets a limit to the amount of milestones returned in the response. */
  limit?: number;
}

export type MiMilestoneListData = any;

export type MiMilestoneCreateData = any;

export type MiMilestoneDetailData = any;

export type MiMilestoneUpdateData = any;

export type MiMilestoneDeleteData = any;

export interface MiMilestonenoteListParams {
  milestoneid: number;
  /** Return milestonenotes starting from the nth milestonenote. */
  offset?: number;
  /** Sets a limit to the amount of milestonenotes returned in the response. */
  limit?: number;
}

export type MiMilestonenoteListData = any;

export type MiMilestonenoteCreateData = any;

export type MiMilestonenoteDetailData = any;

export type MiMilestonenoteUpdateData = any;

export type MiMilestonenoteDeleteData = any;

export interface MiModuleListParams {
  active?: boolean;
  /** Return modules starting from the nth module. */
  offset?: number;
  /** Sets a limit to the amount of modules returned in the response. */
  limit?: number;
}

export type MiModuleListData = any;

export type MiModuleDetailData = any;

export interface MiPaymentListParams {
  /** Limits the list to payments belonging to the client with the ID passed. */
  clientid?: number;
  /** Limits the list to payments belonging to the client with the ID passed. */
  projectid?: number;
  /** Limits the list to payments posted by the persons with the ID passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  personid?: number;
  /**
   * Limits the list to payments having the date passed.
   * @format date
   */
  date?: string;
  /** Limits the list to payments having the payment type of the ID passed. For more information, see the paymenttype resource. */
  typeid?: number;
  /** Limits the list to payments belonging to the invoice with the ID passed. */
  invoiceid?: number;
  /** Sort the list by any of the following fields: id, projectid, date, amount, typeid, reference, note, invoiceid, type, project, and client. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return payments starting from the nth payment. */
  offset?: number;
  /** Sets a limit to the amount of invoices returned in the response. */
  limit?: number;
}

export type MiPaymentListData = any;

export type MiPaymentCreateData = any;

export type MiPaymentDetailData = any;

export type MiPaymentUpdateData = any;

export type MiPaymentDeleteData = any;

export type MiPaymenttypeListData = any;

export type MiPaymenttypeDetailData = any;

export interface MiPersonListParams {
  /** Restricts the list based on a person's "localid," which is the number that appears associated with the person in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to people whose usernames match the search string. */
  username?: string;
  /** Limits the list to people whose emails match the search string. */
  email?: string;
  /** Limits the list to people whose first names match the search string. */
  firstname?: string;
  /** Limits the list to people whose last names match the search string. */
  lastname?: string;
  /** Excludes people from the list who fall in the group IDs submitted. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  excludegroupids?: number;
  /** Limits the list to people who have access to the project IDs submitted. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to people who are associated with the ID of this client. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to people who have access to projects that belong to the client IDs submitted. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectclientid?: number;
  /** Limits the list to people who match the search string. Searches firstname, lastname, client, username, notes and contact info. */
  search?: string;
  /** Limits the list to people who are either active or inactive. */
  active?: boolean;
  /** Limits the list to people who are in the group of the ID submitted. */
  groupid?: number;
  /** Limits the list to people who should be added to all future projects. */
  allprojects?: boolean;
  /** Limits the list to people who are restricted to only tasks to which they own or have been assigned. */
  restricttasks?: boolean;
  /** Return people starting from the nth person. */
  offset?: number;
  /** Sets a limit to the amount of people returned in the response. */
  limit?: number;
}

export type MiPersonListData = any;

export type MiPersonCreateData = any;

export type MiPersonDetailData = any;

export type MiPersonUpdateData = any;

export type MiPersonDeleteData = any;

export interface MiPersoncontactListParams {
  personid: number;
  contacttypeid?: number;
  contactdescriptorid?: number;
}

export type MiPersoncontactListData = any;

export type MiPersoncontactCreateData = any;

export type MiPersoncontactDetailData = any;

export type MiPersoncontactUpdateData = any;

export type MiPersoncontactDeleteData = any;

export interface MiProjectListParams {
  /** Restricts the list based on a project's "localid," which is the number that appears associated with the project in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to projects belonging to the client whose ID was passed. Passing a value of -1 returns projects that do not belong to any client. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to projects managed by the person whose ID was passed. Passing a value of -1 returns projects that do not have any manager. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  managerid?: number;
  /** Limits the list to projects with name matching the search string. */
  name?: string;
  /**
   * Limits the list to projects beginning on this date.
   * @format date
   */
  datestart?: string;
  /**
   * Limits the list to projects ending on this date.
   * @format date
   */
  dateend?: string;
  /** Limits the list to propjects that match the search string. Searches name, description and client and localid. */
  search?: string;
  /** Limits the list to active or inactive projects only. */
  active?: boolean;
  /** Limits the list to billable or unbillable projects only. */
  billable?: boolean;
  /** Limits the list to only projects to which the person ID has access. */
  personid?: number;
  /** Sort the list by any of the following fields: id, localid, clientid, managerid, name, datestart, dateend, billable */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return projects starting from the nth project. */
  offset?: number;
  /** Sets a limit to the amount of projects returned in the response. */
  limit?: number;
}

export type MiProjectListData = any;

export type MiProjectCreateData = any;

export type MiProjectDetailData = any;

export type MiProjectUpdateData = any;

export type MiProjectDeleteData = any;

export interface MiProjectmoduleListParams {
  /** Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** This filter will automatically be applied to resource users, as they cannot see inactive modules. */
  active?: boolean;
  personid?: number;
  /** Return projectmodules starting from the nth projectmodule. */
  offset?: number;
  /** Sets a limit to the amount of projectmodules returned in the response. */
  limit?: number;
}

export type MiProjectmoduleListData = any;

export type MiProjectmoduleCreateData = any;

export type MiProjectmoduleDetailData = any;

export type MiProjectmoduleUpdateData = any;

export type MiProjectmoduleDeleteData = any;

export interface MiProjectnoteListParams {
  /** Restricts the list based on a project note's "localid," which is the number that appears associated with the note in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Restricts the list to project notes belonging to projects for the clients corresponding to the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Restricts the list to project notes belonging to projects corresponding to the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Restricts the list to project notes created by the person corresponding to the ID(s) passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  authorid?: number;
  title?: string;
  /** Limits the list to project notes that match the search string. Searches title and note* (* only searched when project note is not secure). */
  search?: string;
  noteid?: number;
  /** Return projectnotes starting from the nth projectnote. */
  offset?: number;
  /** Sets a limit to the amount of projectnotes returned in the response. */
  limit?: number;
}

export type MiProjectnoteListData = any;

export type MiProjectnoteCreateData = any;

export type MiProjectnoteDetailData = any;

export type MiProjectnoteUpdateData = any;

export type MiProjectnoteDeleteData = any;

export interface MiProjectteamListParams {
  /** Limits the list to people belonging to this project. */
  projectid: number;
}

export type MiProjectteamListData = any;

export type MiProjectteamCreateData = any;

export type MiProjectteamDetailData = any;

export type MiProjectteamUpdateData = any;

export type MiProjectteamDeleteData = any;

export interface MiProjectworktypeListParams {
  /** Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** This filter will automatically be applied to resource users, as they cannot see inactive modules. */
  active?: boolean;
  personid?: number;
  /** Return projectworktypes starting from the nth projectworktype. */
  offset?: number;
  /** Sets a limit to the amount of projectworktypes returned in the response. */
  limit?: number;
}

export type MiProjectworktypeListData = any;

export type MiProjectworktypeCreateData = any;

export type MiProjectworktypeDetailData = any;

export type MiProjectworktypeUpdateData = any;

export type MiProjectworktypeDeleteData = any;

export interface MiRequestListParams {
  /** Limits the list to work requests having this priority. */
  priorityid?: number;
  /** Limits the list to work requests submitted by this person. */
  personid?: number;
  /** Limits the list to work requests belonging to this project. */
  projectid?: number;
  /** Sort the list by any of the following fields: id, title, date, datedue, personid, person, projectid, project, clientid, client, email, priorityid, priority. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return requests starting from the nth request. */
  offset?: number;
  /** Sets a limit to the amount of requests returned in the response. */
  limit?: number;
}

export type MiRequestListData = any;

export type MiRequestCreateData = any;

export type MiRequestDetailData = any;

export type MiRequestUpdateData = any;

export type MiRequestDeleteData = any;

export interface MiTaskListParams {
  /** Restricts the task list based on a task's "localid," which is the number that appears associated with the task in the Intervals application. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  localid?: number;
  /** Limits the list to people who have access to the project this task belongs to. */
  personid?: number;
  /** Retrieves timerid and starttime for the passed-in personid (if present). */
  includetimerid?: number;
  /** Limits the list to tasks assigned to this person. To include tasks with no assignee, pass a value of -1. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  assigneeid?: number;
  /** Limits the list to tasks followed by this person. To include tasks with no followers, pass a value of -1. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  followerid?: number;
  /** Limits the list to tasks having this status. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  statusid?: number;
  /** Limits the list to tasks belonging to this client. To include tasks with no client, pass a value of -1. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to tasks belonging to this project. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to tasks having this module. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  moduleid?: number;
  /** Limits the list to tasks belonging to this milestone. To include tasks with no milestone, pass a value of -1. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  milestoneid?: number;
  /** Limits the list to tasks containing this string in the title. */
  title?: string;
  /**
   * Limits the list to tasks opening on this specific date.
   * @format date
   */
  dateopen?: string;
  /**
   * Limits the list to tasks starting after the date passed.
   * @format date
   */
  dateopenbegin?: string;
  /**
   * Limits the list to tasks starting before the date passed.
   * @format date
   */
  dateopenend?: string;
  /**
   * Limits the list to tasks due on this specific date.
   * @format date
   */
  datedue?: string;
  /**
   * Limits the list to tasks due after the date passed.
   * @format date
   */
  dateduebegin?: string;
  /**
   * Limits the list to tasks due before the date passed.
   * @format date
   */
  datedueend?: string;
  /**
   * Limits the list to tasks closed on this specific date.
   * @format date
   */
  dateclosed?: string;
  /**
   * Limits the list to tasks closed after the date passed.
   * @format date
   */
  dateclosedbegin?: string;
  /**
   * Limits the list to tasks closed before the date passed.
   * @format date
   */
  dateclosedend?: string;
  /**
   * Limits the list to tasks modified after the date passed.
   * @format date-time
   */
  datemodifiedbegin?: string;
  /**
   * Limits the list to tasks modified before the date passed.
   * @format date-time
   */
  datemodifiedend?: string;
  /** Limits the list to tasks with or without a due date. */
  hasduedate?: boolean;
  /** Limits the list to tasks owned by this person. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  ownerid?: number;
  /** Limits the list to tasks having this priority. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  priorityid?: number;
  /** Limits the list to tasks matching this tasklistfilter. */
  tasklistfilterid?: number;
  overdue?: boolean;
  /** Limits the list to tasks that are not closed. */
  excludeclosed?: boolean;
  /** [DEPRECATED] Previously limited the list to tasks that are either assigned to or owned by the people specified. Now this filter operates like the 'hastaskrelation' filter, which is described below and includes tasks followed by the people listed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  assignedorownedby?: number;
  /** Limits the list to tasks that are either assigned to, followed by or owned by the people with the IDs specified. For restricted resources (users who can only see tasks that they own or that are assigned to them), this value will be set to the user by default; anything in the assigneeid or ownerid fields will be overridden. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  hastaskrelation?: number;
  /** Limits the list to tasks that match the search string. Searches title, summary, request queue title, request queue description, and localid. */
  search?: string;
  /** Sort the list by any of the following fields: id, localid, queueid, assigneeid, statusid, projectid, module, moduleid, title, summary, dateopen, datedue, dateclosed, estimate, ownerid, priorityid, sev.priority, severity, status (returns status alphabetically), status_order (returns status ordered by level of completion), project, client, assignee, milestoneid, milestone, owners. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return tasks starting from the nth task. */
  offset?: number;
  /** Sets a limit to the amount of tasks returned in the response. */
  limit?: number;
}

export type MiTaskListData = any;

export type MiTaskCreateData = any;

export type MiTaskDetailData = any;

export type MiTaskUpdateData = any;

export type MiTaskDeleteData = any;

export interface MiTasklistfilterListParams {
  /** Return tasklistfilters starting from the nth tasklistfilter. */
  offset?: number;
  /** Sets a limit to the amount of tasklistfilters returned in the response. */
  limit?: number;
}

export type MiTasklistfilterListData = any;

export type MiTasklistfilterDetailData = any;

export interface MiTasknoteListParams {
  /** Limits the list to task notes belonging to a task. If not submitted, only last 7 days of task notes created will be returned. Or, use the datemodifiedbegin and datemodifiedend fields to return task notes modified instead of created.  Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  taskid?: number;
  title?: string;
  /**
   * Limits the list to task notes created on this date.
   * @format date
   */
  date?: string;
  /**
   * Limits the list to task notes created on or after this date.
   * @format date-time
   */
  datebegin?: string;
  /**
   * Limits the list to task notes created before or on this date.
   * @format date-time
   */
  dateend?: string;
  /**
   * Limits the list to task notes modified on or after this date.
   * @format date-time
   */
  datemodifiedbegin?: string;
  /**
   * Limits the list to task notes modified before or on this date.
   * @format date-time
   */
  datemodifiedend?: string;
  /** Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  authorid?: number;
  public?: boolean;
  /** Sort the list by any of the following fields: id, taskid, authorid, date. */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return tasknotes starting from the nth tasknote. */
  offset?: number;
  /** Sets a limit to the amount of tasknotes returned in the response. */
  limit?: number;
}

export type MiTasknoteListData = any;

export type MiTasknoteCreateData = any;

export type MiTasknoteDetailData = any;

export type MiTasknoteUpdateData = any;

export type MiTasknoteDeleteData = any;

export interface MiTaskpriorityListParams {
  active?: boolean;
  /** Return taskpriorities starting from the nth taskpriority. */
  offset?: number;
  /** Sets a limit to the amount of taskpriorities returned in the response. */
  limit?: number;
}

export type MiTaskpriorityListData = any;

export type MiTaskpriorityDetailData = any;

export interface MiTaskstatusListParams {
  active?: boolean;
  /** Return taskstatuses starting from the nth taskstatus. */
  offset?: number;
  /** Sets a limit to the amount of taskstatuses returned in the response. */
  limit?: number;
}

export type MiTaskstatusListData = any;

export type MiTaskstatusDetailData = any;

export interface MiTimeListParams {
  /** If set to true, limits the list to time entries for active projects and people only. */
  activeonly?: boolean;
  /** Limits the list to time entries belonging to the module whose ID was passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  moduleid?: number;
  /** Limits the list to time entries belonging to the task whose ID was passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  taskid?: number;
  /** Limits the list to time entries belonging to the worktype whose ID was passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  worktypeid?: number;
  /** Limits the list to time entries belonging to the person whose ID was passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  personid?: number;
  /** Limits the list to time entries belonging to the client whose ID was passed. Passing a value of -1 returns time entries belonging to projects that do not have a client. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  clientid?: number;
  /** Limits the list to time entries belonging to the project whose ID was passed. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  projectid?: number;
  /** Limits the list to time entries belonging to the milestone whose ID was passed. Passing a value of -1 returns time entries that are not associated with any milestone. Allows multiple values in CSV format (e.g. "3,5,11,19"). */
  milestoneid?: number;
  /**
   * Limits the list to time entries occuring on the date passed.
   * @format date
   */
  date?: string;
  /**
   * Limits the list to time entries occuring after the date passed.
   * @format date
   */
  datebegin?: string;
  /**
   * Limits the list to time entries occuring before the date passed.
   * @format date
   */
  dateend?: string;
  /**
   * Limits the list to time modified after the date passed.
   * @format date-time
   */
  datemodifiedbegin?: string;
  /**
   * Limits the list to time modified before the date passed.
   * @format date-time
   */
  datemodifiedend?: string;
  /** Limits the list to time entries marked as either billable or unbillable. */
  billable?: boolean;
  /** Limits the list to time entries on timesheets that have been approved (for 't') or timesheets that have not been approved (for 'f'). */
  approved?: boolean;
  /** Sort the list by any of the following fields: id, t.date, datemodified */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return time starting from the nth time entry. */
  offset?: number;
  /** Sets a limit to the amount of time entries returned in the response. */
  limit?: number;
}

export type MiTimeListData = any;

export type MiTimeCreateData = any;

export type MiTimeDetailData = any;

export type MiTimeUpdateData = any;

export type MiTimeDeleteData = any;

export interface MiTimerListParams {
  /** Ordinarily, the list returns a list of active task timers. Appending this to your request returns the list of General Timers. Setting this to true returns the list of General Timers. */
  generaltimers?: boolean;
  /** Setting this to true combines the list to return both general timers AND task timers in one request, and returns extra task information for task timers. */
  gettimerinfo?: boolean;
  taskid?: number;
  personid?: number;
  projectid?: number;
  clientid?: number;
  /** Sort the list by any of the following fields: lastupdate */
  sortfield?: string;
  /** Sets the sort direction of the returned list. Must be either "ASC" or "DESC". */
  sortdir?: string;
  /** Return timers starting from the nth timer. */
  offset?: number;
  /** Sets a limit to the amount of timers returned in the response. */
  limit?: number;
}

export type MiTimerListData = any;

export type MiTimerCreateData = any;

export type MiTimerDetailData = any;

export type MiTimerUpdateData = any;

export type MiTimerDeleteData = any;

export interface MiWorktypeListParams {
  active?: boolean;
  /** Return worktypes starting from the nth worktype. */
  offset?: number;
  /** Sets a limit to the amount of worktypes returned in the response. */
  limit?: number;
}

export type MiWorktypeListData = any;

export type MiWorktypeDetailData = any;
