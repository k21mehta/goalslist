import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setModalMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      },
    ]);
    setModalMode(false);
  };

  const removeGoalHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  const cancelGoalHandler = () => {
    setModalMode(false);
  };

  //onAddGoal is any prop we assign that will link to 'addGoalHandler' on this current js (App.js)
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalMode(true)}></Button>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelModal={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
