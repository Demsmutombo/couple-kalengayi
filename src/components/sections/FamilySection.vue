<script setup>
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
</script>

<template>
  <section id="family" class="bg-page py-16 dark:bg-night lg:py-20">
    <div class="mx-auto max-w-7xl px-4 pt-8 pb-6 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.family.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-secondary md:text-5xl">
          {{ siteContent.family.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-primary" aria-hidden="true" />
      </div>

      <div
        v-if="siteContent.family.parentsGroom || siteContent.family.parentsBride"
        class="mb-12 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10"
      >
        <div
          v-if="siteContent.family.parentsGroom"
          class="rounded border border-primary/25 bg-secondary/50 p-6 text-center dark:border-primary/30 dark:bg-night-elevated/50"
        >
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {{ siteContent.family.parentsGroom.label }}
          </p>
          <p class="text-base font-medium text-brand-dark dark:text-secondary">
            {{ siteContent.family.parentsGroom.names }}
          </p>
        </div>
        <div
          v-if="siteContent.family.parentsBride"
          class="rounded border border-primary/25 bg-secondary/50 p-6 text-center dark:border-primary/30 dark:bg-night-elevated/50"
        >
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {{ siteContent.family.parentsBride.label }}
          </p>
          <p class="text-base font-medium text-brand-dark dark:text-secondary">
            {{ siteContent.family.parentsBride.names }}
          </p>
        </div>
      </div>

      <div
        v-if="siteContent.family.friendsKicker || siteContent.family.friendsTitle"
        class="section-title mb-8"
      >
        <p
          v-if="siteContent.family.friendsKicker"
          class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {{ siteContent.family.friendsKicker }}
        </p>
        <h3
          v-if="siteContent.family.friendsTitle"
          class="font-secondary text-2xl text-brand-dark dark:text-secondary md:text-3xl"
        >
          {{ siteContent.family.friendsTitle }}
        </h3>
      </div>

      <!-- Témoins : plusieurs cartes ou une seule -->
      <div v-if="siteContent.family.witnessesList?.length" class="mb-10">
        <h4
          v-if="siteContent.family.witnesses?.sectionTitle"
          class="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.witnesses.sectionTitle }}
        </h4>
        <div
          class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <article
            v-for="(w, i) in siteContent.family.witnessesList"
            :key="`witness-${i}-${w.title}`"
            class="overflow-hidden shadow-sm dark:shadow-[0_12px_36px_rgba(10,7,8,0.42)]"
          >
            <div class="relative mb-0">
              <img
                :src="usePublicUrl(`img/${w.image}`)"
                :alt="w.title"
                class="h-64 w-full object-cover md:h-72"
                loading="lazy"
              />
              <div class="bg-secondary p-5 text-center dark:bg-night-elevated/80">
                <h4 class="mb-1 text-base font-semibold text-brand-dark dark:text-secondary">
                  {{ w.title }}
                </h4>
                <p
                  class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-subtle"
                >
                  {{ w.subtitle }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        v-else-if="siteContent.family.witnesses?.title"
        class="mb-10"
      >
        <h4
          v-if="siteContent.family.witnesses.sectionTitle"
          class="mb-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.witnesses.sectionTitle }}
        </h4>
        <article
          class="mx-auto max-w-md overflow-hidden shadow-sm dark:shadow-[0_12px_36px_rgba(10,7,8,0.42)] sm:max-w-lg"
        >
          <div class="relative mb-0">
            <img
              :src="usePublicUrl(`img/${siteContent.family.witnesses.image}`)"
              :alt="siteContent.family.witnesses.title"
              class="h-80 w-full object-cover md:h-[22rem]"
              loading="lazy"
            />
            <div class="bg-secondary p-6 text-center dark:bg-night-elevated/80">
              <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-secondary">
                {{ siteContent.family.witnesses.title }}
              </h4>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-subtle"
              >
                {{ siteContent.family.witnesses.subtitle }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div
        v-if="siteContent.family.closeKin?.lines?.length"
        class="mx-auto mt-12 max-w-3xl rounded border border-primary/20 bg-secondary/40 px-6 py-8 text-center dark:border-primary/30 dark:bg-night-elevated/50"
      >
        <h4
          v-if="siteContent.family.closeKin.sectionTitle"
          class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.closeKin.sectionTitle }}
        </h4>
        <p
          v-for="(line, idx) in siteContent.family.closeKin.lines"
          :key="`close-${idx}`"
          class="text-base leading-relaxed text-brand-dark dark:text-secondary"
        >
          {{ line }}
        </p>
      </div>

      <!-- Personnes importantes : cartes séparées -->
      <div v-if="siteContent.family.important?.members?.length">
        <h4
          v-if="siteContent.family.important.sectionTitle"
          class="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.important.sectionTitle }}
        </h4>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <article
            v-for="(m, i) in siteContent.family.important.members"
            :key="`important-${i}-${m.title}`"
            class="overflow-hidden shadow-sm transition-opacity duration-300 dark:shadow-[0_12px_36px_rgba(10,7,8,0.42)]"
          >
            <div class="relative mb-0">
              <img
                :src="usePublicUrl(`img/${m.image}`)"
                :alt="m.title"
                class="h-72 w-full object-cover md:h-80"
                loading="lazy"
              />
              <div class="bg-secondary p-6 text-center dark:bg-night-elevated/80">
                <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-secondary">
                  {{ m.title }}
                </h4>
                <p
                  class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-subtle"
                >
                  {{ m.subtitle }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
