<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { preference, setPreference } = useTheme()

function toggleTheme() {
  setPreference(preference.value === 'light' ? 'dark' : 'light')
}

const iconClass = computed(() =>
  preference.value === 'light' ? 'fas fa-sun' : 'fas fa-moon',
)

const modeLabel = computed(() => (preference.value === 'light' ? 'Clair' : 'Sombre'))

const buttonTitle = computed(() => {
  const next = preference.value === 'light' ? 'sombre' : 'clair'
  return `Thème ${modeLabel.value.toLowerCase()}. Clic : passer au thème ${next}.`
})
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-secondary/75 text-lg text-primary shadow-sm shadow-primary/10 backdrop-blur-sm transition hover:border-primary/55 hover:bg-secondary hover:shadow-md dark:border-primary-soft/50 dark:bg-primary-soft/25 dark:text-secondary dark:hover:border-accent/50 dark:hover:bg-primary/30"
    :title="buttonTitle"
    :aria-label="`Thème : ${modeLabel}. Appuyer pour basculer entre clair et sombre.`"
    @click="toggleTheme"
  >
    <i :class="iconClass" aria-hidden="true" />
  </button>
</template>
