import { Text, TextProps } from "react-native";

export default function ThemedText({ children, ...props }: TextProps) {
  return (
    <Text style={{ fontFamily: "Poppins" }} {...props}>
      {children}
    </Text>
  );
}
