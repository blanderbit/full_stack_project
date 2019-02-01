import { Action } from '@ngrx/store';

export enum ActionTypes {
    getProfile = 'get Profile',
    updateProfile = 'update Profile',
    getCountryAndCode = 'Get country and code',
    getEvents = 'get events',
    clearEvents = 'clear events',
    updateEvents = 'update events',
    paginateEvents = 'update events',
}

export class GetProfile implements Action {
    readonly type = ActionTypes.getProfile;
    constructor(public load: any) {}
}

export class UpdateProfile implements Action {
    readonly type = ActionTypes.updateProfile;
    constructor(public load: any) {}
}
export class PaginateEvents implements Action {
    readonly type = ActionTypes.paginateEvents;
    constructor(public load: any) {}
}

export class ClearEvents implements Action {
    readonly type = ActionTypes.clearEvents;
    constructor(public load: any) {}
}

export class GetCountryAndCode implements Action {
    readonly type = ActionTypes.getCountryAndCode;
    constructor(public load: any) {}
}

export class GetEvents implements Action {
    readonly type = ActionTypes.getEvents;
    constructor(public load: any) {}
}

export class UpdateEvents implements Action {
    readonly type = ActionTypes.updateEvents;
    constructor(public load: any) {}
}
export type Actions = GetProfile | UpdateProfile |
    GetCountryAndCode | GetEvents |
    UpdateEvents | PaginateEvents | ClearEvents;
// export class Reset implements Action {
//     readonly type = ActionTypes.Reset;
// }
