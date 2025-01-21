import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type ProductsProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Products({ selectedCategory, onSelectCategory }: ProductsProps) {
  return (
    <SafeAreaView>
      <SegmentedButtons
        value={selectedCategory}
        onValueChange={onSelectCategory}
        buttons={[
          { label: "Frutas", value: "frutas", icon: "food-apple" },
          { label: "Roupas", value: "roupas", icon: "tshirt-crew" },
          { label: "Limpeza", value: "produtos", icon: "spray-bottle" },
        ]}        
      />
    </SafeAreaView>
  )
}