import React, { useState } from "react";
import {
  TextInput as DefaultTextInput,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Icon, useTheme } from "react-native-paper";

export function TextInput(props: TextInputProps) {
  const { style, secureTextEntry, ...otherProps } = props;
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const containerStyle: StyleProp<ViewStyle> = {
    position: "relative",
    height: 50,
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 28,
    backgroundColor: theme.colors.background,
    boxShadow: "inset 0px 1px 1px rgba(0, 0, 0, 0.25)",
  };

  const defaultStyle: StyleProp<TextStyle> = {
    height: 50,
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "LeagueSpartanRegular",
  };

  return (
    <View style={[containerStyle]}>
      <DefaultTextInput
        style={[defaultStyle, style, { color: theme.colors.onBackground }]}
        secureTextEntry={secureTextEntry ? !showPassword : false}
        placeholderTextColor="#45454599"
        {...otherProps}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{ position: "absolute", right: 12, top: 12, width: 24, height: 24 }}
          onPressIn={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Icon size={24} source="eye-outline" color={theme.colors.outline} />
          ) : (
            <Icon size={24} source={"eye-off-outline"} color={theme.colors.outline} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
