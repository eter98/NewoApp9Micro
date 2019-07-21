export interface IHostSede {
  id?: number;
  sedeNombreSede?: string;
  sedeId?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class HostSede implements IHostSede {
  constructor(
    public id?: number,
    public sedeNombreSede?: string,
    public sedeId?: number,
    public miembroLogin?: string,
    public miembroId?: number
  ) {}
}
