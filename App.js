/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Icon style={styles.vert} name="coffee" size={45} color="brown"></Icon>
      <Text></Text>
      <Text style={styles.derry}>GIRIS YAP</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kullanici Adi:</Text>
        <Text></Text>
        <Icon style={styles.vert} name="user" size={15} color="brown"></Icon>
        <TextInput style={styles.textInput} placeholder="E-posta girin" >

        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sifre:</Text>
        <Icon name="key" size={15} color="brown" />
        <TextInput style={styles.textInput} placeholder="Şifrenizi girin" >

        </TextInput>
      </View>
      <View>
        <Pressable>
          <TextInput style={styles.button} onPress={() => Alert.alert('Giriş Yapılıyor')}>Giriş Yap</TextInput>
        </Pressable>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dcb899'
  },
  wert: {
    backgroundColor: 'brown',
    paddingBottom: 150,
  },
  asdf: {
    color: 'brown',
    fontSize: '10px',
    borderRadius: '50px',
    backgroundColor: 'brown',
  },
  vert: {
    position: 'relative',
    paddingRight: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '475',
  },
  button:{
  backgroundColor:'brown',
  color: '#dcb899',
  fontSize: 18,
  
  },
  derry: {
    fontFamily: "EduSABeginner-VariableFont_wght",
    color: 'brown',
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '50px',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    textDecorationLine: 'underline',
    marginRight: 10,
    flex: 0.5,
    color: 'brown',
    fontSize: 20,
    fontFamily: "EduSABeginner-VariableFont_wght",
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 5,
    padding: 10,
    width: 250,
    borderRadius: 10,
    color: 'brown',
  },
});
export default App;
