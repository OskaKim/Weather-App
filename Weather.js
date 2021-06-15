import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOption = {
  Thunderstorm: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Drizzle: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Rain: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Snow: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Atmosphere: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Clear: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#EFEFBB', '#D4D3DD']
  },
  Mist: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Dust: { // todo
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  }
}

export default function Weather ({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          color='white'
          size={96}
          name={weatherOption[condition].iconName}
        />
        <Text style={styles.temp}>{temp}o</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust'
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
