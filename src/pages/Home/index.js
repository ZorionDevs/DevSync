import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HeaderNavigation from './components/HeaderNavigation';
//import styles from './styles';

export default function Home(){
  const Nav = new HeaderNavigation({ inicialPage: "Todos" });
  
  return (
    <Nav.View/>
  )
}