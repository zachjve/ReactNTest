import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import EditModal from './EditModal.js';

export default function ListGoal({ goals, handleDeleteGoal, handleEditGoal}) {
    const renderGoalItem = ({ item, index }) => (
      <View style={styles.goalContainer}>
        <View style={styles.buttonContainer}>
            <Text style={styles.goalText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteGoal(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
            <EditModal></EditModal>
        </View>
      </View>
    );
  
    return (
        <FlatList 
            data={goals} 
            renderItem={renderGoalItem} 
            keyExtractor={(item, index) => index.toString()}
        />
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
        fontSize: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 12,
    },
});