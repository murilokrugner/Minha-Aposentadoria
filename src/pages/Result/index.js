import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {Container, LoadingTitle} from './styles';

import LottieView from 'lottie-react-native';

import oldMen from '../../assets/oldmen.json';

import {useRoute} from '@react-navigation/native';

function Result() {
  const route = useRoute(); 

  const [loading, setLoading] = useState(true);

  const params = route.params.obj;

  useEffect(() => {

  }, []);

  return (
    <Container>
      {loading ? (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LoadingTitle>Calculando...</LoadingTitle>
          <LottieView
            source={oldMen}
            autoPlay
            loop
            style={{width: 200, height: 200}}
          />
        </SafeAreaView>
      ) : (
        <View>
          <Text>TESTE</Text>
        </View>
      )}
    </Container>
  );
}

export default Result;
