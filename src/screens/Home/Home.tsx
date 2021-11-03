/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import i18n from '../../i18n';
import showToast from '../../utils/toast';

import {getAllCoins, setCurrentCoin} from '../../redux/actions/cryptoActions';
import {setUser} from '../../redux/actions/userActions';
import {ICoinData, IAppState} from '../../redux/reducers/types';

import {NUMBERS_INPUT} from '../../lib/constants/regex';

import styles from './Home.styles';
import colors from '../../lib/constants/colors';

const HomeScreen: React.FC = (props: any): JSX.Element => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const [coins, setCoins] = useState<Array<ICoinData>>([]);
  const [percentage, setPercentage] = useState<any>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const userName = useSelector((state: IAppState) => state.user.username);
  const {data, loading} = useSelector((state: IAppState) => state.coins);
  const {isConnected} = useSelector((state: IAppState) => state.device);

  useEffect(() => {
    if (isConnected || !data || !data.length) {
      dispatch(getAllCoins());
    }
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setCoins(data);
      setRefreshing(false);
    }
  }, [data]);

  const onRefresh = (): void => {
    setRefreshing(true);
    if (isConnected) {
      dispatch(getAllCoins());
    } else {
      setRefreshing(false);
    }
  };

  const onSendPercent = (): void => {
    Keyboard.dismiss();

    if (!percentage) {
      setCoins(data);
    } else if (!NUMBERS_INPUT.exec(percentage)) {
      showToast({
        text: i18n.t('homeScreen.alerts.invalidPercentage'),
        type: 'error',
      });
    } else {
      setCoins(
        data.filter(
          (item: any) => Number(item.percent_change_24h) >= percentage,
        ),
      );
    }
  };

  const onCoinPress = (coin: ICoinData): void => {
    dispatch(setCurrentCoin(coin));
    navigation.navigate('DetailsScreen');
  };

  const conLogOut = (): void => {
    dispatch(setUser(null));
    navigation.replace('Auth');
  };

  const renderItem = ({item}: {item: ICoinData}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        disabled={!isConnected}
        onPress={() => onCoinPress(item)}>
        <View style={styles.itemLeftBox}>
          <Text style={styles.itemSymbol}>{item.symbol}</Text>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.itemCenterBox}>
          <Text style={styles.itemTexts}>{item.percent_change_24h}%</Text>
        </View>
        <View style={styles.itemRightBox}>
          <Text style={styles.itemTexts}>
            {i18n.t('homeScreen.listItem.rank')}: {item.rank}
          </Text>
          <Text style={styles.itemTexts}>${item.price_usd}</Text>
          <Text style={styles.itemTexts}>BTC {item.price_btc}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorComponent = () => (
    <View style={styles.listItemSeparator} />
  );

  const listFooterComponent = () => <View style={styles.listFooter} />;

  const listEmptyComponent = () => (
    <View style={styles.emptyListContent}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <Text style={styles.noDataText}>{i18n.t('homeScreen.emptyList')}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.titleText}>{i18n.t('homeScreen.welcome')}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userText}>{userName}</Text>
          <View
            style={[
              styles.connectionIndicator,
              {backgroundColor: isConnected ? colors.online : colors.gray},
            ]}
          />
        </View>
      </View>
      <Ionicons
        style={styles.leaveIcon}
        name="log-out-outline"
        size={30}
        color={colors.white}
        onPress={conLogOut}
      />
      <View style={styles.filterContainer}>
        <Text style={styles.listTitle}>{i18n.t('homeScreen.rakingList')}</Text>
        <View style={styles.filtersContent}>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              style={styles.inputText}
              value={percentage?.toString()}
              placeholder={i18n.t('homeScreen.inputPlaceholder')}
              onChangeText={value => setPercentage(value)}
            />
          </View>
          <Button
            style={styles.button}
            mode="contained"
            uppercase={false}
            onPress={onSendPercent}>
            {i18n.t('homeScreen.button')}
          </Button>
        </View>
      </View>
      <FlatList
        data={coins}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={listFooterComponent}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

export default HomeScreen;
