import { KeyboardAvoidingView, ScrollView, Text, View, Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { gStyle } from './../styles/style';

const AddNote = ({navigation, ...props}) => {
  return (
    <ScrollView>
        <KeyboardAvoidingView
        behavior='padding'> 

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding: 20, justifyContent: 'space-around'}}>
                    <TextInput style={gStyle.addNoteInput} placeholder='Введите текст...' 
                    multiline={true}
                    value={props.note} onChangeText={(text) => props.setNote(text)} />
                    
                    <TouchableOpacity style={gStyle.addNoteButton} onPress={() => {
                        if (props.note === ''){
                            Alert.alert('Please Type Something');
                        } else {
                            props.handleNote();
                            navigation.navigate('Notes')
                        }
                    }}>
                        <Text style={gStyle.addNoteButtonText}>Создать</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView> 
    </ScrollView>
  )
}

export default AddNote

