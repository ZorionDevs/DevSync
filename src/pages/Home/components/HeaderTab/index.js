import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import styles from './styles';

export default function TopHeader({ navigate }){
  const [select, setSelect] = useState('todos');
  
  return(
    <Animated.View style={[styles.container]}>
      <View style={styles.infoHeader}>
        <Image source={require('../../../../assets/devSync.png')} style={styles.logo}/>
        <TouchableOpacity style={styles.configUserButton}/>
      </View>
      <View style={styles.barHeader}>
        <TouchableOpacity onPress={() => { setSelect("todos"); navigate("Todos"); }} style={[styles.selectButton, {backgroundColor: select == "todos" ? '#fff' : 'transparent'}]}>
          <Text style={[styles.selectText, {color: select == "todos" ? '#000' : '#fff'}]}>Todos</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 10, marginRight: 10}}/>
        <TouchableOpacity onPress={() => { setSelect("cursos"); navigate("Cursos"); }} style={[styles.selectButton, {backgroundColor: select == "cursos" ? '#fff' : 'transparent'}]}>
          <Text style={[styles.selectText, {color: select == "cursos" ? '#000' : '#fff'}]}>Cursos</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 10, marginRight: 10}}/>
        <TouchableOpacity onPress={() => { setSelect("livros"); navigate("Livros"); }} style={[styles.selectButton, {backgroundColor: select == "livros" ? '#fff' : 'transparent'}]}>
          <Text style={[styles.selectText, {color: select == "livros" ? '#000' : '#fff'}]}>Livros</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 10, marginRight: 10}}/>
        <TouchableOpacity onPress={() => {setSelect("roadmaps"); navigate('Roadmaps'); }} style={[styles.selectButton, {backgroundColor: select == "roadmaps" ? '#fff' : 'transparent'}]}>
          <Text style={[styles.selectText, {color: select == "roadmaps" ? '#000' : '#fff'}]}>RoadMaps</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 5, marginRight: 5}}/>
      </View>
    </Animated.View>
  )
}