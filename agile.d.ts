// Jira Agile (a.k.a. Greenhopper) rest api
// see https://developer.atlassian.com/cloud/jira/software/rest/ for details
//

declare namespace agile {
    export enum BoardType {
        SCRUM = 'scrum',
        KANBAN = 'kanban'
    }

    export interface IBoard {
        id: number,
        self: string,
        name: string,
        type: BoardType
    }

    export interface IListOutput {
        maxResults: number,
        startAt?: number,
        total?: number,
        isLast?: boolean,
    }

    export interface IBoardList extends IListOutput {
        values: IBoard[];
    }

    export interface ISprint {
        id: number,
        self: string,
        state: string, // possibly "future", "active", "closed" - multiple values can be concatenated with commas
        name: string,
        startDate?: Date,
        endDate?: Date,
        completeDate?: Date,
        goal: string;

    }

    export interface IWorklog {
        author: any,
        comment: any,
        id?: string,
        issueId: string,
        self: string,
        started?: Date,
        timeSpent?: string,
        timeSpentSeconds?: number,
        updateAuthor: any,
        updated: Date,
        visibility: any        
    }

    export interface ITimeTracking {
        originalEstimate: string,
        originalEstimateSeconds: number,
        remainingEstimate: string,
        remainingEstimateSeconds: number
    }

    export interface IIssueType {
        id: string,
        self: string,
        description: string,
        iconUrl: string,
        name: string,
        subtask?: boolean,
        avatarId?: number
    }

    export interface IIssueFields {
        issuetype?: IIssueType,
        flagged?: string,
        sprint?: ISprint,
        status?: any,
        closedSprints?: ISprint[],
        description: string,
        summary: string,
        project?: jira.IProjectPartial,
        comment: any[],
        epic: any,
        worklog: IWorklog[],
        updated?: number,
        timetracking?: ITimeTracking
    }

    export interface IIssue {
        expand?: string,
        id: string,
        total?: number,
        self: string,
        key: string,
        fields: IIssueFields,
    }

    export interface IIssueList extends IListOutput {
        expand?: string,
        issues: IIssue[]
    }

    export interface ISprintList extends IListOutput {
        values: ISprint[]
    }

}