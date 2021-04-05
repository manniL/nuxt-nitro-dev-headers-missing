<template>
  <div class="container">
    {{ headers }} 
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    return {
      headers: ctx.app.$headers
    } 
  } 
} 
</script>