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
  const [task, setTask] = useState(''); // Estado criado para armazenar o que o usuário está digitando.
  const [taskList, setTaskList] = useState([]); // Estado criado para armazenara lista de tarefas.
  const [doneList, setDoneList] = useState([]); // Estado criado para armazenar os itens concluídos.
  const [filter, setFilter] = useState('All');
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
              ...taskList, // Espalhar os itens que ja existe e salvar em taskList.
              {
                id: taskList.length, // Torna o valor o id equivalente ao tamanho do array.
                task: task,
              },
            ]);
            setTask('');
          }}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FilterButton
        allPress={() => setFilter('All')}
        donePress={() => setFilter('Done')}
        filter={filter}
      />
      <Text style={styles.titleTask}>TODAY TASKS</Text>
      <FlatList
        data={filter === 'All' ? taskList : doneList}
        renderItem={({item}) => (
          <Task
            taskTitle={item.task}
            done={doneList.some(element => element.id === item.id)} // Checagem se o elemento selecionado é o mesmo que o item passado na task.
            onTaskPress={() => {
              if (doneList.some(element => element.id === item.id)) {
                const newList = doneList.filter(
                  element => element.id !== item.id,
                ); // Estrutura condicional onde: Caso o elemento selecionado seja diferente do item passado na task, crie um novo array com os novos elementos.
                //caso contrario, acesse a doneList e adicione a nova task e o novo id.
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
