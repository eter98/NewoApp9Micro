export const enum Beneficiosd {
  Market = 'Market',
  Entrada_Miembro = 'Entrada_Miembro',
  Espacios_Reserva = 'Espacios_Reserva',
  Invitados = 'Invitados',
  Landings = 'Landings'
}

export interface IBeneficio {
  id?: number;
  tipoBeneficio?: Beneficiosd;
  descuento?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class Beneficio implements IBeneficio {
  constructor(
    public id?: number,
    public tipoBeneficio?: Beneficiosd,
    public descuento?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {}
}
