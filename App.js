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
  const [filter, setFilter] = useState('All'); // Estado criado para armazenar o valor do filtro.
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
              ...taskList, // Espalhar os itens que ja existem.
              {
                id: taskList.length, // Torna o valor do id equivalente ao tamanho do array.
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
            done={doneList.some(element => element.id === item.id)} // Checagem se o elemento atual é o mesmo que o item passado pelo renderItem.
            onTaskPress={() => {
              if (doneList.some(element => element.id === item.id)) {
                const newList = doneList.filter(
                  element => element.id !== item.id,
                ); // Estrutura condicional onde: Caso o elemento selecionado seja igual ao item presente na doneList, crie uma newList, removendo ele e passando os valores restantes.
                setDoneList(newList); // Salve no estado doneList essa nova lista.
              } else {
                setDoneList([...doneList, {id: item.id, task: item.task}]); // Caso contrario, acesse o estado da doneList e adicione a nova task e o novo id.
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
