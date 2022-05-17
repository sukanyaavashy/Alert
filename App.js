import React, { useState } from "react";
import { View, StyleSheet, Button, Alert,Platform,Text } from "react-native";


const New =
  Platform.OS

const App = () => {
  
  const createTwoButtonAlert = () =>
    Alert.alert(
      New
    );


  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  value: {
    fontWeight: '600',
    padding: 4,
    marginBottom: 8
  }
});

export default App;