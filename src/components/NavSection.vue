<template>
    <div class="q-pa-xl">
    <q-img src="../assets/aspire-logo.svg" alt="Aspire Logo" width="125px" class="q-mb-md" />
    <div class="title q-mb-md">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <q-list>
        <q-item to="/" clickable v-ripple>
            <q-item-section thumbnail class="section-image">
                <img src="../assets/Home.svg" alt="Home" width="24px" height="24px" />
            </q-item-section>
            <q-item-section class="section-text">Home</q-item-section>
        </q-item>
        <q-item to="/cards" clickable>
            <q-item-section thumbnail class="section-image">
                <img src="../assets/Card.svg" alt="Card" width="24px" height="24px" />
            </q-item-section>
            <q-item-section class="section-text">Cards</q-item-section>
        </q-item>
        <q-item to="/payments" clickable v-ripple>
            <q-item-section thumbnail class="section-image">
                <img src="../assets/Payments.svg" alt="Payments" width="24px" height="24px" />
            </q-item-section>
            <q-item-section class="section-text">Payments</q-item-section>
        </q-item>
        <q-item to="/credit" clickable>
            <q-item-section thumbnail class="section-image">
                <img src="../assets/Credit.svg" alt="Credit" width="24px" height="24px" />
            </q-item-section>
            <q-item-section class="section-text">Cards</q-item-section>
        </q-item>
        <q-item to="/settings" clickable v-ripple>
            <q-item-section thumbnail class="section-image">
                <img src="../assets/Account.svg" alt="Settings" width="24px" height="24px" />
            </q-item-section>
            <q-item-section class="section-text">Settings</q-item-section>
        </q-item>
    </q-list>
    </div>
</template>

<style scoped>
.title {
    color: #FFFFFF;
    font-size: 15px;
    line-height: 20px;
    opacity: 30%;
}
.section-image img{
    width: 24px;
    height: 24px;
}
.section-text {
    color: #FFFFFF;
    font-size: 16px;
    line-height: 32px;
}
.q-router-link--active .section-text {
    color: #01D167;
}
</style>