import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

export default function ListGoal({ goals, handleDeleteGoal }) {
    const renderGoalItem = ({ item, index }) => (
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{item}</Text>
        <TouchableOpacity onPress={() => handleDeleteGoal(index)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <FlatList data={goals} 
        renderItem={renderGoalItem} 
       keyExtractor={(item, index) => index.toString()}/>
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
      goalText: {
        fontSize: 16,
    },
      deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        marginLeft: 25,
    },
      deleteButtonText: {
        color: 'white',
        fontSize: 10,
    },
});