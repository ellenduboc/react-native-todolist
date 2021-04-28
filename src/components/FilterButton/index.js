import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const FilterButton = props => {
  return (
    <View style={styles.filterButtonWrapper}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          {backgroundColor: props.filter === 'All' ? '#177AFB' : 'transparent'},
        ]}
        onPress={props.allPress}>
        <Text
          style={[
            styles.filterText,
            {color: props.filter === 'All' ? '#FFFFFF' : '#177AFB'},
          ]}>
          ALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          {
            backgroundColor:
              props.filter === 'Done' ? '#177AFB' : 'transparent',
          },
        ]}
        onPress={props.donePress}>
        <Text
          style={[
            styles.filterText,
            {color: props.filter === 'Done' ? '#FFFFFF' : '#177AFB'},
          ]}>
          DONE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
