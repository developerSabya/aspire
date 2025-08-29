<template>
    <div class="settings q-pa-md">
        <q-card bordered class="my-card q-pa-md q-mb-md flex flex-center bg-primary text-white">
            <div class="text-h5">Settings</div>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Profile</div>
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label>Name</q-item-label>
                        <q-item-label caption>Mark Henry</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Email</q-item-label>
                        <q-item-label caption>mark.henry@company.com</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Company Info</div>
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label>Company Name</q-item-label>
                        <q-item-label caption>Sabyasachi Enterprises</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Role</q-item-label>
                        <q-item-label caption>Finance Manager</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Notifications</div>
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label>Payment Alerts</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-toggle v-model="settings.paymentAlerts" color="primary" />
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Card Activity</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-toggle v-model="settings.cardActivity" color="primary" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Security</div>
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label>Change Password</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn color="primary" label="Change" size="sm" flat />
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Two-Factor Authentication</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-toggle v-model="settings.twoFactor" color="primary" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const settings = reactive({
    paymentAlerts: true,
    cardActivity: false,
    twoFactor: true
})
</script>