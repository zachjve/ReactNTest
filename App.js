import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import AddInput from './components/AddInput';
import ListGoal from './components/ListGoal';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([...sampleGoals]);

  const handleAddGoal = () => {
    if (goalInput.trim()) {
      setGoals([...goals, goalInput]);
      setGoalInput('')
    }
  }

  const handleDeleteGoal = (index) => {
    const newGoals = [...goals]
    newGoals.splice(index, 1);
    setGoals(newGoals);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des objectifs!</Text>
      <ListGoal
        goals={goals}
        handleDeleteGoal={handleDeleteGoal}
      />
      <AddInput 
        handleAddGoal={handleAddGoal} 
        goalInput={goalInput} 
        setGoalInput={setGoalInput} 
      />
        <StatusBar style="auto" />
    </View>
  );
}

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

