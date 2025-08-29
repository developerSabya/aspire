<template>
    <div class="flex row no-wrap items-center justify-around q-pa-sm card-controls">
        <q-btn flat no-caps class="q-mx-xs" style="padding: 0; min-width: 0;" @click="freezeCard">
            <div class="flex column items-center">
                <q-img src="../assets/Freeze card.svg" alt="Logo" width="32px" height="32px" class="q-my-sm" />
                <div class="conrol-text whitespace-nowrap mt-1">Freeze card</div>
            </div>
        </q-btn>
        <q-btn flat no-caps class="q-mx-xs" style="padding: 0; min-width: 0;" @click="setSpendLimit">
            <div class="flex column items-center">
                <q-img src="../assets/Set spend limit.svg" alt="Logo" width="32px" height="32px" class="q-my-sm" />
                <div class="conrol-text whitespace-nowrap mt-1">Set spend limit</div>
            </div>
        </q-btn>
        <q-btn flat no-caps class="q-mx-xs" style="padding: 0; min-width: 0;" @click="addToGPay">
            <div class="flex column items-center">
                <q-img src="../assets/GPay.svg" alt="Logo" width="32px" height="32px" class="q-my-sm" />
                <div class="conrol-text whitespace-nowrap mt-1">Add to GPay</div>
            </div>
        </q-btn>
        <q-btn flat no-caps class="q-mx-xs" style="padding: 0; min-width: 0;" @click="replaceCard">
            <div class="flex column items-center">
                <q-img src="../assets/Replace card.svg" alt="Logo" width="32px" height="32px" class="q-my-sm" />
                <div class="conrol-text whitespace-nowrap mt-1">Replace card</div>
            </div>
        </q-btn>
        <q-btn flat no-caps class="q-mx-xs" style="padding: 0; min-width: 0;" @click="cancelCard">
            <div class="flex column items-center">
                <q-img src="../assets/Deactivate card.svg" alt="Logo" width="32px" height="32px" class="q-my-sm" />
                <div class="conrol-text whitespace-nowrap mt-1">Cancel card</div>
            </div>
        </q-btn>
    </div>
</template>


<script setup>
import { Notify, Dialog } from 'quasar'

function freezeCard() {
    Dialog.create({
        title: 'Freeze Card',
        message: 'Are you sure you want to freeze this card?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        Notify.create({ type: 'info', message: 'Card Freezed' })
    })
}
function setSpendLimit() {
    Notify.create({ type: 'info', message: 'Set spend limit action' })
}
function addToGPay() {
    Notify.create({ type: 'info', message: 'Add to GPay action' })
}
function replaceCard() {
    Notify.create({ type: 'info', message: 'Replace card action' })
}
function cancelCard() {
    Notify.create({ type: 'info', message: 'Cancel card action' })
}
</script>

<style scoped>
.conrol-text {
    font-size: 13px;
    line-height: 14px;
    color: #0C365A;
    text-align: center;

}
.card-controls {
    background-color: #EDF3FF;
    border-radius: 10px;
}
</style>