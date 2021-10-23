import React, { useState } from "react";
import { 
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";
import auth from "@react-native-firebase/auth";

import LoginButton from "../components/LoginButton";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    header: {
      marginTop: 15,
    },
    input: {
      marginVertical: 35,
    },
    form: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5'
    }
});

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const login = () => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .catch(error => {
              setError(error.message);
          });
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Login</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                />
                <LoginButton onPress={login}>Login</LoginButton>
            </View>
        </View>
    );
}

export default LoginScreen;
