export interface ICiudad {
  id?: number;
  nombreCiudad?: string;
  paisNombrePais?: string;
  paisId?: number;
}

export class Ciudad implements ICiudad {
  constructor(public id?: number, public nombreCiudad?: string, public paisNombrePais?: string, public paisId?: number) {}
}
