import React, {useState} from 'react';
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
import {Spacer} from '../components/Spacer';
import {SingleLineInput} from '../components/SingleLineInput';

export const InputEmailScreen: React.FC = () => {
  const navigation = useSignupNavigation<'InputEmail'>();
  const routes = useSignupRoute<'InputEmail'>();

  const [inputEmail, setInputEmail] = useState('');

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
        <SingleLineInput />
      </View>

      <Button onPress={() => {}}>
        <View style={{}}>
          <Spacer space={16} />
        </View>
      </Button>
    </View>
  );
};
