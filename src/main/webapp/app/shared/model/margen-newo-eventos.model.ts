export interface IMargenNewoEventos {
  id?: number;
  porcentajeMargen?: number;
  eventoNombreEvento?: string;
  eventoId?: number;
}

export class MargenNewoEventos implements IMargenNewoEventos {
  constructor(public id?: number, public porcentajeMargen?: number, public eventoNombreEvento?: string, public eventoId?: number) {}
}
