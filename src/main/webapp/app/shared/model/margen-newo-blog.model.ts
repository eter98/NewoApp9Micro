export interface IMargenNewoBlog {
  id?: number;
  porcentajeMargen?: number;
  blogDescripcion?: string;
  blogId?: number;
}

export class MargenNewoBlog implements IMargenNewoBlog {
  constructor(public id?: number, public porcentajeMargen?: number, public blogDescripcion?: string, public blogId?: number) {}
}
