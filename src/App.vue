<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <Header />
    <HeroSection />
    <IntroductionSection />
    <CircleOfFifths />
    <ApplicationSection />
    <TestimonialsSection />
    <CallToAction />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import IntroductionSection from './components/IntroductionSection.vue';
import CircleOfFifths from './components/CircleOfFifths.vue';
import ApplicationSection from './components/ApplicationSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import CallToAction from './components/CallToAction.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Custom Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>