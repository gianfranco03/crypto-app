/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {setCurrentCoin} from '../../redux/actions/cryptoActions';
import {ICoinData} from '../../redux/reducers/types';

import styles from './Details.styles';

const intervalTime: number = 30000;
const intervalTimes: number = 5;

const DetailsScreen: React.FC = (props: any): JSX.Element => {
  const {navigation} = props;
  const coin: ICoinData = useSelector(state => state.coin.data);

  let ticker = 0;
  let intervalRef: any = null;
  let timeoutRef: any = null;

  useEffect(() => {
    getCoinData();

    return () => {
      clearTimeout(timeoutRef);
      clearInterval(intervalRef);
    };
  }, []);

  const getCoinData = (): void => {
    // Get the info after 30 seconds
    timeoutRef = setTimeout(() => {
      // Get the info updated each 30 seconds up to 5 times
      intervalRef = setInterval(() => {
        if (ticker < intervalTimes) {
          ticker = ticker + 1;
        } else {
          clearInterval(intervalRef);
        }
      }, intervalTime);
    }, intervalTime);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons
            style={styles.iconBack}
            name="arrow-back-outline"
            size={25}
            color="gray"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Statistic</Text>
          <View style={{flex: 1}} />
        </View>
        <View style={styles.coinInfo}>
          <View style={styles.rankContainer}>
            <Text style={styles.rankText}>{coin.rank}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>
              {coin.name} / {coin.symbol}
            </Text>
            <Text style={styles.priceText}>$ {coin.price_usd}</Text>
          </View>
          <View style={styles.percentContainer}>
            <Text style={styles.percentText}>{coin.percent_change_24h} %</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
