import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Keyboard } from 'react-native'
import React, {useState} from 'react'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { gStyle } from './../styles/style';

const EditNote = ({route, navigation, ...props}) => {
    const {i, n} = route.params;
    const [newEdit, setNewEdit] = useState(n)

    function editNote(){
        let edited = [...props.notes];
        edited[i] = newEdit;
        props.setNotes(edited);

        navigation.navigate('Notes');
    }
  return (
    <ScrollView>
        <KeyboardAvoidingView 
        behavior = 'padding'
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding: 20, justifyContent: 'space-around'}}>
                    <TextInput style={[gStyle.addNoteInput]} placeholder='Type Here...'
                    value={newEdit.toString()} onChangeText={(text) => setNewEdit(text)} 
                    />
                    <TouchableOpacity style={gStyle.addNoteButton} onPress={() => editNote()}>
                        <Text style={gStyle.addNoteButtonText}>Изменить</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default EditNote

const styles = StyleSheet.create({})