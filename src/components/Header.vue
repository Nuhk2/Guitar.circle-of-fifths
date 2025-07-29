<template>
  <header class="bg-gray-800 shadow-lg border-b border-gray-700">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <i class="fas fa-guitar text-amber-500 text-2xl mr-3"></i>
        <h1 class="text-2xl font-bold text-white font-playfair">FretFifths</h1>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#" class="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer font-montserrat">Home</a></li>
          <li><a href="#" class="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer font-montserrat">Theory</a></li>
          <li><a href="#" class="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer font-montserrat">Lessons</a></li>
          <li><a href="#" class="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer font-montserrat">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
// No script needed for this static component
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif Facet;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>