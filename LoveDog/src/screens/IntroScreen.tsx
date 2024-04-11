import React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {Button} from '../components/Button';
import {Typography} from '../components/Typography';
import {useRootNavigation} from '../navigation/RootStackNavigation';

export const IntroScreen: React.FC = () => {
  const rootNavigation = useRootNavigation<'Intro'>();

  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderTitle title="IntroScreen" />
      </Header>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            rootNavigation.push('Signup', {
              screen: 'InputEmail',
              params: {
                uid: '',
                preInput: {
                  email: 'test@test.com',
                  name: 'test',
                  profileImage: '',
                },
              },
            });
          }}>
          <Typography fontSize={16}>회원가입 화면으로 이동하기</Typography>
        </Button>

        <Button
          onPress={() => {
            rootNavigation.replace('Main');
          }}>
          <Typography fontSize={16}>메인 화면으로 이동하기</Typography>
        </Button>
      </View>
    </View>
  );
};
