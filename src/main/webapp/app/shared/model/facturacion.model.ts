import { IRegistroCompra } from 'app/shared/model/registro-compra.model';

export const enum TipoPersonad {
  NATURAL = 'NATURAL',
  JURIDICA = 'JURIDICA'
}

export const enum PeriodicidadFacturaciond {
  SEMANAL = 'SEMANAL',
  QUINCENAL = 'QUINCENAL',
  MENSUAL = 'MENSUAL',
  BIMESTRAL = 'BIMESTRAL',
  TRIMESTRAL = 'TRIMESTRAL'
}

export interface IFacturacion {
  id?: number;
  titularFactura?: string;
  tipoPersona?: TipoPersonad;
  periodicidadFacturacion?: PeriodicidadFacturaciond;
  maximoMonto?: number;
  registroCompras?: IRegistroCompra[];
  empresaRazonSocial?: string;
  empresaId?: number;
  cuentaAsociadaId?: number;
}

export class Facturacion implements IFacturacion {
  constructor(
    public id?: number,
    public titularFactura?: string,
    public tipoPersona?: TipoPersonad,
    public periodicidadFacturacion?: PeriodicidadFacturaciond,
    public maximoMonto?: number,
    public registroCompras?: IRegistroCompra[],
    public empresaRazonSocial?: string,
    public empresaId?: number,
    public cuentaAsociadaId?: number
  ) {}
}
