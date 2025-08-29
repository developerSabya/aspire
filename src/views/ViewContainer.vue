<script setup >
import NavSection from '@/components/NavSection.vue';

</script>

<template>
    <div class="row">
        <div class="col-3 left-nav">
        <NavSection />
        </div>
        <div class="col-9">
        <div class="right-col">
            <router-view />
        </div>
        </div>
    </div>
</template>

<style scoped>
.left-nav {
    background-color: #0c365a;
    min-height: 100vh !important;
}
</style>