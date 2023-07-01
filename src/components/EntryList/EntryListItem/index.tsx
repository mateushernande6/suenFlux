import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Svg, {Circle, Rect} from 'react-native-svg';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EntryListItem = ({entry, isFirstItem, islastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = islastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && islastItem);
  const bulletColor = entry.category?.color || Colors.white;

  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg width={30} height={50}>
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View style={styles.details}>
            <Icon
              style={styles.entryAtIcon}
              name="clock-time-eight-outline"
              size={12}
            />
            <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>
            {entry.address && (
              <>
                <Icon style={styles.addressIcon} name="map-marker" size={12} />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryAtIcon: {
    color: Colors.metal,
    marginRight: 2,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.metal,
  },
  addressIcon: {
    marginRight: 2,
    marginLeft: 5,
    color: Colors.metal,
  },
  addressText: {
    fontSize: 12,
    color: Colors.metal,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default EntryListItem;
