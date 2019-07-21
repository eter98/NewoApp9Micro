export interface IMargenNewoGrupos {
  id?: number;
  porcentajeMargen?: number;
  grupoNombreGrupo?: string;
  grupoId?: number;
}

export class MargenNewoGrupos implements IMargenNewoGrupos {
  constructor(public id?: number, public porcentajeMargen?: number, public grupoNombreGrupo?: string, public grupoId?: number) {}
}
