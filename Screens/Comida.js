import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const comidas = [
  {
    id: 1,
    imagen: 'https://cdn2.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/08/como-hacer-hamburguesa-de-atun.jpg',
    nombre: "Hamburguesa",
    descripcion: "Hamburguesa de de res con vegetales, queso, aderesos y papas",
  },
  {
    id: 2,
    imagen: 'https://www.oliveradatenea.com/wp-content/uploads/2023/06/Sushi-rolls-de-salmon-y-Olivada-Olivera-dAtenea.jpg',
    nombre: "Sushi",
    descripcion: "Rollo de sushi con salmon, queso crema y aguacate",
  },
  {
    id: 3,
    imagen: 'https://assets.unileversolutions.com/recipes-v2/245067.jpg?im=Resize,height=580;Crop,size=(932,580),gravity=Center',
    nombre: "Coctel de camaron",
    descripcion: "Coctel de camaran en salsa rosada",
  },
  {
    id: 4,
    imagen: 'https://www.nestleprofessional-latam.com/sites/default/files/styles/np_recipe_detail/public/2022-07/paella.png?itok=CBvKkcsa',
    nombre: "Paella",
    descripcion: "Plato de arroz seco, con carne, pescado, mariscos, legumbres, etc., característico de la región valenciana, en España",
  },
  {
    id: 5,
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/1/8/5/como_preparar_sopa_ramen_de_pollo_45581_orig.jpg',
    nombre: "Sopa Ramen",
    descripcion: "Sopa ramen con lomo de cerdo y vegetales",
  },
  {
    id: 6,
    imagen: 'https://newmansown.com/wp-content/uploads/2022/03/Homemade-lasagna.png',
    nombre: "Lasagna",
    descripcion: "Plato de lasagna con pollo, carney queso",
  },
];

const Comida = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 38,
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          Comida Favorita Axel y Daniel
        </Text>
        {comidas.map((comida) => (
          <TouchableOpacity
            key={comida.id}
            style={styles.comidaCard}
          >
            <Image source={{ uri: comida.imagen }} style={styles.comidaImage} />
            <Text style={styles.comidaName}>{comida.nombre}</Text>
            <Text style={styles.comidaDescription}>
              {comida.descripcion}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  comidaCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  comidaImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  comidaName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  comidaDescription: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default Comida;