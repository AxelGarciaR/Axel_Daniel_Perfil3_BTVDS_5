import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';

const students = [
  { name: 'Daniel Cortez', carnet: '20210199', photo: require('../images/DaniFoto.jpg') },
  { name: 'Axel Garcia', carnet: '20220127', photo: require('../images/FotoAxel.jpg') },
  // Agrega más estudiantes según sea necesario
];

const InfoEstudiante = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => <StudentCard {...item} />}
        keyExtractor={(item) => item.carnet}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default InfoEstudiante;