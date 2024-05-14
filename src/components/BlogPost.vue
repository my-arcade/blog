<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    const post = ref(props.post);

    watch(() => post.value.title, (newTitle, oldTitle) => {
      if (newTitle!== oldTitle) {
        // Update the post title
      }
    });

    return { post };
  }
}
</script>
