<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        label="Card details"
        default-opened
        header-class="text-primary"
      >
        <template #header>
          <q-img src="../assets/Card.svg" alt="Card" style="width: 24px; height: 24px; margin-right: 8px;" />
          <span class="q-expansion-item__label">Card details</span>
        </template>
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item group="somegroup" icon="perm_identity" label="Recent transactions" header-class="text-teal">
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>      
    </q-list>
  </div>
</template>