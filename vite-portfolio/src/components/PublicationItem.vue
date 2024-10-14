<template>
  <div
    target="_blank"
    class="flex flex-col rounded-lg px-6 py-4 bg-neutral-700 leading-relaxed"
  >
    <div class="font-bold text-white">
      {{ props.title }}
      <img class="inline text-white h-4" src="" />
    </div>
    <div
      class="text-neutral-400 text-sm mt-2"
      v-html="boldMyself(props.authors)"
    ></div>
    <div class="text-sm mt-2">
      <span class="font-bold">{{ props.publishedAt }}</span
      >, {{ props.date }}.
      <a
        class="text-teal-300 hover:text-teal-200 hover:underline ml-1"
        v-if="props.linkArxiv"
        :href="props.linkArxiv"
      >
        [arXiv]</a
      >
      <a
        class="text-teal-300 hover:text-teal-200 hover:underline ml-1"
        v-if="props.linkAcl"
        :href="props.linkAcl"
      >
        [ACL Anthology]</a
      >
      <a
        class="text-teal-300 hover:text-teal-200 hover:underline ml-1"
        v-if="props.linkIeee"
        :href="props.linkIeee"
      >
        [IEEE Xplore]</a
      >
      <a
        class="text-teal-300 hover:text-teal-200 hover:underline ml-1"
        v-if="props.linkIsca"
        :href="props.linkIsca"
      >
        [ISCA Archive]</a
      >
      <a
        class="text-teal-300 hover:text-teal-200 hover:underline ml-1"
        v-if="props.linkPdf"
        :href="props.linkPdf"
      >
        [pdf]</a
      >
      <span
        class="font-bold text-orange-300 ml-1"
        v-if="props.prize"
      >
        《{{ props.prize }}》</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  authors: string;
  publishedAt: string;
  linkArxiv?: string;
  linkAcl?: string;
  linkIeee?: string;
  linkIsca?: string;
  linkPdf?: string;
  date: string;
  prize?: string;
}>();

const boldMyself = (authors: string) => {
  authors = authors.replace(
    "Yosuke Higuchi",
    '<span class="underline">Yosuke Higuchi</span>'
  );
  authors = authors.replace("樋口陽祐", '<span class="underline">樋口陽祐</span>');

  return authors;
};
</script>
