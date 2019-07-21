export const enum TipoDocumentod {
  Cedula = 'Cedula',
  Cedula_Extranjeria = 'Cedula_Extranjeria',
  Pasaporte = 'Pasaporte',
  Otro = 'Otro'
}

export interface IInvitados {
  id?: number;
  nombre?: string;
  apellido?: string;
  tipoDocumento?: TipoDocumentod;
  identificacion?: string;
  correo?: string;
  telefono?: string;
  miembroLogin?: string;
  miembroId?: number;
}

export class Invitados implements IInvitados {
  constructor(
    public id?: number,
    public nombre?: string,
    public apellido?: string,
    public tipoDocumento?: TipoDocumentod,
    public identificacion?: string,
    public correo?: string,
    public telefono?: string,
    public miembroLogin?: string,
    public miembroId?: number
  ) {}
}
