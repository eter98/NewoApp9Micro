export interface IMiembrosGrupo {
  id?: number;
  miembroLogin?: string;
  miembroId?: number;
}

export class MiembrosGrupo implements IMiembrosGrupo {
  constructor(public id?: number, public miembroLogin?: string, public miembroId?: number) {}
}
