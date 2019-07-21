export interface IRegistroCompra {
  id?: number;
  consumoMarket?: boolean;
  miembroLogin?: string;
  miembroId?: number;
  facturacionId?: number;
  reservasId?: number;
  entradaInvitadosId?: number;
  entradaMiembrosId?: number;
}

export class RegistroCompra implements IRegistroCompra {
  constructor(
    public id?: number,
    public consumoMarket?: boolean,
    public miembroLogin?: string,
    public miembroId?: number,
    public facturacionId?: number,
    public reservasId?: number,
    public entradaInvitadosId?: number,
    public entradaMiembrosId?: number
  ) {
    this.consumoMarket = this.consumoMarket || false;
  }
}
