import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');

    const passwordsMatch = password === passwordConfirm && password.length > 0;
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

        <Image source={require('../assets/password.png')} style={{marginTop: '12.60%', marginLeft: '7.49%'}}/>
        <TextInput
            style={styles.input}
            placeholder="enter your password"
            placeholderTextColor="#E3E3E3"
            value={password}
            onChangeText={setPassword}
        />

        <Image source={require('../assets/repeat password.png')} style={{marginTop: '12.60%', marginLeft: '7.49%'}}/>
        <TextInput
            style={styles.input}
            placeholder="repeat your password"
            placeholderTextColor="#E3E3E3"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
        />
        
        <Text style={[styles.message, { marginLeft: '7.49%', color: passwordsMatch ? 'white' : 'red' }]}>
        {password.length > 0 ? (
          passwordsMatch ? '' : 'Passwords doesn\'t maches ❌'
        ) : ''}
        </Text>

        <TouchableOpacity style={{width: '53.33%', alignSelf: 'center', }} onPress={() => console.log('Register pressed : ', username, password, passwordConfirm)}>
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
    width: '72.46%',
    paddingBottom: 0
  },
});

export default Register;
