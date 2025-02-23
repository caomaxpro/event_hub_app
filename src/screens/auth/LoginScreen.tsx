// LoginScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@src/navigation/AuthNavigation';

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'> & {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginScreen({setUser}: LoginScreenProps) {
  return (
    <View>
      <Text>Login Page</Text>
      <Button title="Login" onPress={() => setUser(true)} />
    </View>
  );
}
