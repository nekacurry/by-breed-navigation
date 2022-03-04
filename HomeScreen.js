import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { cats, dogs } from "./breeds"
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Touch from './Touch';

function HomeScreen({ navigation }) {
  const [breeds, setBreeds] = useState(cats)
  return (
    <View style={styles.view}>
      <View style={styles.buttons}>
        <Button
          onPress={() => setBreeds(dogs)}
          title='Dogs'
          color={"black"}
        />
        <Button
          onPress={() => setBreeds(cats)}
          title='Cats'
          color={"black"}
        />
      </View>
      <FlatList style={styles.list}
        data = {breeds}
        renderItem={({item, index}) => {

          return (
            <Touch 
              title={item.breed}
              showDetails={() => navigation.navigate("Details", {item})}
            />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mistyrose"
  },
  list: {
    flex: 1,
    width: "100%"
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    width: "100%",

  }
})