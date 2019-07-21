import { Moment } from 'moment';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';

export const enum TipoEntradad {
  INGRESO = 'INGRESO',
  SALIDA = 'SALIDA'
}

export const enum TipoIngresod {
  Espacio_Libre = 'Espacio_Libre',
  Reserva = 'Reserva',
  Oficina = 'Oficina'
}

export interface IEntradaMiembros {
  id?: number;
  registroFecha?: Moment;
  tipoEntrada?: TipoEntradad;
  tipoIngreso?: TipoIngresod;
  tiempoMaximo?: boolean;
  registroCompras?: IRegistroCompra[];
  miembroLogin?: string;
  miembroId?: number;
  espacioNombre?: string;
  espacioId?: number;
  espacioReservaNombre?: string;
  espacioReservaId?: number;
}

export class EntradaMiembros implements IEntradaMiembros {
  constructor(
    public id?: number,
    public registroFecha?: Moment,
    public tipoEntrada?: TipoEntradad,
    public tipoIngreso?: TipoIngresod,
    public tiempoMaximo?: boolean,
    public registroCompras?: IRegistroCompra[],
    public miembroLogin?: string,
    public miembroId?: number,
    public espacioNombre?: string,
    public espacioId?: number,
    public espacioReservaNombre?: string,
    public espacioReservaId?: number
  ) {
    this.tiempoMaximo = this.tiempoMaximo || false;
  }
}
