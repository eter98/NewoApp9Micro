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

export interface IEntradaInvitados {
  id?: number;
  registroFecha?: Moment;
  tipoEntrada?: TipoEntradad;
  tipoIngreso?: TipoIngresod;
  tiempoMaximo?: boolean;
  registroCompras?: IRegistroCompra[];
  espacioNombre?: string;
  espacioId?: number;
  espacioReservaNombre?: string;
  espacioReservaId?: number;
  invitadoIdentificacion?: string;
  invitadoId?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class EntradaInvitados implements IEntradaInvitados {
  constructor(
    public id?: number,
    public registroFecha?: Moment,
    public tipoEntrada?: TipoEntradad,
    public tipoIngreso?: TipoIngresod,
    public tiempoMaximo?: boolean,
    public registroCompras?: IRegistroCompra[],
    public espacioNombre?: string,
    public espacioId?: number,
    public espacioReservaNombre?: string,
    public espacioReservaId?: number,
    public invitadoIdentificacion?: string,
    public invitadoId?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {
    this.tiempoMaximo = this.tiempoMaximo || false;
  }
}
