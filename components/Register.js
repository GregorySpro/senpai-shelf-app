import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';



const Register = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const isUsernameValid = username.length >= 5;
    const [password, setPassword] = React.useState('');
    const hasMinimumLength = password.length >= 8;
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
    const hasRequiredComplexity = hasDigit && hasSpecialChar;
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);


    const passwordsMatch = password === passwordConfirm && password.length > 0;

    const HandleRegister = () => {
      console.log('Register function called');
      if (!isUsernameValid) {
        alert("Le nom d'utilisateur doit contenir au moins 5 caractères.");
        return;
      }
      fetch('https://senpai-shelf-api.onrender.com/users')
      .then(response => response.json())
      .then(data => {
        const emailExists = data.some(user => user.username === username);

        if (emailExists) {
          console.log("Ce nom d'utilisateur est déjà utilisé !");
          alert("Ce nom d'utilisateur est déjà utilisé ! Merci de choisir un autre.");
          // Tu peux aussi afficher une alerte ou bloquer l'inscription ici
        } else {
          fetch('https://senpai-shelf-api.onrender.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            username: username,
            password: password
            })
          })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              console.log('Erreur:', data.error);
            } else {
              console.log('Inscription réussie !', data.user);
              navigation.navigate('Login');

            }
          })
          .catch(error => {
            console.error('Erreur réseau :', error);
          });
        }
      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
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
        <Text style={[styles.message, { marginLeft: '7.49%', color: isUsernameValid ? 'white' : 'red' }]}>
          {username.length > 0 && !isUsernameValid ? "Username must be at least 5 characters ❌" : ''}
        </Text>

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

      <Image source={require('../assets/repeat password.png')} style={{marginTop: '12.60%', marginLeft: '7.49%'}}/>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="repeat your password"
          placeholderTextColor="#E3E3E3"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={!passwordConfirmVisible}
        />
        <TouchableOpacity onPress={() => setPasswordConfirmVisible(!passwordConfirmVisible)}>
          <Image
            source={
              passwordConfirmVisible
              ? require('../assets/eye.png')
              : require('../assets/eye-off.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
        
        <Text
  style={[
    styles.message,
    {
      marginLeft: '7.49%',
      color:
        hasMinimumLength && hasRequiredComplexity && passwordsMatch
          ? 'white'
          : 'red',
    },
  ]}
>
  {!hasMinimumLength
    ? 'Password must be at least 8 characters ❌'
    : !hasRequiredComplexity
    ? 'Must contain at least one digit and one special character ❌'
    : !passwordsMatch
    ? 'Passwords must match ❌'
    : ''}
</Text>

        <TouchableOpacity style={{width: '53.33%', alignSelf: 'center', }} onPress={() => HandleRegister()}>
            <Image source={require('../assets/register_button.png')} style={{alignSelf: 'center', marginTop: '15.06%'}}/>
        </TouchableOpacity>

        <Text style={{color: '#adadadff', fontSize: 16, marginTop: '5.06%', alignSelf: 'center'}}>
            Already have an account ? <Text style={{color: '#30299D'}}>Sign in</Text>
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

export default Register;
