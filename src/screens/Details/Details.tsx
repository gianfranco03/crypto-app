/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';

import i18n from '../../i18n';

import {getCoinById} from '../../redux/actions/cryptoActions';
import {IAppState} from '../../redux/reducers/types';

import styles from './Details.styles';
import colors from '../../lib/constants/colors';

const intervalTime: number = 30000;
const intervalTimes: number = 5;

const DetailsScreen: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();

  const {navigation} = props;
  const {
    data: coin,
    stats,
    statsTime,
    loading,
  } = useSelector((state: IAppState) => state.coin);
  const {isConnected} = useSelector((state: IAppState) => state.device);

  const [count, setCount] = useState<number>(0);

  const ticker = useRef(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRequest();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      // App goes offline - clear request interval
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCount(intervalTimes);
    }
  }, [isConnected]);

  const intervalRequest = (): void => {
    // Get the info updated each 30 seconds up to 5 times
    intervalRef.current = setInterval(() => {
      if (ticker.current < intervalTimes && isConnected) {
        ticker.current = ticker.current + 1;
        setCount(prevCount => prevCount + 1);
        dispatch(getCoinById(Number(coin.id)));
      } else {
        clearInterval(intervalRef.current);
      }
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
          <Text style={styles.headerText}>{i18n.t('detailsScreen.title')}</Text>
          <View style={styles.rightBox} />
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
            <Text style={styles.percentText}>{coin.percent_change_24h}%</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.chartContent}>
            <YAxis
              data={stats}
              contentInset={styles.chartInset}
              svg={{
                fill: 'grey',
                fontSize: 11,
              }}
              numberOfTicks={intervalTimes}
              formatLabel={value => `$${value} `}
            />
            <LineChart
              style={styles.lineChart}
              data={stats}
              svg={{stroke: 'rgb(134, 65, 244)'}}
              contentInset={styles.chartInset}>
              <Grid />
            </LineChart>
          </View>
          <XAxis
            style={styles.xAxis}
            data={stats}
            formatLabel={index => statsTime[index]}
            contentInset={{left: 14, right: 14}}
            svg={{fontSize: 11, fill: 'black'}}
          />
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          ) : null}
        </View>
        <View style={styles.circleContainer}>
          {intervalTimes === count ? (
            <>
              <Text style={styles.requestText}>
                {i18n.t('detailsScreen.requestFinish')}
              </Text>
              {!isConnected ? (
                <Text style={styles.requestText}>
                  {i18n.t('detailsScreen.noInternet')}
                </Text>
              ) : null}
            </>
          ) : (
            <>
              <Text style={styles.requestCount}>
                {count} / {intervalTimes}
              </Text>
              <Text style={styles.requestText}>
                {i18n.t('detailsScreen.nextRequest')}
              </Text>
              <CountdownCircleTimer
                isPlaying
                size={80}
                duration={intervalTime / 1000}
                onComplete={() => [true, 0]}
                colors={[
                  ['#004777', 0.4],
                  ['#F7B801', 0.4],
                  ['#A30000', 0.2],
                ]}>
                {({remainingTime, animatedColor}) => (
                  <Animated.Text style={{color: animatedColor}}>
                    {remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
