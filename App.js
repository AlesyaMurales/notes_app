import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import DeleteNotes from './components/DeleteNotes';
import EditNote from './components/EditNote';

const Stack = createNativeStackNavigator();

export default function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = useState([]);

  function handleNote() {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');
  }

  return (
    
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen  name='Notes'>
          {props => <Notes {...props} notes={notes} setNotes={setNotes} note={note} setNote={setNote} date={date} setDate={setDate} moveToBin={moveToBin} setMoveToBin={setMoveToBin} /> }
        </Stack.Screen>

        <Stack.Screen name='Создание заметки'>
          {props => <AddNote {...props} note={note} setNote={setNote} handleNote={handleNote} />}
        </Stack.Screen>

        <Stack.Screen name='Корзина'>
          {props => <DeleteNotes {...props} moveToBin={moveToBin} setMoveToBin={setMoveToBin} notes={notes} setNotes={setNotes} date={date} />}
        </Stack.Screen> 

        <Stack.Screen name="Изменение заметки">
          {props => <EditNote {...props} notes={notes} setNotes={setNotes} />}
        </Stack.Screen>     

      </Stack.Navigator>
  
    </NavigationContainer>
    
  );
}
