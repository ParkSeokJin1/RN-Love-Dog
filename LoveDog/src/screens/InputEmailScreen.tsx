import React from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {
  useSignupNavigation,
  useSignupRoute,
} from '../navigation/SignupNavigation';
import {Button} from '../components/Button';
import {Typography} from '../components/Typography';
import {HeaderGroup} from '../components/Header/HeaderGroup';
import {HeaderIcon} from '../components/Header/HeaderIcon';

export const InputEmailScreen: React.FC = () => {
  const navigation = useSignupNavigation<'InputEmail'>();
  const routes = useSignupRoute<'InputEmail'>();

  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderGroup>
          <HeaderTitle title="InputEmailScreen" />
          <HeaderIcon iconName="close" onPress={navigation.goBack} />
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
            navigation.push('InputName', {
              uid: '',
              preInput: routes.params.preInput,
              inputEmail: '',
            });
          }}>
          <Typography fontSize={16}>회원가입 화면으로 이동하기</Typography>
        </Button>
      </View>
    </View>
  );
};
