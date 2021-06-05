import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    }
    catch(error){
      Alert.alert("error","permission");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />
  }
}