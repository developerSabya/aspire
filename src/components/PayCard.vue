<template>
  <q-card class="paycard">
    <q-card-section class="paycard-header">
      <div class="paycard-title"></div>
      <div class="flex items-center">
        <q-img src="../assets/Home.svg" width="20px" class="q-mr-xs"  contain></q-img>
        <div>aspire</div>
      </div>
    </q-card-section>
    <q-card-section class="">
        <div class="paycard-value">{{cardDetails.cardHolder}}</div>
      <!-- <div class="paycard-number">**** **** **** 1234</div> -->
      <div class="paycard-number">{{cardNumberDisplay}}</div>

      <div class="paycard-info-row">
        <div>
          <div class="paycard-label">Thru: {{cardDetails.expiry}}</div>
        </div>
        <div>
          <div class="paycard-label">CVV: ***</div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <i :class="cardIconClass" style="font-size: 32px; color: white;"></i>
    </q-card-actions>
  </q-card>
</template>

<script>
import { cardIcons } from '../constants/CardTypes.js';

export default {
  name: "PayCard",
  props: {
    cardDetails: {
      type: Object,
      required: true
    },
    showNumber: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardIconClass() {
      // fallback to 'pf-visa' if not found
      return this.cardDetails.cardType && cardIcons[this.cardDetails.cardType]
        ? `pf ${cardIcons[this.cardDetails.cardType]}`
        : 'pf pf-credit-card';
    },
    cardNumberDisplay() {
      if (this.showNumber) {
        return this.cardDetails.cardNumber;
      } else {
        // Mask all but last 4 digits
        const parts = this.cardDetails.cardNumber.split(' ');
        return parts.map((part, index) => index < parts.length - 1 ? '****' : part).join(' ');
      }
    }
  }
};
</script>

<style scoped>
.paycard {
  width: 100%;
  border-radius: 18px;
  background: #01D167;
  color: #fff;
  padding: 10px;
}
.paycard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;
}
.paycard-title {
  font-size: 1.2rem;
  font-weight: 600;
}
.paycard-chip {
  width: 40px;
  height: 28px;
  background: #ffd700;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.paycard-details {
  margin-top: 10px;
}
.paycard-number {
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 16px;
}
.paycard-info-row {
  display: flex;
  justify-content: space-between;
}
.paycard-label {
  font-size: 0.7rem;
  opacity: 0.8;
}
.paycard-value {
  font-size: 1rem;
  font-weight: 500;
}
</style>
