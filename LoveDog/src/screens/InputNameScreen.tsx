import React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {Button} from '../components/Button';
import {Typography} from '../components/Typography';
import {useRootNavigation} from '../navigation/RootStackNavigation';
import {HeaderGroup} from '../components/Header/HeaderGroup';
import {HeaderIcon} from '../components/Header/HeaderIcon';
import {useSignupNavigation} from '../navigation/SignupNavigation';

export const InputNameScreen: React.FC = () => {
  const rootNavigation = useRootNavigation<'Signup'>();
  const navigation = useSignupNavigation<'InputName'>();

  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderGroup>
          <HeaderIcon iconName="arrow-back" onPress={navigation.goBack} />
          <HeaderTitle title="InputNameScreen" />
        </HeaderGroup>
      </Header>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            rootNavigation.replace('Main');
          }}>
          <Typography fontSize={16}>회원가입 화면으로 이동하기</Typography>
        </Button>
      </View>
    </View>
  );
};
