import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOption = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#C04848', '#480048']
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#4b6cb7', '#182848']
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#485563', '#29323c']
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#83a4d4', '#b6fbff']
  },
  Atmosphere: {
    iconName: 'weather-fog',
    gradient: ['#fe8c00', '#f83600']
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#70e1f5', '#ffd194']
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF']
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#EFEFBB', '#D4D3DD']
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#FFEEEE', '#D4D3DD']
  },
  Dust: {
    iconName: 'weather-fog',
    gradient: ['#DE6262', '#FFB88C']
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
