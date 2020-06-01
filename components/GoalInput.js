import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal(""); //clear the input
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputWithButton}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsLayout}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.onCancelModal}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWithButton: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
