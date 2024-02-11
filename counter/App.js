import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, CheckBox } from 'react-native-elements';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), taskName: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.id)}
      />
      <ListItem.Content>
        <ListItem.Title style={item.completed ? styles.completedTask : null}>
          {item.taskName}
        </ListItem.Title>
      </ListItem.Content>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Add a task"
        onSubmitEditing={handleAddTask}
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  list: {
    width: '100%',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
});
