<template>
  <section class="relative py-12 overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-playfair font-bold text-amber-400 mb-6 tracking-wide">Master the Circle of Fifths</h2>
          <p class="text-lg font-montserrat text-gray-300 mb-8 leading-relaxed">
            The Circle of Fifths is a powerful tool for understanding music theory, chord progressions, and key relationships.
            Our interactive guide makes it easy for guitarists to visualize and apply these concepts to their playing.
          </p>
          <div class="flex space-x-4">
            <a href="#circle-section" class="bg-amber-500 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-amber-400 transition-colors cursor-pointer !rounded-button whitespace-nowrap font-montserrat font-semibold">
              Explore the Circle
            </a>
          </div>
        </div>
        <div class="relative">
          <img
            src="/src/assets/introSection.jpg"
            alt="Guitar with Circle of Fifths"
            class="rounded-xl shadow-lg object-cover w-full h-full object-top"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for this static component
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>