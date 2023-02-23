import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddInput({handleAddGoal, goalInput, setGoalInput}) {
    return (
    <View style={styles.container}>
        <TextInput 
            value={goalInput} 
            style={styles.input}
            placeholder="Entrez un objectif" 
            onChangeText={(text) => setGoalInput(text)}>
        </TextInput>
        <TouchableOpacity 
            onPress={() => {handleAddGoal()}} 
            style={styles.Addbutton}>
            <Text>Ajouter</Text>
        </TouchableOpacity>
    </View >
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Addbutton: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
})


