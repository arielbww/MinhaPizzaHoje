// Importa componentes do React Native
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Importa dados e estilos de arquivos separados
import { PIZZAS } from './src/data/pizzas';
import { styles } from './src/styles/styles';
import { sortearAleatorio } from './src/utils/sortear';

// Classe principal do app
class App extends Component {
  // Constructor inicializa o estado inicial
  constructor(props) {
    super(props);

    // Estado inicial: mostra imagem da caixa, sem pizza sorteada ainda
    this.state = {
      pizzaSorteada: null, // null = nenhuma pizza sorteada ainda
      mostrarInicial: true // true = mostra imagem da caixa
    };
  }

  // Função que sorteia uma pizza aleatória
  sortearPizza = () => {
    const pizzaEscolhida = sortearAleatorio(PIZZAS);

    // this.setState() atualiza o estado e re-renderiza a tela
    this.setState({
      pizzaSorteada: pizzaEscolhida,
      mostrarInicial: false // esconde imagem inicial, mostra pizza
    });
  }

  // Método render() define o que aparece na tela
  render() {
    // Desestrutura o estado pra facilitar o uso
    const { pizzaSorteada, mostrarInicial } = this.state;

    return (
      <View style={styles.container}>
        {/* Título do app */}
        <Text style={styles.titulo}>Qual Pizza Hoje?</Text>

        {/* Imagem: mostra caixa inicial OU pizza sorteada */}
        <View style={styles.imagemContainer}>
          {mostrarInicial ? (
            // Antes de sortear: mostra imagem da caixa/dúvida
            <Image
              source={require('./assets/duvida.jpg')}
              style={styles.imagem}
              resizeMode="contain"
            />
          ) : pizzaSorteada.imagem ? (
            // Depois de sortear: mostra imagem da pizza
            <Image
              source={pizzaSorteada.imagem}
              style={styles.imagem}
              resizeMode="contain"
            />
          ) : (
            // Fallback: emoji se imagem ainda não foi convertida
            <Text style={styles.imagemPlaceholder}>{pizzaSorteada.emoji}</Text>
          )}
        </View>

        {/* Informações da pizza sorteada (só aparece depois do sorteio) */}
        {!mostrarInicial && pizzaSorteada && (
          <View style={styles.infoContainer}>
            <Text style={styles.nomePizza}>{pizzaSorteada.nome}</Text>
            <Text style={styles.frasePizza}>{pizzaSorteada.frase}</Text>
          </View>
        )}

        {/* Botão que chama a função sortearPizza quando clicado */}
        <TouchableOpacity
          style={styles.botao}
          onPress={this.sortearPizza}
        >
          <Text style={styles.textoBotao}>Me surpreenda!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
