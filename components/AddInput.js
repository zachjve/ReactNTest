import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function AddInput({handleAddGoal, goalInput, setGoalInput}) {
    return (
        <KeyboardAvoidingView
            behavior="padding" 
            style={styles.container} 
            keyboardVerticalOffset={50}>
            <TextInput 
                value={goalInput} 
                style={styles.input}
                placeholder="Entrez un objectif" 
                onChangeText={(text) => setGoalInput(text)}>
            </TextInput>
            <TouchableOpacity 
                style={styles.addButton} onPress={() => {handleAddGoal()}}>
                <Text style={styles.addButtonText}>Ajouter</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        fontSize: 16,
    },
      addButton: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 5,
    },
      addButtonText: {
        color: 'white',
    },
})


