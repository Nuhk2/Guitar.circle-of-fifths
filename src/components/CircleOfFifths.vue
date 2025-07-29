<template>
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
              <li>{{ selectedChord.name }} Pent-centric</li>
              <li v-if="selectedChord.type === 'major'">{{ selectedChord.name }} Mixolydian</li>
              <li v-if="selectedChord.type === 'minor'">{{ selectedChord.name }} Dorian</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">Common Progressions</h4>
            <p class="text-gray-600 mb-1" v-if="selectedChord.type === 'major'">I - IV - V: {{ selectedChord.progressions.one }}</p>
            <p class chordsData.ts="text-gray-600 mb-1" v-if="selectedChord.type === 'major'">I - vi - IV - V: {{ selectedChord.progressions.two }}</p>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { circleChords, ChordInfo } from '../../chordsData.ts';

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
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>