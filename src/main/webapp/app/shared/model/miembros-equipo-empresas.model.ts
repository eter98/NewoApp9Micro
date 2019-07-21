export interface IMiembrosEquipoEmpresas {
  id?: number;
  empresaRazonSocial?: string;
  empresaId?: number;
  equipoNombre?: string;
  equipoId?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class MiembrosEquipoEmpresas implements IMiembrosEquipoEmpresas {
  constructor(
    public id?: number,
    public empresaRazonSocial?: string,
    public empresaId?: number,
    public equipoNombre?: string,
    public equipoId?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {}
}
