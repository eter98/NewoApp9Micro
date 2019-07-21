export interface ITipoPrepagoConsumo {
  id?: number;
  nombre?: string;
  descripcion?: string;
  valorMinimo?: number;
  valorMaximo?: number;
  tipoBeneficioTipoBeneficio?: string;
  tipoBeneficioId?: number;
}

export class TipoPrepagoConsumo implements ITipoPrepagoConsumo {
  constructor(
    public id?: number,
    public nombre?: string,
    public descripcion?: string,
    public valorMinimo?: number,
    public valorMaximo?: number,
    public tipoBeneficioTipoBeneficio?: string,
    public tipoBeneficioId?: number
  ) {}
}
