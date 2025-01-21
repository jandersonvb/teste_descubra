import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

type ItemCounterProps = {
  data: Record<string, { id: string; name: string; selected: boolean }[]>;
};

export function ItemCounter({ data }: ItemCounterProps) {
  // Obtém o tema atual do aplicativo
  const theme = useTheme();

  // Calcula o total de itens selecionados
  const totalSelected = Object.keys(data).reduce((acc, key) => {
    return acc + data[key].filter((item) => item.selected).length;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.colors.primary }]}>
        Total de Itens Selecionados:
      </Text>
      <Text style={[styles.total, { color: theme.colors.primary }]}>
        {totalSelected}
      </Text>
      <Text style={[styles.text, { color: theme.colors.primary }]}>itens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  total: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    marginHorizontal: 4,
  },
});
