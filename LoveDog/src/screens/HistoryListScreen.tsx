import React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {useRootNavigation} from '../navigation/RootStackNavigation';
import {HeaderIcon} from '../components/Header/HeaderIcon';

export const HistoryListScreen: React.FC = () => {
  const rootNavigation = useRootNavigation<'HistoryList'>();

  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderTitle title="HistoryListScreen" />
        <HeaderIcon iconName="close" onPress={rootNavigation.goBack} />
      </Header>
    </View>
  );
};
