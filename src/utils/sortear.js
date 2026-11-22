// Função utilitária para sortear um item aleatório do array
// Recebe um array e retorna um elemento aleatório

export function sortearAleatorio(array) {
  // Math.random() gera número entre 0 e 0.999...
  // Multiplica pelo tamanho do array
  // Math.floor() arredonda pra baixo = índice válido
  const indiceAleatorio = Math.floor(Math.random() * array.length);

  // Retorna o item do array no índice sorteado
  return array[indiceAleatorio];
}
