import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Feature from './Feature';

function DetailsScreen({ navigation, route }) {
  const { item } = route.params

  const keys = Object.keys(item).filter( key => key !== 'breed')

  const average = (Object.keys(item).filter(key => key !== "breed").reduce((acc, key) => {
    return acc + item[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={keys}
        renderItem={(key) => {
          if (key.item === "breed")
            return (
              <Text style={styles.label}>{average}</Text>
            )
          else {
            return <Feature name={key.item} value={item[key.item]}/>
          }
        }}
        keyExtractor = {(item) => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: "mistyrose"
  },
  label : {
    fontSize: 28,
    color: 'maroon',
    fontWeight: 'bold'
  },
  list: {
    width: "100%",
    padding: 5
  }

})

export default DetailsScreen