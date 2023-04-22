import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Logo from '../../resources/images/logo.png'

const SignupScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (val) => {
    setEmail(val)
    props.setEmail(val)
  }

  const handlePassword = (val) => {
    setPassword(val)
    props.setPassword(val)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.title}>Melirate</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => handleEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => handlePassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={props.handleClick}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.switchType}>
        <Text style={styles.link}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
  },
});

export default SignupScreen;