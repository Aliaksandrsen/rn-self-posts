import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { connect } from 'react-redux'
import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { loadPosts } from '../store/actions'

class MainScreen extends Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { navigation, allPosts } = this.props;
    const openPostHandler = (post) => {
      navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked }) // booked прокидываем сюда (убираем баг)
    }

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(loadPosts())
    // }, [dispatch])

    // const allPosts = useSelector(state => state.post.allPosts)

    return (
      <View style={styles.wrapper}>
        <FlatList
          data={allPosts}
          keyExtractor={post => post.id.toString()}
          renderItem={({ item }) => {
            return <Post post={item} onOpen={openPostHandler} />
          }}
        />
      </View>
    )
  }
}

// опции навигации для этого экрана
MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Мой блог',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo' // просто уникальное значение для item в случае нескольких items
        iconName='ios-camera'
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
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
});


const mapStateToProps = (state) => {
  return {
    allPosts: state.post.allPosts
  }
};

const mapDispatchToProps = {
  loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);