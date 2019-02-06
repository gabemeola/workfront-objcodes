/**
 * Copyright 2017 Workfront
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type TObjCode = "ACSLVL" | "ALVPER" | "ACSREQ" | "ACSRUL" | "ARPREF" | "ACSCP" | "ASCPAT" | "ACSTOK" | "ACNTRP" | "ACK" | "AGILEV" | "ANCMNT" | "ANMATT" | "AMNTO" | "ANCREC" | "APPBLD" | "APEVT" | "APGLOB" | "APPINF" | "APPROVAL" | "ARVPTH" | "ARVPRC" | "APRPROCATCH" | "ARVSTP" | "ARVSTS" | "ASSGN" | "AUDS" | "AUTH" | "AVATAR" | "AWAPVL" | "BKGJOB" | "BLIN" | "BSTSK" | "BILL" | "BRND" | "BDNEVT" | "CALEVT" | "CALITM" | "CALEND" | "CALPTL" | "CALSEC" | "CALEXP" | "LTMPLC" | "CTGY" | "CATACR" | "CTCSRL" | "CTCSRM" | "CTGYPA" | "CTGPEX" | "CMPY" | "CMPSRV" | "CPPRED" | "CXTHP" | "CSTEM" | "CSTEMO" | "LTMCL" | "CSTMNU" | "CMSCMS" | "CSTQRT" | "CUST" | "CUSDEL" | "CSFD" | "CUSTPR" | "CPTC" | "CSTSEC" | "DMETAL" | "DMETAG" | "DOCFLD" | "DOCU" | "DOCAPL" | "DOCFDR" | "DOCPRO" | "DOCCFG" | "DOCMET" | "DOCREQ" | "DOCSHR" | "DOCTSK" | "DOCV" | "EMAILC" | "EMLTPL" | "ENDR" | "ENDSHR" | "EVNTH" | "EVTSUB" | "EWS" | "EXRATE" | "EXPNS" | "EXPTYP" | "EXTDOC" | "EXTSEC" | "FVRITE" | "FEATR" | "FINDAT" | "GROUP" | "HOUR" | "HOURT" | "IPRAGE" | "IROW" | "ITMPL" | "IDDI" | "ITRN" | "JRNLE" | "JRNLF" | "KSS" | "LYTMPL" | "LTMPDP" | "LTMPLP" | "LICEOR" | "LIKE" | "LNKFDR" | "MTSK" | "MSGARG" | "PRSTOBJ" | "MILE" | "MPATH" | "MOBILDVC" | "NONWKD" | "NOTE" | "NTAG" | "NOTPRF" | "TMNR" | "OBJCAT" | "OPTASK" | "PARAM" | "PRMDTX" | "PGRP" | "POPT" | "PVAL" | "POPA" | "PTLPFL" | "PTLSEC" | "PTLTAB" | "PRTBSC" | "PORT" | "PRED" | "PROSET" | "PCPREF" | "PRGM" | "PROJ" | "PRTU" | "PTEAM" | "PROOF" | "QUED" | "QUET" | "QUETGP" | "RATE" | "RECENT" | "RECENTMENUITEM" | "RUPDTE" | "RECR" | "RMVDOV" | "RPTFDR" | "RSELR" | "RESVT" | "RSALLO" | "RSCONT" | "RESMGR" | "RSPOOL" | "RSFT" | "RSTOBJ" | "RISK" | "RSKTYP" | "ROLE" | "RRUL" | "S3MT" | "SSOMAP" | "SSOMR" | "SSOPT" | "SSOUSR" | "SNDMG" | "SCHED" | "SCHREP" | "SCORE" | "SCANS" | "SCOPT" | "SCOREQ" | "SRCEVT" | "SECANC" | "SEQ" | "SHRSET" | "SPAPVR" | "TASK" | "TEAMOB" | "TEAMMB" | "TEAMMR" | "TMPL" | "TASSGN" | "TPRED" | "TTSK" | "TMTU" | "TTEAM" | "TMNOT" | "TSHET" | "TSPRO" | "TSHTMP" | "UIFT" | "UIGB" | "UITMPL" | "UIVW" | "UPDATE" | "USER" | "USERAC" | "USRAVL" | "USRDEL" | "USRGPS" | "USRNOT" | "USOP" | "USERPF" | "USERRS" | "USRSEC" | "WORK" | "WRKITM"

export declare const AccessLevel: 'ACSLVL'
export declare const AccessLevelPermissions: 'ALVPER'
export declare const AccessRequest: 'ACSREQ'
export declare const AccessRule: 'ACSRUL'
export declare const AccessRulePreference: 'ARPREF'
export declare const AccessScope: 'ACSCP'
export declare const AccessScopeAction: 'ASCPAT'
export declare const AccessToken: 'ACSTOK'
export declare const AccountRep: 'ACNTRP'
export declare const Acknowledgement: 'ACK'
export declare const AgileView: 'AGILEV'
export declare const Announcement: 'ANCMNT'
export declare const AnnouncementAttachment: 'ANMATT'
export declare const AnnouncementOptOut: 'AMNTO'
export declare const AnnouncementRecipient: 'ANCREC'
export declare const AppBuild: 'APPBLD'
export declare const AppEvent: 'APEVT'
export declare const AppGlobal: 'APGLOB'
export declare const AppInfo: 'APPINF'
export declare const Approval: 'APPROVAL'
export declare const ApprovalPath: 'ARVPTH'
export declare const ApprovalProcess: 'ARVPRC'
export declare const ApprovalProcessAttachable: 'APRPROCATCH'
export declare const ApprovalStep: 'ARVSTP'
export declare const ApproverStatus: 'ARVSTS'
export declare const Assignment: 'ASSGN'
export declare const AuditLoginAsSession: 'AUDS'
export declare const Authentication: 'AUTH'
export declare const Avatar: 'AVATAR'
export declare const AwaitingApproval: 'AWAPVL'
export declare const BackgroundJob: 'BKGJOB'
export declare const Baseline: 'BLIN'
export declare const BaselineTask: 'BSTSK'
export declare const BillingRecord: 'BILL'
export declare const Branding: 'BRND'
export declare const BurndownEvent: 'BDNEVT'
export declare const CalendarEvent: 'CALEVT'
export declare const CalendarFeedEntry: 'CALITM'
export declare const CalendarInfo: 'CALEND'
export declare const CalendarPortalSection: 'CALPTL'
export declare const CalendarSection: 'CALSEC'
export declare const CallableExpression: 'CALEXP'
export declare const CardField: 'LTMPLC'
export declare const Category: 'CTGY'
export declare const CategoryAccessRule: 'CATACR'
export declare const CategoryCascadeRule: 'CTCSRL'
export declare const CategoryCascadeRuleMatch: 'CTCSRM'
export declare const CategoryParameter: 'CTGYPA'
export declare const CategoryParameterExpression: 'CTGPEX'
export declare const Company: 'CMPY'
export declare const ComponentKey: 'CMPSRV'
export declare const ContextSensitiveHelp: 'CXTHP'
export declare const CrossProjectPredecessor: 'CPPRED'
export declare const CustomEnum: 'CSTEM'
export declare const CustomEnumOrder: 'CSTEMO'
export declare const CustomLabel: 'LTMCL'
export declare const CustomMenu: 'CSTMNU'
export declare const CustomMenuCustomMenu: 'CMSCMS'
export declare const CustomQuarter: 'CSTQRT'
export declare const Customer: 'CUST'
export declare const CustomerDeletion: 'CUSDEL'
export declare const CustomerFeedback: 'CSFD'
export declare const CustomerPreferences: 'CUSTPR'
export declare const CustomerTimelineCalc: 'CPTC'
export declare const CustsSections: 'CSTSEC'
export declare const DocMetadataLink: 'DMETAL'
export declare const DocMetadataLinkGroup: 'DMETAG'
export declare const DocsFolders: 'DOCFLD'
export declare const Document: 'DOCU'
export declare const DocumentApproval: 'DOCAPL'
export declare const DocumentFolder: 'DOCFDR'
export declare const DocumentProvider: 'DOCPRO'
export declare const DocumentProviderConfig: 'DOCCFG'
export declare const DocumentProviderMetadata: 'DOCMET'
export declare const DocumentRequest: 'DOCREQ'
export declare const DocumentShare: 'DOCSHR'
export declare const DocumentTaskStatus: 'DOCTSK'
export declare const DocumentVersion: 'DOCV'
export declare const Email: 'EMAILC'
export declare const EmailTemplate: 'EMLTPL'
export declare const Endorsement: 'ENDR'
export declare const EndorsementShare: 'ENDSHR'
export declare const EventHandler: 'EVNTH'
export declare const EventSubscription: 'EVTSUB'
export declare const EwsFileHandle: 'EWS'
export declare const ExchangeRate: 'EXRATE'
export declare const Expense: 'EXPNS'
export declare const ExpenseType: 'EXPTYP'
export declare const ExternalDocument: 'EXTDOC'
export declare const ExternalSection: 'EXTSEC'
export declare const Favorite: 'FVRITE'
export declare const Feature: 'FEATR'
export declare const FinancialData: 'FINDAT'
export declare const Group: 'GROUP'
export declare const Hour: 'HOUR'
export declare const HourType: 'HOURT'
export declare const IPRange: 'IPRAGE'
export declare const ImportRow: 'IROW'
export declare const ImportTemplate: 'ITMPL'
export declare const InstalledDDItem: 'IDDI'
export declare const Iteration: 'ITRN'
export declare const JournalEntry: 'JRNLE'
export declare const JournalField: 'JRNLF'
export declare const KickStart: 'KSS'
export declare const LayoutTemplate: 'LYTMPL'
export declare const LayoutTemplateDatePreference: 'LTMPDP'
export declare const LayoutTemplatePage: 'LTMPLP'
export declare const LicenseOrder: 'LICEOR'
export declare const Like: 'LIKE'
export declare const LinkedFolder: 'LNKFDR'
export declare const MasterTask: 'MTSK'
export declare const MessageArg: 'MSGARG'
export declare const MetaRecord: 'PRSTOBJ'
export declare const Milestone: 'MILE'
export declare const MilestonePath: 'MPATH'
export declare const MobileDevice: 'MOBILDVC'
export declare const NonWorkDay: 'NONWKD'
export declare const Note: 'NOTE'
export declare const NoteTag: 'NTAG'
export declare const NotificationPreference: 'NOTPRF'
export declare const NotificationRecord: 'TMNR'
export declare const ObjectCategory: 'OBJCAT'
export declare const OpTask: 'OPTASK'
export declare const Parameter: 'PARAM'
export declare const ParameterDescriptiveText: 'PRMDTX'
export declare const ParameterGroup: 'PGRP'
export declare const ParameterOption: 'POPT'
export declare const ParameterValue: 'PVAL'
export declare const PopAccount: 'POPA'
export declare const PortalProfile: 'PTLPFL'
export declare const PortalSection: 'PTLSEC'
export declare const PortalTab: 'PTLTAB'
export declare const PortalTabSection: 'PRTBSC'
export declare const Portfolio: 'PORT'
export declare const Predecessor: 'PRED'
export declare const Preference: 'PROSET'
export declare const PrivateCustomerPref: 'PCPREF'
export declare const Program: 'PRGM'
export declare const Project: 'PROJ'
export declare const ProjectUser: 'PRTU'
export declare const ProjectUserRole: 'PTEAM'
export declare const Proof: 'PROOF'
export declare const QueueDef: 'QUED'
export declare const QueueTopic: 'QUET'
export declare const QueueTopicGroup: 'QUETGP'
export declare const Rate: 'RATE'
export declare const Recent: 'RECENT'
export declare const RecentMenuItem: 'RECENTMENUITEM'
export declare const RecentUpdate: 'RUPDTE'
export declare const RecurrenceRule: 'RECR'
export declare const RemovedDocumentVersion: 'RMVDOV'
export declare const ReportFolder: 'RPTFDR'
export declare const Reseller: 'RSELR'
export declare const ReservedTime: 'RESVT'
export declare const ResourceAllocation: 'RSALLO'
export declare const ResourceContour: 'RSCONT'
export declare const ResourceManager: 'RESMGR'
export declare const ResourcePool: 'RSPOOL'
export declare const ResourceSchedulingFilter: 'RSFT'
export declare const RestorableObject: 'RSTOBJ'
export declare const Risk: 'RISK'
export declare const RiskType: 'RSKTYP'
export declare const Role: 'ROLE'
export declare const RoutingRule: 'RRUL'
export declare const S3Migration: 'S3MT'
export declare const SSOMapping: 'SSOMAP'
export declare const SSOMappingRule: 'SSOMR'
export declare const SSOOption: 'SSOPT'
export declare const SSOUsername: 'SSOUSR'
export declare const SandboxMigration: 'SNDMG'
export declare const Schedule: 'SCHED'
export declare const ScheduledReport: 'SCHREP'
export declare const ScoreCard: 'SCORE'
export declare const ScoreCardAnswer: 'SCANS'
export declare const ScoreCardOption: 'SCOPT'
export declare const ScoreCardQuestion: 'SCOREQ'
export declare const SearchEvent: 'SRCEVT'
export declare const SecurityAncestor: 'SECANC'
export declare const Sequence: 'SEQ'
export declare const SharingSettings: 'SHRSET'
export declare const StepApprover: 'SPAPVR'
export declare const Task: 'TASK'
export declare const Team: 'TEAMOB'
export declare const TeamMember: 'TEAMMB'
export declare const TeamMemberRole: 'TEAMMR'
export declare const Template: 'TMPL'
export declare const TemplateAssignment: 'TASSGN'
export declare const TemplatePredecessor: 'TPRED'
export declare const TemplateTask: 'TTSK'
export declare const TemplateUser: 'TMTU'
export declare const TemplateUserRole: 'TTEAM'
export declare const TimedNotification: 'TMNOT'
export declare const Timesheet: 'TSHET'
export declare const TimesheetProfile: 'TSPRO'
export declare const TimesheetTemplate: 'TSHTMP'
export declare const UIFilter: 'UIFT'
export declare const UIGroupBy: 'UIGB'
export declare const UITemplate: 'UITMPL'
export declare const UIView: 'UIVW'
export declare const Update: 'UPDATE'
export declare const User: 'USER'
export declare const UserActivity: 'USERAC'
export declare const UserAvailability: 'USRAVL'
export declare const UserDelegation: 'USRDEL'
export declare const UserGroups: 'USRGPS'
export declare const UserNote: 'USRNOT'
export declare const UserObjectPref: 'USOP'
export declare const UserPrefValue: 'USERPF'
export declare const UserResource: 'USERRS'
export declare const UsersSections: 'USRSEC'
export declare const Work: 'WORK'
export declare const WorkItem: 'WRKITM'
