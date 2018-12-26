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

    export interface IIssueFields {
        flagged?: string,
        sprint?: ISprint,
        closedSprints?: ISprint[],
        description: string,
        project?: jira.IProjectPartial,
        comment: any[],
        epic: any,
        worklog: any[],
        updated?: number,
        timetracking?: any
    }

    export interface IIssue {
        expand?: string,
        id: string,
        total?: number,
        self: string,
        key: string,
        fields: IIssueFields,
    }

    export interface IBacklogList extends IListOutput {
        expand?: string,
        issues: IIssue[]
    }

}