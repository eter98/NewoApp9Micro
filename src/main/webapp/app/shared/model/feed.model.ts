import { Moment } from 'moment';

export const enum Categoriad {
  GENERAL = 'GENERAL',
  DE_GRUPO = 'DE_GRUPO',
  CORPORATIVO = 'CORPORATIVO',
  INSTITUCIONAL = 'INSTITUCIONAL',
  INTERNO = 'INTERNO'
}

export interface IFeed {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen1ContentType?: string;
  imagen1?: any;
  imagen2ContentType?: string;
  imagen2?: any;
  tipoContenido?: Categoriad;
  contenido?: any;
  fecha?: Moment;
  miembroLogin?: string;
  miembroId?: number;
  categoriaFeedCategoria?: string;
  categoriaFeedId?: number;
}

export class Feed implements IFeed {
  constructor(
    public id?: number,
    public titulo?: string,
    public descripcion?: string,
    public imagen1ContentType?: string,
    public imagen1?: any,
    public imagen2ContentType?: string,
    public imagen2?: any,
    public tipoContenido?: Categoriad,
    public contenido?: any,
    public fecha?: Moment,
    public miembroLogin?: string,
    public miembroId?: number,
    public categoriaFeedCategoria?: string,
    public categoriaFeedId?: number
  ) {}
}
