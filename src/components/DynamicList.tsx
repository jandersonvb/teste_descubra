import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Button, Card, Checkbox, Text } from "react-native-paper";

interface Item {
  id: string;
  name: string;
  selected: boolean;
}

type DynamicListProps = {
  items: Item[];
  onUpdate: (updatedItems: Item[]) => void;
}

export function DynamicList({ items, onUpdate }: DynamicListProps) {
  const [list, setList] = useState<Item[]>(items); // Estado local para a lista de items

  // Esse hook será chamado toda vez que a propriedade items for alterada
  useEffect(() => {
    setList(items);
  }, [items]);



  // Essa função será chamada toda vez que o usuário clicar no checkbox
  const checkSelection = (id: string) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setList(updatedList);
    onUpdate(updatedList);
  };


  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text>{item.name}</Text>
            <Checkbox status={item.selected ? "checked" : "unchecked"} onPress={() => checkSelection(item.id)} />
          </Card.Content>
        </Card>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      style={{ marginVertical: 16, maxHeight: 400, minHeight: 400 }}
    />
  );
}


const styles = StyleSheet.create({
  container: { marginTop: 16 },
  card: { marginBottom: 8 },
  cardContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});

