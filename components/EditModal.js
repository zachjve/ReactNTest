import { View, Text, Modal, StyleSheet, Pressable, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function EditModal(props) {
    const [modalVisible, setModalVisible] = useState(false);

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
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Edit</Text>
        </Pressable>
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
    buttonOpen: {
      backgroundColor: 'blue',
    },
    buttonClose: {
      backgroundColor: 'orange',
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 12,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });