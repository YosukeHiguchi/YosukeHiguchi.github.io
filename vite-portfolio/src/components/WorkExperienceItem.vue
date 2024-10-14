<template>
  <li
    class="flex flex-col md:flex-row rounded-lg px-6 py-4 bg-neutral-700"
  >
    <div class="text-neutral-300 w-48 shrink-0">{{ props.period }}</div>
    <div class="shrink flex flex-col mt-2 md:mt-0">
      <div class="flex flex-row items-center">
        <img
          class="h-12 mr-2"
          :src="props.companyImg"
          v-if="props.companyImg"
        />
        <div class="flex flex-col">
          <div>
            <span class="font-bold text-xl text-white">
              <a
                class="hover:text-neutral-200 hover:underline"
                :href="props.companyHref"
                target="_blank"
                v-if="props.companyHref"
                >{{ props.company }}</a
              >
              <span v-else>{{ props.company }}</span>
            </span>
            <span class="ml-2 text-neutral-400" v-if="companyNote">{{
              companyNote
            }}</span>
          </div>
          <div class="text-white -mt-1" v-if="companySub">{{
              companySub
            }}</div>
          <div class="text-neutral-400 font-bold mt-1">{{ props.jobTitle }}</div>
        </div>
      </div>
      <ul
        class="flex flex-col list-disc list-outside ml-5 mt-4 md:mt-2"
        v-if="$slots.default"
      >
        <slot />
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  period: string;
  company: string;
  companySub?: string;
  companyImg?: string;
  companyHref?: string;
  companyNote?: string;
  jobTitle: string;
}>();
</script>
