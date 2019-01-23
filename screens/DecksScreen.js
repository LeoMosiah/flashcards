import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export const DecksScreen = () =>  (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          Header
        </Text>
        <Ionicons
          name="md-add"
          color="black"
          size={30}
        />
      </View>
      <View style={styles.content}>
        <Text>
          Content
        </Text>
      </View>
      <View style={styles.footer}>
        <Text>
          Footer
        </Text>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  container:{
    display: "flex",
    alignItems: "center"
  },
  header:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  content:{

  },
  footer:{

  }
});
