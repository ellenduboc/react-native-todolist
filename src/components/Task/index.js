import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

const Task = props => {
  return (
    <View style={styles.headerTask}>
      <TouchableOpacity
        style={[styles.checkButton, {backgroundColor: 'transparent'}]}
        onPress={props.onTaskPress}>
        {props.done ? <Icon name="check" size={18} color="#177AFB" /> : null}
      </TouchableOpacity>
      <Text style={styles.task}>{props.taskTitle}</Text>
    </View>
  );
};

export default Task;
