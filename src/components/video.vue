<template>
  <div>
    <vue-core-video-player
      ref="player"
      :src="currentVideo"
      @ended="playNext"
      @loadeddata="play"
    ></vue-core-video-player>
  </div>
</template>

<script>
const video = require('../assets/demo.mp4');
const video2 = require('../assets/demo2.mp4');
const video3 = require('../assets/demo3.mp4');

const videoArr = [video, video2, video3];

export default {
  name: 'vueVideo',
  data: () => ({
    demoVideos: videoArr,
    currentVideo: videoArr[0],
  }),
  methods: {
    play() {
      this.$refs.player.muted = true;
      this.$refs.player.play();
    },
    playNext() {
      let index = this.demoVideos.findIndex(e => this.currentVideo === e);
      if (index === this.demoVideos.length - 1) {
        const [nextVideo] = this.demoVideos;
        this.currentVideo = nextVideo;
      } else {
        index += 1;
        const nextVideo = this.demoVideos.find(
          e => e === this.demoVideos[index],
        );
        this.currentVideo = nextVideo;
      }
    },
  },
  mounted() {
    console.log(this.$refs.player);
  },
};
</script>

<style scoped></style>
