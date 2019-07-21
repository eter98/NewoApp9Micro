export interface IMargenNewoProductos {
  id?: number;
  porcentajeMargen?: number;
  productoNombreProducto?: string;
  productoId?: number;
}

export class MargenNewoProductos implements IMargenNewoProductos {
  constructor(public id?: number, public porcentajeMargen?: number, public productoNombreProducto?: string, public productoId?: number) {}
}
