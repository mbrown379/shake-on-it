import React, { useContext, useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        style={styles.signupButton}
        onPress={() => register(email, password)}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#00C244',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00C244'
  },
  signupButton: {
    backgroundColor: '#00C244',
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});