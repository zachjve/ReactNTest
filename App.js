import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => {
    if (goalInput.trim()) {
      setGoals([...goals, goalInput]);
      setGoalInput('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      {sampleGoals.map((goal, index) => (
        <Text key={index}>{goal}</Text>
      ))}
      {goals.map((goal, index) => (
        <Text key={index}>{goal}</Text>
      ))}
      <TextInput value={goalInput} style={styles.input}
        placeholder="Entrez un objectif" 
        onChangeText={(text) => setGoalInput(text)}>
      </TextInput>
      <TouchableOpacity onPress={handleAddGoal} style={styles.button}>
        <Text>Ajouter</Text>
      </TouchableOpacity>
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
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
