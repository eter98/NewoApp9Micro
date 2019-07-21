import { Moment } from 'moment';

export interface IPrepagoConsumo {
  id?: number;
  aporte?: number;
  saldoActual?: number;
  fechaRegistro?: Moment;
  fechaSaldoActual?: Moment;
  miembroLogin?: string;
  miembroId?: number;
  tipoPrepagoNombre?: string;
  tipoPrepagoId?: number;
}

export class PrepagoConsumo implements IPrepagoConsumo {
  constructor(
    public id?: number,
    public aporte?: number,
    public saldoActual?: number,
    public fechaRegistro?: Moment,
    public fechaSaldoActual?: Moment,
    public miembroLogin?: string,
    public miembroId?: number,
    public tipoPrepagoNombre?: string,
    public tipoPrepagoId?: number
  ) {}
}
