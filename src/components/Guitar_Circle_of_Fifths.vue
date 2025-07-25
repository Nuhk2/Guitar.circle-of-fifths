<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Header -->
    <header class="bg-gray-800 shadow-lg border-b border-gray-700">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <i class="fas fa-guitar text-amber-500 text-2xl mr-3"></i>
          <h1 class="text-2xl font-bold text-white font-playfair">Circle of Fifths for Guitar</h1>
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
    <!-- Hero Section -->
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
              <!-- <a href="#" class="bg-transparent text-amber-400 border-2 border-amber-400 px-6 py-3 rounded-lg shadow-sm hover:bg-amber-400/10 transition-colors cursor-pointer !rounded-button whitespace-nowrap font-montserrat font-semibold">
                Watch Tutorial
              </a> -->
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
    <!-- Introduction Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Understanding the Circle of Fifths</h2>
          <p class="text-lg text-gray-600">
            The Circle of Fifths is a visual representation of the relationships between the 12 tones of the chromatic scale,
            their corresponding key signatures, and the associated major and minor keys. It's an essential tool for any guitarist
            looking to deepen their understanding of music theory and chord relationships.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-music text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-center mb-3">Key Relationships</h3>
            <p class="text-gray-600 text-center">
              Understand how different keys relate to each other and how to smoothly transition between them in your playing.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-guitar text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-center mb-3">Chord Construction</h3>
            <p class="text-gray-600 text-center">
              Learn how chords are built and how they function within different keys to create compelling progressions.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-brain text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-center mb-3">Theory Application</h3>
            <p class="text-gray-600 text-center">
              Apply theoretical concepts directly to your guitar playing with practical exercises and examples.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Main Circle of Fifths Section -->
    <section id="circle-section" class="py-8 bg-gradient-to-b from-slate-100 to-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Interactive Circle of Fifths</h2>
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <!-- Theory Panel (Left) -->
          <div class="w-full lg:w-1/4 bg-white rounded-xl shadow-md p-6" v-if="selectedChord">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Theory Insights</h3>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-700 mb-2">Key Information</h4>
              <p class="text-gray-600 mb-2">
                <span class="font-medium">Key Signature:</span> {{ selectedChord.keySignature }}
              </p>
              <p class="text-gray-600">
                <span class="font-medium">Relative {{ selectedChord.type === 'major' ? 'Minor' : 'Major' }}:</span>
                {{ selectedChord.relative }}
              </p>
            </div>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-700 mb-2">Related Scales</h4>
              <ul class="list-disc list-inside text-gray-600">
                <li>{{ selectedChord.name }} {{ selectedChord.type }}</li>
                <li>{{ selectedChord.name }} Pentatonic</li>
                <li v-if="selectedChord.type === 'major'">{{ selectedChord.name }} Mixolydian</li>
                <li v-if="selectedChord.type === 'minor'">{{ selectedChord.name }} Dorian</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-700 mb-2">Common Progressions</h4>
              <p class="text-gray-600 mb-1" v-if="selectedChord.type === 'major'">I - IV - V: {{ selectedChord.progressions.one }}</p>
              <p class="text-gray-600 mb-1" v-if="selectedChord.type === 'major'">I - vi - IV - V: {{ selectedChord.progressions.two }}</p>
              <p class="text-gray-600" v-if="selectedChord.type === 'minor'">i - iv - V: {{ selectedChord.progressions.one }}</p>
              <p class="text-gray-600" v-if="selectedChord.type === 'minor'">i - VI - VII: {{ selectedChord.progressions.two }}</p>
            </div>
          </div>
          <!-- Circle of Fifths (Center) -->
  <div class="w-full lg:w-2/4 flex justify-center">
    <div class="relative w-[450px] h-[450px] mx-auto max-w-full">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-4 border-gray-700 bg-gray-800 shadow-2xl"></div>
      <!-- Outer Ring (Major Keys) -->
      <div v-for="(chord, index) in circleChords" :key="`major-${index}`"
        class="absolute left-1/2 top-1/2 w-20 h-20 rounded-full bg-gray-600 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors"
        :class="{ 'bg-amber-500 ring-4 ring-amber-300 shadow-xl scale-110': selectedChord && selectedChord.name === chord.major.name && selectedChord.type === 'major' }"
        :style="`transform: translate(-50%, -50%) rotate(${index * 30}deg) translate(210px) rotate(-${index * 30}deg); z-index: 10;`"
        @click="selectChord(chord.major)">
        <span class="text-lg font-playfair font-semibold text-white">{{ chord.major.name }}</span>
      </div>
      <!-- Middle Ring (Minor Keys) -->
  <div v-for="(chord, index) in circleChords" :key="`minor-${index}`"
    class="absolute left-1/2 top-1/2 w-14 h-14 rounded-full bg-gray-500 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors"
    :class="{ 'bg-amber-600 ring-4 ring-amber-400 shadow-xl scale-110': selectedChord && selectedChord.name === chord.minor.name && selectedChord.type === 'minor' }"
    :style="`transform: translate(-50%, -50%) rotate(${index * 30}deg) translate(127.5px) rotate(-${index * 30}deg); z-index: 5;`"
    @click="selectChord(chord.minor)">
    <span class="text-sm font-playfair font-medium text-white">{{ chord.minor.name }}m</span>
  </div>
      <!-- Inner Ring (Sharps/Flats) -->
      <div class="absolute left-1/2 top-1/2 w-[165px] h-[165px] rounded-full bg-gray-900 border-2 border-amber-600/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
        <div class="text-center">
          <p class="text-xl font-playfair font-semibold text-amber-500 mb-3">Circle of Fifths</p>
          <p class="text-xs font-montserrat text-gray-400">Click any chord to see details</p>
        </div>
      </div>
    </div>
  </div>
          <!-- Chord Display Panel (Right) -->
          <div class="w-full lg:w-1/4 bg-white rounded-xl shadow-md p-6" v-if="selectedChord">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-indigo-600">{{ selectedChord.name }} {{ selectedChord.type === 'minor' ? 'Minor' : 'Major' }}</h3>
              <p class="text-gray-500">{{ selectedChord.type === 'major' ? 'Major Chord' : 'Minor Chord' }}</p>
            </div>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-700 mb-3">Finger Positions</h4>
              <div class="bg-slate-50 p-4 rounded-lg">
                <div class="grid grid-cols-6 gap-1">
                  <div v-for="(string, index) in [6,5,4,3,2,1]" :key="index" class="text-center">
                    <div class="text-xs text-gray-500 mb-1">String {{string}}</div>
                    <div class="bg-gray-200 rounded-sm py-1 text-sm">
                      {{ getFingerPosition(selectedChord, string) }}
                    </div>
                  </div>
                </div>
                <div class="mt-4 text-sm text-gray-600">
                  <p class="mb-1">X = Don't play</p>
                  <p class="mb-1">0 = Open string</p>
                  <p>1-4 = Finger position on fret</p>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-700 mb-2">Notes in Chord</h4>
              <div class="flex space-x-2">
                <span v-for="(note, i) in selectedChord.notes" :key="i"
                  class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  {{ note }}
                </span>
              </div>
            </div>
            <button class="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              <i class="fas fa-play mr-2"></i> Play Chord (Coming soon!)
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Application Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Applying the Circle of Fifths</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Practical Applications</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-700">Songwriting</h4>
                  <p class="text-gray-600">Use the circle to find chords that work well together and create compelling progressions for your compositions.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-700">Improvisation</h4>
                  <p class="text-gray-600">Quickly identify which scales will work over a given chord progression to create melodic solos.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-700">Transposition</h4>
                  <p class="text-gray-600">Easily transpose songs to different keys to match your vocal range or playing style.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-700">Ear Training</h4>
                  <p class="text-gray-600">Develop your ability to recognize chord progressions and key changes in music you hear.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/src/assets/applyingTheory.jpg"
              alt="Guitarist applying circle of fifths"
              class="rounded-xl shadow-lg w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonials Section -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">What Guitarists Are Saying</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-user text-indigo-600"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Michael Johnson</h3>
                <p class="text-sm text-gray-500">Intermediate Guitarist</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "This interactive circle of fifths has completely transformed my understanding of music theory. I can now see the relationships between chords and keys in a way that makes sense!"
            </p>
            <div class="mt-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-user text-indigo-600"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Sarah Williams</h3>
                <p class="text-sm text-gray-500">Songwriting Enthusiast</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "As a songwriter, the circle of fifths has become my secret weapon. Finding chord progressions that sound great together is so much easier now. Highly recommended!"
            </p>
            <div class="mt-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-user text-indigo-600"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">David Chen</h3>
                <p class="text-sm text-gray-500">Guitar Teacher</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "I've been teaching guitar for over 15 years, and this is by far the best visualization of the circle of fifths I've seen. I recommend it to all my students now."
            </p>
            <div class="mt-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call to Action -->
    <section class="py-16 bg-indigo-600">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Master the Circle of Fifths?</h2>
        <p class="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Sign up for our newsletter to receive free lessons, chord charts, and updates on new features.
        </p>
        <div class="max-w-md mx-auto">
          <div class="flex">
            <input type="email" placeholder="Your email address" class="flex-grow px-4 py-3 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button class="bg-indigo-800 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-900 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p class="text-indigo-200 text-sm mt-3">We respect your privacy and will never share your information.</p>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Circle of Fifths</h3>
            <p class="text-gray-400">
              The ultimate resource for guitarists to master music theory and chord relationships.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Lessons</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Resources</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Chord Library</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Scale Finder</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Progression Tool</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <div class="flex space-x-4 mb-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer"><i class="fab fa-youtube"></i></a>
            </div>
            <p class="text-gray-400">
              <i class="far fa-envelope mr-2"></i> contact@circleoffifths.com
            </p>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">© 2025 Circle of Fifths for Guitar. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" class="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface ChordInfo {
  name: string;
  type: 'major' | 'minor';
  keySignature: string;
  relative: string;
  notes: string[];
  progressions: {
    one: string;
    two: string;
  };
  fingerPositions?: {
    [key: number]: string | number;
  };
}

// Define the circle of fifths data
const circleChords = [
  {
    major: {
      name: 'C',
      type: 'major' as const,
      keySignature: 'No sharps or flats',
      relative: 'A minor',
      notes: ['C', 'E', 'G'],
      progressions: {
        one: 'C - F - G',
        two: 'C - Am - F - G'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 3,    // A string
        4: 2,    // D string
        3: 0,    // G string
        2: 1,    // B string
        1: 0     // High E string
      }
    },
    minor: {
      name: 'A',
      type: 'minor' as const,
      keySignature: 'No sharps or flats',
      relative: 'C major',
      notes: ['A', 'C', 'E'],
      progressions: {
        one: 'Am - Dm - E',
        two: 'Am - F - G'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 0,    // A string
        4: 2,    // D string
        3: 2,    // G string
        2: 1,    // B string
        1: 0     // High E string
      }
    }
  },
  {
    major: {
      name: 'G',
      type: 'major' as const,
      keySignature: '1 sharp (F♯)',
      relative: 'E minor',
      notes: ['G', 'B', 'D'],
      progressions: {
        one: 'G - C - D',
        two: 'G - Em - C - D'
      },
      fingerPositions: {
        6: 3,    // Low E string
        5: 2,    // A string
        4: 0,    // D string
        3: 0,    // G string
        2: 0,    // B string
        1: 3     // High E string
      }
    },
    minor: {
      name: 'E',
      type: 'minor' as const,
      keySignature: '1 sharp (F♯)',
      relative: 'G major',
      notes: ['E', 'G', 'B'],
      progressions: {
        one: 'Em - Am - B',
        two: 'Em - C - D'
      },
      fingerPositions: {
        6: 0,    // Low E string
        5: 2,    // A string
        4: 2,    // D string
        3: 0,    // G string
        2: 0,    // B string
        1: 0     // High E string
      }
    }
  },
  {
    major: {
      name: 'D',
      type: 'major' as const,
      keySignature: '2 sharps (F♯, C♯)',
      relative: 'B minor',
      notes: ['D', 'F♯', 'A'],
      progressions: {
        one: 'D - G - A',
        two: 'D - Bm - G - A'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 'X',  // A string
        4: 0,    // D string
        3: 2,    // G string
        2: 3,    // B string
        1: 2     // High E string
      }
    },
    minor: {
      name: 'B',
      type: 'minor' as const,
      keySignature: '2 sharps (F♯, C♯)',
      relative: 'D major',
      notes: ['B', 'D', 'F♯'],
      progressions: {
        one: 'Bm - Em - F♯',
        two: 'Bm - G - A'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 2,    // A string
        4: 4,    // D string
        3: 4,    // G string
        2: 3,    // B string
        1: 2     // High E string
      }
    }
  },
  {
    major: {
      name: 'A',
      type: 'major' as const,
      keySignature: '3 sharps (F♯, C♯, G♯)',
      relative: 'F♯ minor',
      notes: ['A', 'C♯', 'E'],
      progressions: {
        one: 'A - D - E',
        two: 'A - F♯m - D - E'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 0,    // A string
        4: 2,    // D string
        3: 2,    // G string
        2: 2,    // B string
        1: 0     // High E string
      }
    },
    minor: {
      name: 'F♯',
      type: 'minor' as const,
      keySignature: '3 sharps (F♯, C♯, G♯)',
      relative: 'A major',
      notes: ['F♯', 'A', 'C♯'],
      progressions: {
        one: 'F♯m - Bm - C♯',
        two: 'F♯m - D - E'
      },
      fingerPositions: {
        6: 2,    // Low E string
        5: 4,    // A string
        4: 4,    // D string
        3: 2,    // G string
        2: 2,    // B string
        1: 2     // High E string
      }
    }
  },
  {
    major: {
      name: 'E',
      type: 'major' as const,
      keySignature: '4 sharps (F♯, C♯, G♯, D♯)',
      relative: 'C♯ minor',
      notes: ['E', 'G♯', 'B'],
      progressions: {
        one: 'E - A - B',
        two: 'E - C♯m - A - B'
      },
      fingerPositions: {
        6: 0,    // Low E string
        5: 2,    // A string
        4: 2,    // D string
        3: 1,    // G string
        2: 0,    // B string
        1: 0     // High E string
      }
    },
    minor: {
      name: 'C♯',
      type: 'minor' as const,
      keySignature: '4 sharps (F♯, C♯, G♯, D♯)',
      relative: 'E major',
      notes: ['C♯', 'E', 'G♯'],
      progressions: {
        one: 'C♯m - F♯m - G♯',
        two: 'C♯m - A - B'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 4,    // A string
        4: 6,    // D string
        3: 6,    // G string
        2: 5,    // B string
        1: 4     // High E string
      }
    }
  },
  {
    major: {
      name: 'B',
      type: 'major' as const,
      keySignature: '5 sharps (F♯, C♯, G♯, D♯, A♯)',
      relative: 'G♯ minor',
      notes: ['B', 'D♯', 'F♯'],
      progressions: {
        one: 'B - E - F♯',
        two: 'B - G♯m - E - F♯'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 2,    // A string
        4: 4,    // D string
        3: 4,    // G string
        2: 4,    // B string
        1: 2     // High E string
      }
    },
    minor: {
      name: 'G♯',
      type: 'minor' as const,
      keySignature: '5 sharps (F♯, C♯, G♯, D♯, A♯)',
      relative: 'B major',
      notes: ['G♯', 'B', 'D♯'],
      progressions: {
        one: 'G♯m - C♯m - D♯',
        two: 'G♯m - E - F♯'
      },
      fingerPositions: {
        6: 4,    // Low E string
        5: 6,    // A string
        4: 6,    // D string
        3: 4,    // G string
        2: 4,    // B string
        1: 4     // High E string
      }
    }
  },
  {
    major: {
      name: 'F♯',
      type: 'major' as const,
      keySignature: '6 sharps (F♯, C♯, G♯, D♯, A♯, E♯)',
      relative: 'D♯ minor',
      notes: ['F♯', 'A♯', 'C♯'],
      progressions: {
        one: 'F♯ - B - C♯',
        two: 'F♯ - D♯m - B - C♯'
      },
      fingerPositions: {
        6: 2,    // Low E string
        5: 4,    // A string
        4: 4,    // D string
        3: 3,    // G string
        2: 2,    // B string
        1: 2     // High E string
      }
    },
    minor: {
      name: 'D♯',
      type: 'minor' as const,
      keySignature: '6 sharps (F♯, C♯, G♯, D♯, A♯, E♯)',
      relative: 'F♯ major',
      notes: ['D♯', 'F♯', 'A♯'],
      progressions: {
        one: 'D♯m - G♯m - A♯',
        two: 'D♯m - B - C♯'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 6,    // A string
        4: 8,    // D string
        3: 8,    // G string
        2: 7,    // B string
        1: 6     // High E string
      }
    }
  },
  {
    major: {
      name: 'C♯',
      type: 'major' as const,
      keySignature: '7 sharps (F♯, C♯, G♯, D♯, A♯, E♯, B♯)',
      relative: 'A♯ minor',
      notes: ['C♯', 'E♯', 'G♯'],
      progressions: {
        one: 'C♯ - F♯ - G♯',
        two: 'C♯ - A♯m - F♯ - G♯'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 4,    // A string
        4: 6,    // D string
        3: 6,    // G string
        2: 6,    // B string
        1: 4     // High E string
      }
    },
    minor: {
      name: 'A♯',
      type: 'minor' as const,
      keySignature: '7 sharps (F♯, C♯, G♯, D♯, A♯, E♯, B♯)',
      relative: 'C♯ major',
      notes: ['A♯', 'C♯', 'E♯'],
      progressions: {
        one: 'A♯m - D♯m - E♯',
        two: 'A♯m - F♯ - G♯'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 1,    // A string
        4: 3,    // D string
        3: 3,    // G string
        2: 2,    // B string
        1: 1     // High E string
      }
    }
  },
  {
    major: {
      name: 'F',
      type: 'major' as const,
      keySignature: '1 flat (B♭)',
      relative: 'D minor',
      notes: ['F', 'A', 'C'],
      progressions: {
        one: 'F - B♭ - C',
        two: 'F - Dm - B♭ - C'
      },
      fingerPositions: {
        6: 1,    // Low E string
        5: 3,    // A string
        4: 3,    // D string
        3: 2,    // G string
        2: 1,    // B string
        1: 1     // High E string
      }
    },
    minor: {
      name: 'D',
      type: 'minor' as const,
      keySignature: '1 flat (B♭)',
      relative: 'F major',
      notes: ['D', 'F', 'A'],
      progressions: {
        one: 'Dm - Gm - A',
        two: 'Dm - B♭ - C'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 'X',  // A string
        4: 0,    // D string
        3: 2,    // G string
        2: 3,    // B string
        1: 1     // High E string
      }
    }
  },
  {
    major: {
      name: 'B♭',
      type: 'major' as const,
      keySignature: '2 flats (B♭, E♭)',
      relative: 'G minor',
      notes: ['B♭', 'D', 'F'],
      progressions: {
        one: 'B♭ - E♭ - F',
        two: 'B♭ - Gm - E♭ - F'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 1,    // A string
        4: 3,    // D string
        3: 3,    // G string
        2: 3,    // B string
        1: 1     // High E string
      }
    },
    minor: {
      name: 'G',
      type: 'minor' as const,
      keySignature: '2 flats (B♭, E♭)',
      relative: 'B♭ major',
      notes: ['G', 'B♭', 'D'],
      progressions: {
        one: 'Gm - Cm - D',
        two: 'Gm - E♭ - F'
      },
      fingerPositions: {
        6: 3,    // Low E string
        5: 5,    // A string
        4: 5,    // D string
        3: 3,    // G string
        2: 3,    // B string
        1: 3     // High E string
      }
    }
  },
  {
    major: {
      name: 'E♭',
      type: 'major' as const,
      keySignature: '3 flats (B♭, E♭, A♭)',
      relative: 'C minor',
      notes: ['E♭', 'G', 'B♭'],
      progressions: {
        one: 'E♭ - A♭ - B♭',
        two: 'E♭ - Cm - A♭ - B♭'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 6,    // A string
        4: 8,    // D string
        3: 8,    // G string
        2: 8,    // B string
        1: 6     // High E string
      }
    },
    minor: {
      name: 'C',
      type: 'minor' as const,
      keySignature: '3 flats (B♭, E♭, A♭)',
      relative: 'E♭ major',
      notes: ['C', 'E♭', 'G'],
      progressions: {
        one: 'Cm - Fm - G',
        two: 'Cm - A♭ - B♭'
      },
      fingerPositions: {
        6: 'X',  // Low E string
        5: 3,    // A string
        4: 5,    // D string
        3: 5,    // G string
        2: 4,    // B string
        1: 3     // High E string
      }
    }
  },
  {
    major: {
      name: 'A♭',
      type: 'major' as const,
      keySignature: '4 flats (B♭, E♭, A♭, D♭)',
      relative: 'F minor',
      notes: ['A♭', 'C', 'E♭'],
      progressions: {
        one: 'A♭ - D♭ - E♭',
        two: 'A♭ - Fm - D♭ - E♭'
      },
      fingerPositions: {
        6: 4,    // Low E string
        5: 6,    // A string
        4: 6,    // D string
        3: 5,    // G string
        2: 4,    // B string
        1: 4     // High E string
      }
    },
    minor: {
      name: 'F',
      type: 'minor' as const,
      keySignature: '4 flats (B♭, E♭, A♭, D♭)',
      relative: 'A♭ major',
      notes: ['F', 'A♭', 'C'],
      progressions: {
        one: 'Fm - B♭m - C',
        two: 'Fm - D♭ - E♭'
      },
      fingerPositions: {
        6: 1,    // Low E string
        5: 3,    // A string
        4: 3,    // D string
        3: 1,    // G string
        2: 1,    // B string
        1: 1     // High E string
      }
    }
  }
];

// Default selected chord
const selectedChord = ref<ChordInfo>(circleChords[0].major);

// Function to select a chord
const selectChord = (chord: ChordInfo) => {
  selectedChord.value = chord;
};

const getFingerPosition = (chord: ChordInfo, string: number): string | number => {
  if (!chord.fingerPositions) return 'X';
  return chord.fingerPositions[string] || 'X';
};
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

.fretboard-diagram {
  position: relative;
  width: 100%;
  padding-top: 66.67%; /* 3:2 aspect ratio */
  overflow: hidden;
}

.fretboard-diagram img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Remove number input arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
