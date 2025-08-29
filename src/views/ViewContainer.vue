<script setup>
import MobileBottomNav from '@/components/MobileBottomNav.vue';
import NavSection from '@/components/NavSection.vue';

</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <div class="row">
            <div class="col-3 left-nav hide-on-mobile">
                <NavSection />
            </div>
            <div class="col-md-9 col-sm-12">
                <div class="right-col">
                    <router-view />
                </div>
            </div>
        </div>
        <MobileBottomNav />
    </q-layout>
</template>

<style scoped>
.left-nav {
    background-color: #0c365a;
    min-height: 100vh !important;
}

@media (max-width: 600px) {
    .hide-on-mobile {
        display: none !important;
    }
}
</style>