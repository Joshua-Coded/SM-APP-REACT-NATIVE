import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './assets/data/posts.json'; 

export default function App() { 
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={(item) => <FeedPost post={item} />}
      
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
})