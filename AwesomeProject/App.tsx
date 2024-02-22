import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

interface DataItem {
  id: number;
  name: string;
  description: string;
}

const data: DataItem[] = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  { id: 4, name: 'Item 4', description: 'Description for Item 4' },
  { id: 5, name: 'Item 5', description: 'Description for Item 5' },
];

const Item: React.FC<{ name: string; description: string }> = ({ name, description }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {data.map(item => (
          <Item key={item.id} name={item.name} description={item.description} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default App;
