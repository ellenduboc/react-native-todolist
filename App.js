import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
import Task from './src/components/Task';
import FilterButton from './src/components/FilterButton';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputWapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setTask(text);
          }}
          value={task}
          placeholder="Adicione um item"
          placeholderTextColor="#9A9A9A"
        />
        <TouchableOpacity
          onPress={() => {
            setTaskList([
              ...taskList, //Espalhar os itens que ja existe e salvar em taskList
              {
                id: taskList.length,
                task: task,
              },
            ]);
            setTask('');
          }}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FilterButton />
      <Text style={styles.titleTask}>TODAY TASKS</Text>
      <FlatList
        data={taskList}
        renderItem={({item}) => (
          <Task
            taskTitle={item.task}
            done={doneList.some(element => element.id === item.id)}
            onTaskPress={() => {
              if (doneList.some(element => element.id === item.id)) {
                const newList = doneList.filter(
                  element => element.id !== item.id,
                );
                setDoneList(newList);
              } else {
                setDoneList([...doneList, {id: item.id, task: item.task}]);
              }
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#FAFBFF',
  },
  inputWapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#6284DA',
    borderRadius: 10,
    height: 55,
  },
  addButton: {
    fontFamily: 'verdana-bold',
    fontSize: 24,
    color: '#177AFB',
    paddingRight: 16,
  },

  textInput: {
    marginLeft: 16,
    fontSize: 18,
    color: 'black',
  },

  titleTask: {
    paddingTop: 23,
    paddingLeft: 16,
    fontFamily: 'verdana',
    fontSize: 14,
  },
});

export default TodoList;
