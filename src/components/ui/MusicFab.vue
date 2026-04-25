<script setup>
import { onUnmounted, ref, computed } from 'vue'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'

const isPlaying = ref(false)
const loadError = ref(false)
/** @type {import('vue').Ref<HTMLAudioElement | null>} */
const audioEl = ref(null)

const show = computed(
  () => siteContent.music?.enabled && siteContent.music?.src,
)

const trackUrl = computed(() =>
  show.value ? usePublicUrl(siteContent.music.src) : '',
)

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}

function onError() {
  loadError.value = true
}

function toggle() {
  const a = audioEl.value
  if (!a || loadError.value) return
  if (a.paused) {
    a.play().catch(() => {
      loadError.value = true
    })
  } else {
    a.pause()
  }
}

onUnmounted(() => {
  audioEl.value?.pause()
})
</script>

<template>
  <div
    v-if="show"
    class="pointer-events-none fixed bottom-8 left-8 z-20 sm:bottom-10 sm:left-10"
  >
    <audio
      ref="audioEl"
      class="sr-only"
      :src="trackUrl"
      loop
      preload="none"
      @play="onPlay"
      @pause="onPause"
      @error="onError"
    />
    <button
      type="button"
      class="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary-soft/95 text-primary shadow-lg shadow-primary/20 transition hover:scale-105 hover:bg-primary hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 dark:border-primary-soft dark:bg-primary-soft/35 dark:text-secondary dark:shadow-[0_12px_36px_rgba(237,77,139,0.2)] dark:hover:bg-primary dark:hover:text-secondary"
      :class="loadError ? 'cursor-not-allowed opacity-50' : ''"
      :title="siteContent.music?.titleHover"
      :aria-pressed="isPlaying"
      :aria-label="isPlaying ? 'Mettre la musique en pause' : 'Lancer la musique'"
      :disabled="loadError"
      @click="toggle"
    >
      <i
        v-if="!isPlaying"
        class="fas fa-music pl-0.5 text-base"
        aria-hidden="true"
      />
      <i v-else class="fas fa-pause text-base" aria-hidden="true" />
    </button>
  </div>
</template>
