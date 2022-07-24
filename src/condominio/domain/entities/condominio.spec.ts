import Condominio from "./condominio";

describe("Condominio Tests", ()=>{
    test('constructor of condominio', ()=>{
        const condominio = new Condominio("Arcadia");
        expect(condominio.name).toBe('Arcadia')
    })
});