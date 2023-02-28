import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function EditModal({ item, index, handleEditGoal }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [editGoal, setEditGoal] = useState(item)
    
    useEffect( () => {
      setEditGoal(item)
    }, [item]);

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.container}>
                <TextInput
                  style={styles.modalInput}
                  value={editGoal}
                  onChangeText={(text) => setEditGoal(text)}>
                </TextInput>
                <TouchableOpacity 
                  style={styles.buttonEditModal}
                  onPress={() => {handleEditGoal(index, editGoal)}}>
                  <Text style={styles.textStyle}>Edit</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Edit</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 50,
      marginLeft: 5,
    },
    buttonClose: {
      marginTop: 30,
      backgroundColor: 'orange',
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 14,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalInput: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginRight: 10,
      borderRadius: 5,
      fontSize: 14,
    },
    buttonEditModal: {
      backgroundColor: 'blue',
      paddingHorizontal: 10,
      paddingVertical: 12,
      borderRadius: 5,
    },
    container: {
      flexDirection: 'row',
    },
  });