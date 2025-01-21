import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { Products } from "@components/Products";
import { DynamicList } from "../components/DynamicList";
import { ItemCounter } from "@components/ItemCounter";


const defaultData: any = {
  frutas: [
    { id: "1", name: "Maçã", selected: false },
    { id: "2", name: "Banana", selected: false },
    { id: "3", name: "Laranja", selected: false },
    { id: "4", name: "Uva", selected: false },
    { id: "5", name: "Pera", selected: false },
    { id: "6", name: "Melancia", selected: false },
    { id: "7", name: "Melão", selected: false },
    { id: "8", name: "Morango", selected: false },
    { id: "9", name: "Abacaxi", selected: false },
    { id: "10", name: "Mamão", selected: false },
    { id: "11", name: "Manga", selected: false },
    { id: "12", name: "Maracujá", selected: false },

  ],
  roupas: [
    { id: "4", name: "Camiseta", selected: false },
    { id: "5", name: "Calça", selected: false },
    { id: "6", name: "Casaco", selected: false },
  ],
  produtos: [
    { id: "7", name: "Sabão em pó", selected: false },
    { id: "8", name: "Detergente", selected: false },
    { id: "9", name: "Água sanitária", selected: false },
  ],
};

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("frutas");
  const [data, setData] = useState(defaultData);

  const theme = useTheme();

  useEffect(() => {
    const loadStoredData = async () => {
      const storedData = await AsyncStorage.getItem("listData");
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    };
    loadStoredData();
  }, []);

  const handleUpdate = (updatedItems: any) => {
    const updatedData = { ...data, [selectedCategory]: updatedItems };
    setData(updatedData);
    AsyncStorage.setItem("listData", JSON.stringify(updatedData));
  };

  const resetSelections = async () => {
    setData(defaultData);
    await AsyncStorage.removeItem("listData");
  };


  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.onPrimary }}>
      <Image 
        source={require('../assets/logo.jpg')}
        style={{ width: 100, height: 100, alignContent: 'center', alignSelf: 'center' }}
        resizeMode="cover"
        />
      <View style={{ padding: 16 }}>
        <Text style={{
          fontFamily: 'Roboto_700Bold',
          fontSize: 24,
          marginBottom: 16,
          color: theme.colors.primary
        }}>Selecione uma categoria:</Text>
        <Products
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <DynamicList
          items={data[selectedCategory]}
          onUpdate={handleUpdate}
        />
        <Button
          mode="contained"
          onPress={resetSelections}
          style={{ marginTop: 16 }}
        >
          Limpar Todas as Seleções
        </Button>
        <ItemCounter data={data} />    
      </View>
    </View>
  );
};


