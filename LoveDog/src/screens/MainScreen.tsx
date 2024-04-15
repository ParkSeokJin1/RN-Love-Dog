import React, {useCallback, useEffect} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Header} from '../components/Header/Header';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {useDispatch, useSelector} from 'react-redux';

import {TypeDog} from '../data/TypeDog';
import {TypeDogDispatch, getDog} from '../actions/dog';
import {RootReducer} from '../store';
import {RemoteImage} from '../components/RemoteImage';
import {Spacer} from '../components/Spacer';
import {Button} from '../components/Button';
import {Icon} from '../components/Icons';
import {Typography} from '../components/Typography';

export const MainScreen: React.FC = () => {
  const {width} = useWindowDimensions();
  const dog = useSelector<RootReducer, TypeDog | null>(
    state => state.dog.currentDog,
  );
  const dispatch = useDispatch<TypeDogDispatch>();

  const onPressLike = useCallback(() => {}, []);

  const onPressNotLike = useCallback(() => {}, []);

  useEffect(() => {
    dispatch(getDog());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <Header>
        <HeaderTitle title="MainScreen" />
      </Header>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {dog !== null && (
          <View style={{width: width * 0.85}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <RemoteImage
                url={dog.photoUrl}
                width={width * 0.7}
                height={width * 0.7}
              />
            </View>

            <Spacer space={64} />

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button onPress={onPressLike}>
                  <View
                    style={{
                      paddingVertical: 12,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <Icon name="thumbs-up" color="white" size={16} />
                    <Typography fontSize={20} color="white">
                      Like
                    </Typography>
                  </View>
                </Button>
              </View>
              <View style={{flex: 1, marginLeft: 4}}>
                <Button onPress={onPressNotLike}>
                  <View
                    style={{
                      paddingVertical: 12,
                      backgroundColor: 'blue',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <Icon name="thumbs-down" color="white" size={16} />
                    <Typography fontSize={20} color="white">
                      Not Like
                    </Typography>
                  </View>
                </Button>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
