<template>
  <div class="font-mono h-full flex flex-col justify-between">
    <nav role="navigation" class="flex flex-col mb-8">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/post">Posts</NavLink>
      <NavLink to="/project">Projects</NavLink>
    </nav>
    <div class="sandbox">
      <!-- https://nuxtjs.org/tutorials/going-dark-with-nuxtjs-color-mode/ -->
      <div class="color-buttons">
        <p class="text-sm pb-2 text-gray-400">theme</p>
        <button
        class="block pb-2"
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
        :class="{ 'active font-extrabold': $colorMode.preference === color }"
      >
      {{color}}
      </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: ['light', 'dark', 'system']
      }
    }
  }
</script>
