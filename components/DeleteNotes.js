import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { gStyle } from './../styles/style';

const DeleteNotes = ({...props}) => {
    function emptyBin(){
        Alert.alert(
            'Delete All',
            'Are you sure you want to permanently delete all notes?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('No pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        let emptyArray = [...props.moveToBin];
                        emptyArray = [],
                        props.setMoveToBin(emptyArray);
                    }
                }
            ]
        )
    }
    
    function undoAllNotes() {
        let deleteNotes = [...props.moveToBin];
        let notes = [...props.notes];
        deleteNotes.forEach((item, index) => {
            notes.push(item)
        })
        props.setMoveToBin([]);
        props.setNotes(deleteNotes);
    }

    function undoNote(index){
        let getBack = props.moveToBin[index];
        let array = [getBack, ...props.notes];
        props.setNotes(array);

        let newArray = [...props.moveToBin];
        newArray.splice(index, 1);
        props.setMoveToBin(newArray);
    }

    function permanentlyDelete(index){
        Alert.alert(
            'Delete',
            'Are you sure you want to permanently delete this item?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('No pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        let newArray = [...props.moveToBin];
                        newArray.splice(index, 1);
                        props.setMoveToBin(newArray);
                    }
                }
            ]
        )
    }
  return (
    <ScrollView>
        <View style={gStyle.notesContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity style={gStyle.emptyButton} onPress={() => undoAllNotes()}>
                <Text style={gStyle.emptyButtonText}>recover all</Text>
                </TouchableOpacity>

                <Text style={{fontWeight: '700', fontSize: 18, color: "#07689F"}}>
                    Корзина: {props.moveToBin.length}
                </Text>

                <TouchableOpacity style={gStyle.emptyButton} onPress={() => emptyBin()}>
                    <Text style={gStyle.emptyButtonText}>delete all</Text>
                </TouchableOpacity>
            </View>
            <View style={gStyle.notesDivider}></View>
            {props.moveToBin.length === 0
            ?
                <View style={gStyle.emptyNoteContainer}>
                    <Text style={gStyle.emptyNoteText}></Text>
                </View>
            :
            props.moveToBin.map((item, index) => 
                <View style={gStyle.notesItem} key={index}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={gStyle.note}>
                            <Text style={gStyle.notesIndex}>{index +1}. </Text>
                            <Text style={gStyle.notesText}>{item}</Text>
                        </View>
                        <TouchableOpacity onPress={() => undoNote(index)}>
                            <Text style={gStyle.notesDelete}>Undo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={gStyle.dateContainer}>
                        <Text>{props.date} </Text>
                        <TouchableOpacity onPress={() => permanentlyDelete(index)}>
                            <Text style={gStyle.notesDelete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    </ScrollView>
  )
}

export default DeleteNotes

