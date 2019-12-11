import { Race } from './../../models/race';

namespace RacesActionsPayloads {
  export interface Login { email: string; password: string; }
  export type Update = Partial<Race>;
  export type Create = Partial<Race>;
}

export namespace RacesActions {
  export class GetAllOnce { public static readonly type = '[Races] GetAllOnce'; }
  export class GetOnce { public static readonly type = '[Races] GetOnce'; constructor(public payload: string) { } }
  export class GetAll { public static readonly type = '[Races] GetAll'; }
  export class GetBikes$ { public static readonly type = '[Races] GetBikes$'; }
  export class Update { public static readonly type = '[Races] Update'; constructor(public payload: RacesActionsPayloads.Update) { } }
  export class Create { public static readonly type = '[Races] Create'; constructor(public payload: RacesActionsPayloads.Create) { } }
  export class Delete { public static readonly type = '[Races] Delete'; constructor(public payload: string) { } }
}
