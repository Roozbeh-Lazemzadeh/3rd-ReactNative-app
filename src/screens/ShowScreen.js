import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { state } = useContext(Context);
  //edit icon
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <EvilIcons
            style={styles.EditIcon}
            name="pencil"
            onPress={() => {
              navigation.navigate("Edit", { id: id });
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EditIcon: {
    fontSize: 35,
  },
});

export default ShowScreen;
