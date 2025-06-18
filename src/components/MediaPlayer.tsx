import { ScrollView, StyleSheet, View } from 'react-native'
import Video from 'react-native-video';
import React, { Fragment } from 'react'
import { Text } from 'react-native-paper';

export default function MediaPlayer({ videos }: { videos: string[] }) {
  if (!videos || videos.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No videos available</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videos[0] }}
        style={styles.backgroundVideo}
        controls={false}
        paused={false}
        repeat={true}
      />
      {/* <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {videos.map((video, index) => (
          <Fragment key={index}>
            <Video
              source={{ uri: video }}
              style={styles.backgroundVideo}
              controls={false}
              paused={false}
              repeat={true}
            />
          </Fragment>
        ))}
      </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundVideo: {
    borderRadius: 10,
    width: 400,
    height: 200,
    marginHorizontal: 10
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
})
