import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert, Keyboard } from 'react-native';
import React, {useState} from 'react';
import { gStyle } from '../styles/style';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Icon, IconRegistry } from '@ui-kitten/components';


const Notes = ({navigation, ...props}) => {
    const [searchNote, setSearchNote] = useState();

    function deleteNote(index){
        let newArray = [...props.notes];
        let movedNote = newArray.splice(index, 1);
        props.setNotes(newArray);
        props.setMoveToBin(movedNote);

        let bin = [movedNote, ...props.moveToBin];
        props.setMoveToBin(bin);
    }

    function search() {
        if (searchNote === ''){
            Alert.alert('Type  something in search box');
        } else if (searchNote !== ''){
            props.notes.forEach((item, index) => {
                if(item.includes(searchNote)){
                    let searchItem = [...props.notes];
                    let firstElofArray = searchItem[0];
                    let index = [...props.notes].indexOf(item);
                    searchItem[0]=item;
                    searchItem[index]=firstElofArray;
                    props.setNotes(searchItem);
                }
            })
        }
        setSearchNote('');
        Keyboard.dismiss();
    }

    function clearAllNotes() {
        let emptyArray = [...props.notes];
        let deleteCompArray = [...props.moveToBin];
        emptyArray.forEach((item, index) => {
            deleteCompArray.push(item);
        })
        emptyArray=[];
        props.setNotes(emptyArray);
        props.setMoveToBin(deleteCompArray);
    }
  return (
    <View style={gStyle.notesContainer}>
        <View style={gStyle.headingContainer}>
            <Text style={gStyle.notesHeading}>Все заметки</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={gStyle.notesButton} onPress={() => navigation.navigate('Корзина')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='trash-2-outline' fill="white" style={{width: 25, height: 50}} />
                    </ApplicationProvider>
                </TouchableOpacity>

                <TouchableOpacity style={[gStyle.notesButton]} onPress={() => navigation.navigate('Создание заметки')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='plus-outline' fill="white" style={{width: 25, height: 50}} />
                    </ApplicationProvider>
                </TouchableOpacity>
            </View>
        </View>

        <View style={gStyle.notesDivider}></View>

        <View style={gStyle.searchContainer}>
            <TextInput placeholder='Поиск...' placeholderTextColor={'#3F72AF'} style={gStyle.notesInput}
            value={searchNote} onChangeText={(text) => setSearchNote(text)} />
            <TouchableOpacity style={[gStyle.SearchButton, {width:25}]} onPress={() => search()}>
                <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='search' fill="white" style={{width: 20, height: 40}} />
                    </ApplicationProvider>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.SearchButton} onPress={() => clearAllNotes()}>
                <Text style={gStyle.SearchButtonText}>all delete</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={gStyle.notesScrollView} showsVerticalScrollIndicator={false}>
            <View style={gStyle.notesScrollView}>

            {props.notes.lenght === 0
            ?
            
                <View style={gStyle.emptyNoteContainer}>
                    <Text style={gStyle.emptyNoteText}></Text>
                </View>
            :   

                props.notes.map((item, index) => 

                    <View style={gStyle.notesItem} key={index}>
                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                            <View style={gStyle.note}>
                                <Text style={gStyle.notesIndex}>{index + 1}. </Text>
                                <Text style={gStyle.notesText}>{item}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deleteNote(index)}>
                                <Text style={gStyle.notesDelete}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={gStyle.dateContainer}>
                            <Text>{props.date}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Изменение заметки', {
                                i: index,
                                n: item
                            })}>
                                <Text style={gStyle.notesDelete}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
             )} 
             </View>
        </ScrollView>
      
    </View>
  )
}

export default Notes

