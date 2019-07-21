import { Moment } from 'moment';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';

export const enum EstadoReservad {
  Disponible = 'Disponible',
  Reservado = 'Reservado',
  Ocupado = 'Ocupado',
  Extendido = 'Extendido',
  Cerrado = 'Cerrado'
}

export interface IReservas {
  id?: number;
  registroFechaEntrada?: Moment;
  registroFechaSalida?: Moment;
  estadoReserva?: EstadoReservad;
  registroCompras?: IRegistroCompra[];
  miembroLogin?: string;
  miembroId?: number;
  espacioNombre?: string;
  espacioId?: number;
}

export class Reservas implements IReservas {
  constructor(
    public id?: number,
    public registroFechaEntrada?: Moment,
    public registroFechaSalida?: Moment,
    public estadoReserva?: EstadoReservad,
    public registroCompras?: IRegistroCompra[],
    public miembroLogin?: string,
    public miembroId?: number,
    public espacioNombre?: string,
    public espacioId?: number
  ) {}
}
