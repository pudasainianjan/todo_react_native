import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';


export default function App(){

  const [todos,setTodos]  = useState([
    {text:'buy coffee',key:'1'},
    {text:'create app',key:'2'},
    {text:'play guitar',key:'3'},
    {text:'code',key:'4'},
    {text:'movies',key:'5'},
    {text:'play guitar',key:'6'},
  ]);


  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key != key)
    });
  }

  const submitHandler = (text) =>{
    setTodos((prevTodos)=>{
      return [
        {text: text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }




  return(
    <View style={styles.container}>
      
        {/* HEADER */}
        <Header />
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        {/* TODO FORM */}
          <View style={styles.list}>
            <FlatList
              data={todos}    //data to looped over
              renderItem = {({item})=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
              )}
           />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
});