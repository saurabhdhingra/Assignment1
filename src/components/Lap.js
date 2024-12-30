import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('screen');

import {colors} from '../utilities/style';

export default function Lap({results}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
      remainCentiseconds,
    )}`;

    //
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lap Time</Text>
        <Text style={styles.titleText}>Lap No</Text>
      </View>

      <FlatList
        data={results}
        renderItem={item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: width,
                marginVertical: 10,
              }}>
              <Text style={{color: 'white', flex : 1, textAlign: 'center'}}>{displayTime(item.item)}</Text>
              <Text style={{color: 'white', flex : 1, textAlign: 'center'}}>
                {results.length - item.index}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    margin: 0,
    justifyContent: 'space-around',
    width: width,
    backgroundColor: colors.color4,
    paddingVertical: 10,
    alignSelf: 'stretch'
  },
  titleText: {
    color: colors.color5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});