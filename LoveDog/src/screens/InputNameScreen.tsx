import React, {useCallback, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {Button} from '../components/Button';
import {Typography} from '../components/Typography';
import {useRootNavigation} from '../navigation/RootStackNavigation';
import {HeaderGroup} from '../components/Header/HeaderGroup';
import {HeaderIcon} from '../components/Header/HeaderIcon';
import {
  useSignupNavigation,
  useSignupRoute,
} from '../navigation/SignupNavigation';
import {SingleLineInput} from '../components/SingleLineInput';
import {Spacer} from '../components/Spacer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RemoteImage} from '../components/RemoteImage';
import {Icon} from '../components/Icons';
import ImagePicker from 'react-native-image-crop-picker';

export const InputNameScreen: React.FC = () => {
  const rootNavigation = useRootNavigation<'Signup'>();
  const navigation = useSignupNavigation<'InputName'>();
  const routes = useSignupRoute<'InputName'>();
  const safeArea = useSafeAreaInsets();

  const [selectedPhoto, setSelectedPhoto] = useState<{uri: string} | null>(
    null,
  );
  // 프로필 이미지 가져오기
  const [profileImage, setProfileImage] = useState(
    routes.params.preInput.profileImage,
  );
  const [inputName, setInputName] = useState(routes.params.preInput.name);

  const isValid = useMemo(() => {
    return true;
  }, []);

  const onPressProfileImage = useCallback(async () => {
    const photoResult = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    });
    setSelectedPhoto({uri: photoResult.path});
  }, []);

  const onPressSubmit = useCallback(() => {
    //  rootNavigation.replace('Main');
  }, []);

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
          paddingHorizontal: 24,
        }}>
        <Button onPress={onPressProfileImage}>
          <View style={{width: 100, height: 100}}>
            {profileImage !== '' ? (
              <>
                <RemoteImage
                  width={100}
                  height={100}
                  url={
                    selectedPhoto !== null ? selectedPhoto.uri : profileImage
                  }
                  style={{borderRadius: 50}}
                />
                <View style={{position: 'absolute', right: 0, bottom: 0}}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: 'gray',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="add" size={16} color="white" />
                  </View>
                </View>
              </>
            ) : (
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'gray',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="add" size={16} color="white" />
              </View>
            )}
          </View>
        </Button>

        <Spacer space={24} />
        <SingleLineInput
          value={inputName}
          onChangeText={setInputName}
          placeholder="이름을 입력해 주세요"
          onSubmitEditing={onPressSubmit}
        />
      </View>

      <Button onPress={onPressSubmit}>
        <View style={{backgroundColor: isValid ? 'black' : 'lightgray'}}>
          <Spacer space={16} />

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={20} color="white">
              회원가입
            </Typography>
          </View>
          <Spacer space={safeArea.bottom + 12} />
        </View>
      </Button>
    </View>
  );
};
