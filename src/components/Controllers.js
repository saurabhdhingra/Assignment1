import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('screen');

//
import {colors} from '../utilities/style';

export default function Controllers({
  isRunning,
  handleStart,
  handleLap,
  handleStop,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: colors.color4}]}
        onPress={() => handleStop()}>
         <Text style = {{fontSize : 30}}>⏹️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: colors.color2}]}
        onPress={() => handleStart()}>
        <Text style = {{fontSize : 30}}>{isRunning ? '⏸️' : '▶️'}</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: colors.color4}]}
        onPress={() => handleLap()}>
        <Text style = {{fontSize : 30}}>⏱</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
  },
  buttonContainer: {
    height: 70,
    width: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});