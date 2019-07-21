import { Moment } from 'moment';

export interface IChatGrupo {
  id?: number;
  mensaje?: string;
  fecha?: Moment;
  leido?: boolean;
  deLogin?: string;
  deId?: number;
  paraLogin?: string;
  paraId?: number;
  grupoNombreGrupo?: string;
  grupoId?: number;
}

export class ChatGrupo implements IChatGrupo {
  constructor(
    public id?: number,
    public mensaje?: string,
    public fecha?: Moment,
    public leido?: boolean,
    public deLogin?: string,
    public deId?: number,
    public paraLogin?: string,
    public paraId?: number,
    public grupoNombreGrupo?: string,
    public grupoId?: number
  ) {
    this.leido = this.leido || false;
  }
}
