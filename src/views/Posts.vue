<template>
  <div class="posts-container">
    <div class="align-right"><button type="button" class="button" @click="showModal">Add</button></div>
    <table class="table">
      <thead>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(post, i) in allPosts" :key="post.id">
        <td>{{ i + 1 }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
      </tr>
      </tbody>
    </table>

    <Modal v-if="isShowModal" @close="closeModal">
      <template v-slot:header>
        <h3>Add new post</h3>
      </template>
      <template v-slot:body>
        <div class="input"><input type="text" placeholder="Title" v-model="title" class="full-w"></div>
        <div class="input"><input type="text" placeholder="Description" v-model="description" class="full-w"></div>
      </template>
      <template v-slot:footer>
          <button class="button button--red" @click="closeModal">Cancel</button>
          <button class="button button--green" @click="createPost">Submit</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Modal from '@/components/Modal.vue';
import {IPost} from "@/interfaces/IPost";
import {ref, onMounted, computed} from 'vue';
import {usePostStore} from "@/store/post";
const postStore = usePostStore();

const isShowModal = ref<boolean>(false);
const title = ref<string>('');
const description = ref<string>('');

onMounted(() => {
  postStore.fetchPosts();
});

const allPosts = computed(() => postStore.allPosts);

const showModal = () => {
  isShowModal.value = true;
}

const closeModal = () => {
  isShowModal.value = false;
}

const createPost = () => {
      const post: IPost = {
          id: Math.floor(Math.random() * 10000),
          title: title.value,
          description: description.value,
      };
      postStore.createPost(post).then(() => {
        postStore.fetchPosts();
        closeModal();
      }).catch((err: string) => {
        console.log(err);
      }) ;
}
</script>

<style lang="scss">
.posts-container {
  margin: 0 25px;
}
</style>
