import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOption = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#C04848', '#480048'],
    title: "thunderstorm",
    subtitle: '천둥번개'
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#4b6cb7', '#182848'],
    title: "drizzle",
    subtitle: '보슬비'
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#485563', '#29323c'],
    title: "rain",
    subtitle: '비'
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#83a4d4', '#b6fbff'],
    title: "snow",
    subtitle: '눈'
  },
  Atmosphere: {
    iconName: 'weather-fog',
    gradient: ['#fe8c00', '#f83600'],
    title: "atmosphere",
    subtitle: '자욱한 안개'
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#70e1f5', '#ffd194'],
    title: "Clear",
    subtitle: '맑음'
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#DAE2F8', '#FFFFFF'],
    title: "Clouds",
    subtitle: '구름'
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#EFEFBB', '#D4D3DD'],
    title: "Haze",
    subtitle: '실안개'
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#FFEEEE', '#D4D3DD'],
    title: "mist",
    subtitle: '안개 주의'
  },
  Dust: {
    iconName: 'weather-fog',
    gradient: ['#DE6262', '#FFB88C'],
    title: "dust",
    subtitle: "미세먼지 주의"
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
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
      </View>
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
  },
  title: {
    color: 'white',
    fontSize: 54,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24
  },
  textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"
  }
})
