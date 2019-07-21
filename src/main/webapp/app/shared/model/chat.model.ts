import { Moment } from 'moment';

export interface IChat {
  id?: number;
  mensaje?: string;
  fecha?: Moment;
  leido?: boolean;
  deLogin?: string;
  deId?: number;
  paraLogin?: string;
  paraId?: number;
}

export class Chat implements IChat {
  constructor(
    public id?: number,
    public mensaje?: string,
    public fecha?: Moment,
    public leido?: boolean,
    public deLogin?: string,
    public deId?: number,
    public paraLogin?: string,
    public paraId?: number
  ) {
    this.leido = this.leido || false;
  }
}
