import React, {useEffect, useRef, useState} from 'react';
import {Button, Platform, SafeAreaView, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import {styles} from './map-styles';
import ESText from '../../components/text/ESText';
import {TEXT_TYPE} from '../../components/constants';
import ESSwiper from '../../components/swiper/ESSwiper';
import Geolocation from '@react-native-community/geolocation';
import colors from '../../theme/colors';
import {PermissionsAndroid} from 'react-native';
import {ESButton} from '../../components';

// will be completed later
const Map: React.FC = () => {
  const [location, setLocation] = useState(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position: {coords: React.SetStateAction<null>}) => {
              setLocation(position.coords);
            },
            (error: any) => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    // const requestLocationPermission = async () => {
    //   if (Platform.OS === 'android') {
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //         {
    //           title: 'Location Permission',
    //           message: 'App needs access to your location.',
    //           buttonNeutral: 'Ask Me Later',
    //           buttonNegative: 'Cancel',
    //           buttonPositive: 'OK',
    //         },
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         Geolocation.getCurrentPosition(
    //           (position: {coords: React.SetStateAction<null>}) => {
    //             setLocation(position.coords);
    //           },
    //           (error: any) => {
    //             console.log(error);
    //           },
    //           {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    //         );
    //       } else {
    //         console.log('Location permission denied');
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   }
    // };

    requestLocationPermission();
    console.log('location', location);

    return () => {
      // Cleanup
    };
  }, []);
  console.log('location', location);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        // style={{flex: 1}}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {location?.latitude && (
          <Marker
            // draggable
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
            description={'This is a description of the marker'}
          />
        )}
      </MapView>
      <ESButton
        values={['Get Location']}
        handleButtonPress={() => requestLocationPermission()}
      />
    </View>
  );
};

export default Map;
