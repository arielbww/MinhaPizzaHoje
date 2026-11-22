import { StyleSheet } from 'react-native';

// Estilos centralizados do app
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC', // fundo bege claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#DC143C', // vermelho
    marginBottom: 30,
    textAlign: 'center'
  },
  imagemContainer: {
    width: 280,
    height: 280,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8
  },
  imagem: {
    width: '100%',
    height: '100%'
  },
  imagemPlaceholder: {
    fontSize: 120,
    textAlign: 'center',
    lineHeight: 280
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  nomePizza: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DC143C', // vermelho
    marginBottom: 10
  },
  frasePizza: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    backgroundColor: '#FFD700', // amarelo
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  textoBotao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#DC143C', // vermelho
    textAlign: 'center'
  }
});
