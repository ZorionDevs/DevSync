import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function ButtomTab({ navigate }){
  const [select, setSelect] = useState("inicio");
  const [visible, setVisible] = useState(true);
  global.visible = (bool) => { setVisible(bool) };
  
  return(
    <View style={[styles.container, {display: visible == true ? 'flex' : 'none'}]}>
        <TouchableOpacity style={styles.selectButton} onPress={() => { setSelect("inicio"); navigate("Home"); }}>
          <Icon name="home" size={30} color={select == "inicio" ? "#fff" : "#8b1fff"} />
          <Text style={[styles.selectText, {color: select == "inicio" ? '#fff' : '#8b1fff'}]}>Inicio</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 20, marginRight: 20}}/>
        <TouchableOpacity style={styles.selectButton} onPress={() => { setSelect("com"); navigate("Community"); }}>
          <Icon name="users" size={30} color={select == "com" ? "#fff" : "#8b1fff"} />
          <Text style={[styles.selectText, {color: select == "com" ? '#fff' : '#8b1fff'}]}>Comunidade</Text>
        </TouchableOpacity>
          <View style={{marginLeft: 20, marginRight: 20}}/>
        <TouchableOpacity style={styles.selectButton} onPress={() => { setSelect("noti"); navigate("Notify"); }}>
          <Icon name="bell" size={30} color={select == "noti" ? "#fff" : "#8b1fff"} />
          <Text style={[styles.selectText, {color: select == "noti" ? '#fff' : '#8b1fff'}]}>Notificações</Text>
        </TouchableOpacity>
        <View style={{marginLeft: 20, marginRight: 20}}/>
        <TouchableOpacity style={styles.selectButton} onPress={() => { setSelect("pesq"); navigate("Search"); }}>
          <Icon name="search" size={30} color={select == "pesq" ? "#fff" : "#8b1fff"} />
          <Text style={[styles.selectText, {color: select == "pesq" ? '#fff' : '#8b1fff'}]}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
  )
}

export function Visible(bool){ global.visible(bool) }