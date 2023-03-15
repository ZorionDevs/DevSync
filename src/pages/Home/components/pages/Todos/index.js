import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

export default function Todos(){
  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{height: 100, width: '100%'}}>
        <View style={styles.adNews}>
          <Image
          source={{uri: 'https://media.discordapp.net/attachments/981723515948515448/1083598688498229248/1678420445392.png'}}
          style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
        </View>
        
        <View style={styles.containerBox}>
          <Text style={styles.title}><Text style={{color: '#7800ff'}}>DevSync</Text> - Novidades</Text>
          <View style={styles.contentBox}>
            <ScrollView horizontal>

            </ScrollView>
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.title}><Text style={{color: '#ffe900'}}>Internet</Text> - Cursos</Text>
          <View style={styles.contentBox}>
            <ScrollView horizontal>

            </ScrollView>
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.title}><Text style={{color: '#ff9400'}}>FreeEduca</Text> - Livros</Text>
          <View style={styles.contentBox}>
            <ScrollView horizontal>

            </ScrollView>
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.title}><Text style={{color: '#7800ff'}}>DevSync</Text> - RoadMaps</Text>
          <View style={styles.contentBox}>
            <ScrollView horizontal>

            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}