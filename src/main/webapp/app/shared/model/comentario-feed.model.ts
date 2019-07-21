import { Moment } from 'moment';

export interface IComentarioFeed {
  id?: number;
  comentario?: any;
  fecha?: Moment;
  meGusta?: boolean;
  seguir?: boolean;
  feedTitulo?: string;
  feedId?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class ComentarioFeed implements IComentarioFeed {
  constructor(
    public id?: number,
    public comentario?: any,
    public fecha?: Moment,
    public meGusta?: boolean,
    public seguir?: boolean,
    public feedTitulo?: string,
    public feedId?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {
    this.meGusta = this.meGusta || false;
    this.seguir = this.seguir || false;
  }
}
