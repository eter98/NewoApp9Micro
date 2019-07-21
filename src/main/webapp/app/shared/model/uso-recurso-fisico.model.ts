import { Moment } from 'moment';

export const enum TipoIniciod {
  Inicio = 'Inicio',
  Fin = 'Fin'
}

export interface IUsoRecursoFisico {
  id?: number;
  registroFechaInicio?: Moment;
  registroFechaFinal?: Moment;
  tipoRegistro?: TipoIniciod;
  recursoRecurso?: string;
  recursoId?: number;
  miembroIdentificacion?: string;
  miembroId?: number;
}

export class UsoRecursoFisico implements IUsoRecursoFisico {
  constructor(
    public id?: number,
    public registroFechaInicio?: Moment,
    public registroFechaFinal?: Moment,
    public tipoRegistro?: TipoIniciod,
    public recursoRecurso?: string,
    public recursoId?: number,
    public miembroIdentificacion?: string,
    public miembroId?: number
  ) {}
}
