import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {IntroScreen} from '../screens/IntroScreen';
import {SignupNavigation, TypeSignupNavigation} from './SignupNavigation';
import {BottomTabNavigation} from './BottomTabNavigation';
import {HistoryListScreen} from '../screens/HistoryListScreen';
import {
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TypeRootStackNavigationParams = {
  Intro: undefined;
  Signup: NavigatorScreenParams<TypeSignupNavigation>;
  Main: undefined;
  HistoryList: undefined;
};

const Stack = createBottomTabNavigator<TypeRootStackNavigationParams>();

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Signup" component={SignupNavigation} />
      <Stack.Screen name="Main" component={BottomTabNavigation} />
      <Stack.Screen name="HistoryList" component={HistoryListScreen} />
    </Stack.Navigator>
  );
};

export const useSignupNavigation = <
  RouteName extends keyof TypeRootStackNavigationParams,
>() =>
  useNavigation<
    NativeStackNavigationProp<TypeRootStackNavigationParams, RouteName>
  >();

export const useSignupRoute = <
  RouteName extends keyof TypeRootStackNavigationParams,
>() => useRoute<RouteProp<TypeRootStackNavigationParams, RouteName>>();
