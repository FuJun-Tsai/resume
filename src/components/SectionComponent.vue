<template>
    <div>
        <h4 class="fw-bolder text-color-main mt-3 mb-1">{{ props.title }}</h4>
        <hr>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    title: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
</style>