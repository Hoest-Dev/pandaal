import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import constants from "@/assets/constants.json";

type EventCardProps = {
  name: string;
  price: number;
  organiser: string;
  image: ImageSourcePropType | undefined;
};

export default function EventCard(props: EventCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.organiser}>{props.organiser}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    fontFamily: "Poppins",
    width: 120,
    height: 160,
    boxShadow: "0px 8px 12px #0001",
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
  organiser: {
    opacity: 0.75,
    fontFamily: "Poppins",
  },
  price: {
    fontFamily: "Poppins",
    color: constants.accentColor,
  },
});
