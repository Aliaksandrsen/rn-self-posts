import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
    </View>
  )
}

// опции навигации для этого экрана
CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Создать пост',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer' // просто уникальное значение для item в случае нескольких items
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
