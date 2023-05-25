import parse, { validateArgs, MESSAGES } from "../../src/utils/args.js";

const argumentos = [
  "/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/node",
  "/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/jsassertivo",
  "--username=admin",
  "--password=admin",
  "--operation=operacao",
  '--data={"uid": "abc-123"}',
];

const dados = {
  username: "admin",
  password: "admin",
  operation: "operacao",
  data: {
    uid: "abc-123",
  },
};
const campos = ["username", "password", "operation", "data"];
const camposValidos = ["username", "password", "operation", "data"];
it("Faz o parse dos argumentos da CLI", () => {
  const retornado = parse(argumentos);
  expect(retornado).toEqual(dados);
});

describe("Validação de argumentos da CLI", () => {
  it("Valida com sucesso os campos informados", () => {
    const retornado = validateArgs(dados, camposValidos);
    expect(validateArgs(dados, camposValidos)).toEqual({
      valid: true,
      message: "",
    });
    expect(validateArgs(dados, camposValidos).valid).toEqual(true);
  });

  it("Valida os cenários de erro e retorna uma mensagem", () => {
    expect(validateArgs()).toEqual({
      valid: false,
      message: MESSAGES.missingArgs(),
    });
  });

  it("Valida os cenários de erro e retorna uma mensagem", () => {
    expect(validateArgs(dados, ["token"])).toEqual({
      valid: false,
      message: MESSAGES.missingArg("token"),
    });
  });
});
