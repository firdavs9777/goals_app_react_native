import { StyleSheet, TextInput, Button, View } from "react-native"


const GoalInput = (props) => {


  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your goal' onChangeText={props.goalInputHandler} value={props.enteredGoal} />
      <Button title="Add Goal" onPress={props.onAddGoal} />
      <Button title="Cancel" color="red" onPress={props.onCloseModal} />
    </View>
  )
}


const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },


});

export default GoalInput;