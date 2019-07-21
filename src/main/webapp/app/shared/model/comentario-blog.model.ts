import { Moment } from 'moment';

export interface IComentarioBlog {
  id?: number;
  comentario?: any;
  fecha?: Moment;
  meGusta?: boolean;
  seguir?: boolean;
  blogTitulo?: string;
  blogId?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class ComentarioBlog implements IComentarioBlog {
  constructor(
    public id?: number,
    public comentario?: any,
    public fecha?: Moment,
    public meGusta?: boolean,
    public seguir?: boolean,
    public blogTitulo?: string,
    public blogId?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {
    this.meGusta = this.meGusta || false;
    this.seguir = this.seguir || false;
  }
}
