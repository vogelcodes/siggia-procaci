
export type CondominioProps = {
  nome: string;
  email: string;
  endereco: string;
  cnpj?: string;
  telefone?: string;
  clienteDesde: Date;
};
export class Condominio {
  constructor(public readonly props: CondominioProps) {}

  get nome() {
    return this.props.nome
  }
  get email() {
    return this.props.email
  }
  get endereco() {
    return this.props.endereco
  }
  get cnpj() {
    return this.props.cnpj
  }
  get telefone() {
    return this.props.telefone
  }
  get clienteDesde() {
    return this.props.clienteDesde
  }
}
