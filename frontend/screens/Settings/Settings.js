import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/Context'
import LogoutButton from '../../components/Auth/LogoutButton';

const Settings = () => {

    const {user} = useContext(Context);
    console.log(user)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {user.email}</Text>
      <LogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Settings;
