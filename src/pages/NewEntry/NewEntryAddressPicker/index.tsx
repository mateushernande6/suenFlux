import {View, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import opencage from 'opencage-api-client';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = ({address, onChange, navigation}: any) => {
  const getLocation = async (latitude: number, longitude: number) => {
    const key = 'a58b138057194fedbdbfff19864bcba2';
    await opencage
      .geocode({key, q: `${latitude},${longitude}`})
      .then(response => {
        const result = response.results[0];

        Alert.alert('Localização', result.formatted, [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel press'),
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              onChange({
                latitude: latitude,
                longitude: longitude,
                address: result.formatted,
              });
            },
          },
        ]);
      })
      .catch(error => {
        console.log(
          'getLocation :: Error: Falha ao fazer revert',
          JSON.stringify(error),
        ),
          Alert.alert(
            'Houve um erro ao recuperar sua posição, tenha certeza que autorizou este aplicativo',
          );
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      async pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        await getLocation(latitude, longitude);
      },
      error => {
        console.log(
          'NewEntryAddressPicker :: Error: Error ao recuperar posição',
          error,
        );

        Alert.alert(
          'Houve um erro ao recuperar sua posição, tenha certeza que autorizou este aplicativo',
        );
      },
    );
  };

  const onButtonPress = () => {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          onPress: () => {
            onChange({
              latitude: null,
              longitude: null,
              address: '',
            });

            navigation.setParams({
              entry: {
                address: '',
                latitude: null,
                longitude: null,
              },
            });
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Press'),
        },
      ]);
    } else {
      getPosition();
    }
  };

  console.log('addd', address);

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, address && styles.buttonActived]}
        onPress={onButtonPress}>
        <Icon name="tooltip-account" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryAddressPicker;
