import { Alert, Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>This is the home screen!</Text>
      <View style={styles.row}>
        <View style={styles.answerButtons}>
            <Button title='Test Button' onPress={() => fetchData()}></Button>
        </View>
        <View style={styles.answerButtons}>
            <Button title='Test Button' onPress={() => Alert.alert('Answer 2323')}></Button>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.answerButtons}>
            <Button title='Test Button' onPress={() => Alert.alert('Answer 3')}></Button>
        </View>
        <View style={styles.answerButtons}>
            <Button title='Test Button' onPress={() => Alert.alert('Answer 4')}></Button>
        </View>
    </View>
    </View>
  );
}

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => Alert.alert(data.title));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtons: {
      padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
      alignItems: 'center',
      justifyContent: 'space-around' ,
      flexDirection: "row",
      flexWrap: "wrap"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
