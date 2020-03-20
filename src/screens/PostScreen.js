import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import { DATA } from '../data'
import { THEME } from '../theem'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(post => post.id === postId)

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked })
  // }, [])

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        { text: 'Удалить', style: 'destructive', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },// закрыть по background окно
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button
        title='Delete'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

// если хотим динамич значения PostScreen.navigationOptions долж быть ф-ей
PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')

  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  return {
    headerTitle: `Пост ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take star' // просто уникальное значение для item в случае нескольких items
          iconName={iconName}
          onPress={() => console.log('Press star')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular'
  }
})
