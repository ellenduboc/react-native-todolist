import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const FilterButton = () => {
  return (
    <View style={styles.filterButtonWrapper}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
