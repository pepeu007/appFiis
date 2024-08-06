import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import investmentImageOne from './assets/investimentoum.png';  // Imagem 1
import investmentImageTwo from './assets/investimentodois.png'; // Imagem 2

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.pipi}>
        Os 7 melhores Fundos de Investimentos Imobiliários
      </Text>
      <Text style={styles.valora}>Valora RE ||| </Text>
      <Image
        style={styles.image}
        source={investmentImageOne} // Usa a primeira imagem
      />

      <Text style={styles.valora}>Maxi Renda </Text>
      <Image
        style={styles.image}
        source={investmentImageTwo} // Usa a segunda imagem
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 6, 66)',
    alignItems: 'center',
    paddingTop: 50,
  },
  pipi: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20, 
  },
  valora: {
    fontSize: 18,
    color: 'rgb(240, 240, 110)',
    textAlign: 'center',
    marginBottom: 5, 
  },
  image: {
    width: 380,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 30,
    marginBottom: 20, // Adiciona algum espaço entre as imagens
  },
});