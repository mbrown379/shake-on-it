import React from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1c313a'
    },
    text: {
        color: '#fff'
    }
});

const LoginButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default LoginButton;
