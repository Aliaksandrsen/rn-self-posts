import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import {DATA} from '../data'
import { Post } from '../components/Post'

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.wrapper}>
     <FlatList
      data={DATA}
      keyExtractor = {post => post.id.toString()}
      renderItem = {({item}) => {
        return <Post post={item}/>
      }}
     />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог'
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
