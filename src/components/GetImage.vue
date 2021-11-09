<template>
  <div class="home-card p-5 bg-white rounded elevation-3" v-if="!apod">
    <img
      src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
      alt="CodeWorks Logo"
      class="rounded-circle img"
    />
  </div>
  <div class="home-card p-5 bg-white elevation-3" v-else-if="apod">
    <h1>{{ apod.title }}</h1>
    <div v-if="apod.media_type == 'image'">
      <img :src="apod.hdurl" alt="CodeWorks Logo" height="400" width="500" />
    </div>
    <div v-else-if="apod.media_type == 'video'">
      <iframe height="400" width="500" :src="apod.url"> </iframe>
    </div>
    <h5>{{ apod.date }}</h5>
  </div>
  <div>
    <h1
      class="my-5 bg-dark text-white p-3 rounded text-center selectable"
      @click="getImage()"
    >
      See Picture
    </h1>

    <label for="start">Picture date: </label>
    <input
      v-model="date"
      type="date"
      id="start"
      name="trip-start"
      min="2021-01-01"
      max="2021-12-31"
    />
  </div>
</template>

<script>
import { imagesService } from "../services/ImagesService";
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    const date = ref("");
    return {
      apod: computed(() => AppState.apod),
      date,
      async getImage() {
        try {
          await imagesService.getImage(date.value);
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 700px;

    > img {
      height: 200px;
      max-width: 300px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
