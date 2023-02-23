import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
      <Text style={styles.text}>Liste des objectfs!</Text>
      {goals.map((goal, index) => (
        <View key={index} style={styles.goalContainer}>
          <Text>{goal}</Text>
          <TouchableOpacity onPress={() => handleDeleteGoal(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TextInput value={goalInput} style={styles.input}
        placeholder="Entrez un objectif" 
        onChangeText={(text) => setGoalInput(text)}>
      </TextInput>
      <TouchableOpacity onPress={handleAddGoal} style={styles.Addbutton}>
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
  Addbutton: {
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
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 10,
  },
  goalText: {
    flex: 1,
    fontSize: 18,
  },
});
