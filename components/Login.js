import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';



const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);


    const HandleLogin = () => {
      console.log('Login function called');
      fetch('https://senpai-shelf-api.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username, // ou valeur du champ, ex : "toto"
            password: password  // ex : "1234"
        })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.log('Erreur de connexion :', data.error);
                // Affiche un message à l'utilisateur
            } else {
                console.log('Connexion réussie !', data);
                // Stocker le token ou rediriger l'utilisateur
            }
        })
        .catch(error => {
        console.error('Erreur réseau :', error);
        });
    };
  
  return (

    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={{width: 131, height: 131, alignSelf: 'center'}} />
        <Image source={require('../assets/Senpai Shelf.png')} style={{alignSelf: 'center'}}/>
        <Image source={require('../assets/username.png')} style={{marginTop: '14.50%', marginLeft: '7.49%'}}/>
        <TextInput
            style={styles.input}
            placeholder="example : BaKaMiT"
            placeholderTextColor="#E3E3E3"
            value={username}
            onChangeText={setUsername}
        />

        <Image source={require('../assets/password.png')} style={{marginTop: '10.60%', marginLeft: '7.49%'}} />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="enter your password"
          placeholderTextColor="#E3E3E3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={
              passwordVisible
              ? require('../assets/eye.png')
              : require('../assets/eye-off.png')
          }
          style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

        <TouchableOpacity style={{width: '53.33%', alignSelf: 'center', }} onPress={() => HandleLogin()}>
            <Image source={require('../assets/register_button.png')} style={{alignSelf: 'center', marginTop: '15.06%'}}/>
        </TouchableOpacity>

        <Text style={{color: '#adadadff', fontSize: 16, marginTop: '5.06%', alignSelf: 'center'}}>
            Don't have an account ? <Text style={{color: '#30299D'}}>Sign up</Text>
        </Text>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#888', // ou ce que tu veux
    fontSize: 32,
    fontFamily: 'Jersay10', // Assure-toi que la police est bien chargée
    paddingBottom: 4, // Ajuste l’espacement sous le texte
    color: '#000', // Couleur du texte saisi (facultatif)
    marginLeft: '7.49%',
    width: '85%',
    paddingBottom: 0
  },
  passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: '7.49%',
  width: '85%', // ajuste selon ton design
  borderBottomWidth: 1,
  borderBottomColor: '#888',
  paddingBottom: 4,
},

inputPassword: {
  flex: 1,
  fontSize: 32,
  fontFamily: 'Jersay10',
  color: '#000',
},

eyeIcon: {
  width: 24,
  height: 24,
  marginLeft: 10,
},

});

export default Login;
