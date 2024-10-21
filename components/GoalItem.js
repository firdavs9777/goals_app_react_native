import { View, Text, StyleSheet, Pressable,Platform } from "react-native"

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: '#210644' }} // Ripple effect for Android
      style={({ pressed }) => pressed && Platform.OS === 'ios' ? styles.pressedItem : null} // iOS alternative with opacity

    >
    <View style={styles.goalItem} ><Text>{props.text}</Text></View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#5e0acc',
    color: '#fff',
    borderRadius: 5,
  }, 
  pressedItem: {
    opacity:0.5
  }
})
export default GoalItem;