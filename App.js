import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

// https://home.openweathermap.org/api_keys
const API_KEY = "125dcfdaf3aafea1b4ff50185c299681";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    }
    catch(error){
      Alert.alert("error","permission");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}