# Qual Pizza Hoje?

App simples em React Native que sorteia um sabor de pizza aleatoriamente.

## Descrição

Aplicativo desenvolvido para disciplina de desenvolvimento mobile. Quando o usuário aperta o botão "Me surpreenda!", o app escolhe aleatoriamente um dos 7 sabores disponíveis e mostra a imagem da pizza sorteada.

## Sabores disponíveis

- Calabresa
- Margherita
- Frango com Catupiry
- Portuguesa
- Quatro Queijos
- Mussarela
- Chocolate

## Como rodar

1. Instalar dependências:
```bash
npm install
```

2. Iniciar o app:
```bash
npm start
```

3. Baixar o app Expo Go no celular (Play Store ou App Store)

4. Escanear o QR code que aparece no terminal

5. App abre automaticamente no Expo Go

## Estrutura do projeto

```
MinhaPizzaHoje/
├── App.js                    # Componente principal
├── app.json                  # Configuração do Expo
├── babel.config.js           # Configuração do Babel (transpilador)
├── package.json              # Dependências e scripts
├── assets/                   # Imagens das pizzas (JPG)
│   ├── calabresa.jpg
│   ├── margherita.jpg
│   ├── frango.jpg
│   ├── portuguesa.jpg
│   ├── quatroqueijos.jpg
│   ├── mussarela.jpg
│   └── chocolate.jpg
└── src/
    ├── data/
    │   └── pizzas.js         # Array com os 7 sabores
    ├── styles/
    │   └── styles.js         # Estilos centralizados
    └── utils/
        └── sortear.js        # Função de sorteio aleatório
```

## Conceitos do React Native usados

### Class Component
- `class App extends Component` - Componente baseado em classe
- Usa método `render()` para definir o que aparece na tela

### Constructor e State
- `constructor(props)` - Método que inicializa o componente
- `super(props)` - Chama o construtor da classe pai (Component) - obrigatório
- `this.state` - Objeto que guarda dados que podem mudar durante execução
- `this.setState()` - Único jeito correto de atualizar o state (gatilha re-renderização)

### Funções e Eventos
- `onPress` - Evento disparado quando usuário toca no componente
- Arrow function (`sortearPizza = () => {}`) - Mantém `this` apontando pro componente

### Math.random e Math.floor
- `Math.random()` - Gera número decimal aleatório entre 0 e 0.999...
- `Math.floor()` - Arredonda número pra baixo (ex: 3.9 vira 3)
- **Juntos:** sorteiam índice aleatório do array
  - Exemplo: `Math.floor(Math.random() * 7)` gera número de 0 a 6

### Componentes visuais
- `View` - Container genérico (equivalente a `<div>` no HTML)
- `Text` - Exibe texto na tela
- `Image` - Exibe imagem (usa `require()` pra imagens locais)
- `TouchableOpacity` - Botão tocável com feedback visual (opacidade ao tocar)
- `StyleSheet` - Cria estilos otimizados (valida e otimiza os estilos)

### Modularização
- Separação de responsabilidades: dados, estilos e lógica em arquivos diferentes
- `export`/`import` para compartilhar código entre arquivos
- Facilita manutenção e reutilização

## Tecnologias

- **React Native** - Framework para criar apps nativos com JavaScript
- **Expo** - Plataforma que simplifica desenvolvimento React Native (sem precisar Android Studio/Xcode)
- **Babel** - Transpilador que converte JS moderno para versão compatível com todos dispositivos
- **JavaScript (ES6+)** - Linguagem de programação com recursos modernos (classes, arrow functions, import/export)
