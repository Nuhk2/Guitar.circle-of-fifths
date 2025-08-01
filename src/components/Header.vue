<template>
  <header :class="['navbar', scrolled ? 'scrolled' : '']">
    <div class="navbar-inner">
      <a href="#hero" class="logo"><i class="fas fa-guitar text-amber-500 text-2xl mr-3"></i>FretFifths</a>

      <nav class="nav-links">
        <ul>
          <li v-for="item in navLinks" :key="item.name">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </nav>

      <a href="#contact" class="contact-btn">
        Contact Me
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  
  { link: '#', name: 'Circle of Fifths' },
  { link: '#', name: 'Applications' },
  
  { link: '#', name: 'News Letter' }
]

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Base navbar styling */
.navbar {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  background: #ffffff;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 50;
  padding: 0.7rem 2rem;
}

.navbar.scrolled {
  background: #ffffffcc;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Inner layout */
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  text-decoration: none;
}

/* Nav links */
.nav-links ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: #333;
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -4px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Contact button */
.contact-btn {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.contact-btn:hover {
  background-color: #0056b3;
}
</style>
