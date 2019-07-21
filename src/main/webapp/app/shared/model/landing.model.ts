export const enum Impuestod {
  IVA19 = 'IVA19',
  IVA6 = 'IVA6',
  IVA0 = 'IVA0',
  ICO = 'ICO',
  IPOCONSUMO8 = 'IPOCONSUMO8'
}

export interface ILanding {
  id?: number;
  nombre?: string;
  descripcion?: string;
  telefonoNegocio?: string;
  numeroPuestos?: number;
  tarifa?: number;
  fotografiaContentType?: string;
  fotografia?: any;
  impuesto?: Impuestod;
  sedeNombreSede?: string;
  sedeId?: number;
}

export class Landing implements ILanding {
  constructor(
    public id?: number,
    public nombre?: string,
    public descripcion?: string,
    public telefonoNegocio?: string,
    public numeroPuestos?: number,
    public tarifa?: number,
    public fotografiaContentType?: string,
    public fotografia?: any,
    public impuesto?: Impuestod,
    public sedeNombreSede?: string,
    public sedeId?: number
  ) {}
}
