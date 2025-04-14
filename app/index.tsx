import { StyleSheet, View } from "react-native";
import EventCard from "@/components/EventCard";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Index() {
  const headerHeight = useHeaderHeight();
  return (
    <View
      style={{ paddingTop: headerHeight + 16, padding: 16, flex: 1, gap: 16 }}
    >
      <EventCard
        image={require("../assets/images/splash-icon.png")}
        name="Sample Event"
        organiser="Pandaal Dev"
        price={19.99}
      />
      <EventCard
        image={require("../assets/images/splash-icon.png")}
        name="Sample Event"
        organiser="Pandaal Dev"
        price={19.99}
      />
      <EventCard
        image={require("../assets/images/splash-icon.png")}
        name="Sample Event"
        organiser="Pandaal Dev"
        price={19.99}
      />
    </>
  );
}

const styles = StyleSheet.create({});
