import { Condominio } from "./condominio";

describe("Condominio Tests", () => {
  test("Construtor de Condomínio", () => {
    //Arrange
    const props = {
      nome: "Arcadia",
      email: "arcadia@email.com",
      endereco: "Rua X",
      clienteDesde: new Date("2022-03-01"),
    };
    //Act
    const condominio = new Condominio(props);
    //Assert
    expect(condominio.props).toStrictEqual(props)
    // expect(condominio.nome).toBe("Arcadia");
    // expect(condominio.email).toBe("arcadia@email.com");
    // expect(condominio.endereco).toBe("Rua X");
    // expect(condominio.clienteDesde).toBe(props.clienteDesde);
    // expect(condominio.cnpj).toBe(undefined);
    // expect(condominio.telefone).toBe(undefined);
  });
});
