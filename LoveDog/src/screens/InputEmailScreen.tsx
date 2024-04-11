import React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';

export const InputEmailScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderTitle title="InputEmailScreen" />
      </Header>
    </View>
  );
};
