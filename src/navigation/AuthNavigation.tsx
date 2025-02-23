// AuthNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@src/screens/auth/LoginScreen';

export type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

interface AuthNavigatorProps {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthNavigator({setUser}: AuthNavigatorProps) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login">
        {props => <LoginScreen {...props} setUser={setUser} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
