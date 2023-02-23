import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListGoal({goals, handleDeleteGoal}) {
    return (
    <View style={styles.container}>
        {goals.map((goal, index) => (
            <View key={index} style={styles.goalContainer}>
              <Text>{goal}</Text>
              <TouchableOpacity 
                onPress={() => handleDeleteGoal(index)} 
                style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 10,
    },
    goalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
})