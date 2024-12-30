import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

//
import {colors} from '../utilities/style';

export default function Clock({time}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = (centiseconds) => {
    let minutes = 0;
    let seconds = 0;
    let remainCentiseconds = 0;
  
    if (centiseconds < 0) {
      centiseconds = 0;
    }
  
    remainCentiseconds = centiseconds % 100; 
    seconds = Math.floor(centiseconds / 100);
    let remainSeconds = seconds % 60;
    minutes = Math.floor(seconds / 60);
  
    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(remainSeconds),
      miliseconds: padToTwo(remainCentiseconds),
    };
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
        <Text style={{color: colors.color5}}>STOPWATCH</Text>

        <View style={styles.counterContainer}>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).minutes}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).seconds}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>sec</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).miliseconds}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>msec</Text>
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContainer: {
    backgroundColor: colors.color4,
    height: width - 100,
    width: width - 100,
    borderRadius: (width - 100) / 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  counterInnerContainer: {
    alignItems: 'center',
    width: '19%'
  },
  timeText: {
    fontSize: 30,
    color: colors.color5,
  },
});
