import { StatusBar } from 'expo-status-bar'; // Use from expo
import { useState } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) return;
    setGoals((currentGoals) => [
      ...currentGoals, { text: enteredGoal, id: Math.random().toString() },
    ]);
    setEnteredGoal('');
    setIsModalVisible(false);
  }
  const deleteHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }
  const cancelModalHandler = () => {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View style={styles.imageContainer}> 
          <Image source={require('./assets/splash.png')} style={styles.image} />
        </View>
        <Button title="Add New Goal" onPress={() => setIsModalVisible(true)} />
        <Modal visible={isModalVisible} animationType='slide' transparent={true}>
          <View style={styles.inputContainer}>
            <GoalInput goalInputHandler={goalInputHandler} enteredGoal={enteredGoal} onAddGoal={addGoalHandler} onCloseModal={cancelModalHandler} />
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} onDeleteGoal={deleteHandler} id={itemData.item.id} />
          )} keyExtractor={(item) => item._id} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  goalsContainer: {
    flex: 4,
    marginTop: 20
  },
  imageContainer: {
    padding: 30, 
    alignItems: 'center' 
  },
  image: {
    height: 100,
    width: 100,
  }
});
