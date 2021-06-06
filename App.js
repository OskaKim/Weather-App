import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

// https://home.openweathermap.org/api_keys
const API_KEY = "125dcfdaf3aafea1b4ff50185c299681";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeatherAsync = async(latitude, longitude) => {
    const { data } =
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  };

  getLocationAsync = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeatherAsync(latitude, longitude);
      this.setState({ isLoading: false });
    }
    catch(error){
      Alert.alert("error", "check permission");
    }
  };

  componentDidMount(){
    this.getLocationAsync();
  }
  
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}