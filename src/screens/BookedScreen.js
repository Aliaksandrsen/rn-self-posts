import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { connect } from 'react-redux'
import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { loadPosts } from '../store/actions';

class BookedScreen extends Component {
  render() {
    const { navigation } = this.props;
    const openPostHandler = (post) => {
      navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked }) // booked прокидываем сюда (убираем баг)
    }
    const { bookedPosts } = this.props;
    
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={bookedPosts}
          keyExtractor={post => post.id.toString()}
          renderItem={({ item }) => {
            return <Post post={item} onOpen={openPostHandler} />
          }}
        />
      </View>
    )
  }
};

// опции навигации для этого экрана
BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранное',

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
  wrapper: {
    padding: 10
  }
})


const mapStateToProps = (state) => {
  return {
    bookedPosts: state.post.bookedPosts,
  }
};

// const mapDispatchToProps = {
//   loadPosts
// };

export default connect(mapStateToProps, null)(BookedScreen);