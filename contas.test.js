const contas = require("./contas.js");

test("Soma 2+5 esperando 7 como resultado", () => {
  expect(contas.soma(2, 5)).toBe(7);
});

test("Subtração 5-2 esperando 3 como resultado", () => {
  expect(contas.subtracao(5, 2)).toBe(3);
});

test("Divisão 10 / 2 esperando 5 como resultado", () => {
  expect(contas.divisao(10, 2)).toBe(5);
});

test("Multiplicação 10 * 6 esperando 60 como resultado", () => {
  expect(contas.multiplicacao(10, 6)).toBe(60);
});
