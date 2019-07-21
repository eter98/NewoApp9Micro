export interface IEquipoEmpresas {
  id?: number;
  nombre?: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  descripcion?: any;
  logosContentType?: string;
  logos?: any;
  paginaWeb?: string;
  miembroLogin?: string;
  miembroId?: number;
  empresaRazonSocial?: string;
  empresaId?: number;
}

export class EquipoEmpresas implements IEquipoEmpresas {
  constructor(
    public id?: number,
    public nombre?: string,
    public telefono?: string,
    public correo?: string,
    public direccion?: string,
    public descripcion?: any,
    public logosContentType?: string,
    public logos?: any,
    public paginaWeb?: string,
    public miembroLogin?: string,
    public miembroId?: number,
    public empresaRazonSocial?: string,
    public empresaId?: number
  ) {}
}
