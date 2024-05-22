// components/StudentCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentCard = ({ name, carnet, photo }) => (
  <View style={styles.card}>
    <Image source={photo} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.carnet}>{carnet}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carnet: {
    fontSize: 14,
    color: '#555',
  },
});

export default StudentCard;