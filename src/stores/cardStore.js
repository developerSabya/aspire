import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    allMyCards: [
      { id: 1, cardNumber: '1234 5678 9012 3456', cardType: 'Visa', expiry: '12/24', cvv: '123', cardHolder: 'Mark Henry' },
      { id: 2, cardNumber: '9876 5432 1098 7654', cardType: 'MasterCard', expiry: '11/23', cvv: '456', cardHolder: 'Mark Henry' },
      { id: 3, cardNumber: '4567 8901 2345 6789', cardType: 'Amex', expiry: '10/25', cvv: '789', cardHolder: 'Mark Henry' },
      { id: 4, cardNumber: '3210 6543 2109 8765', cardType: '', expiry: '09/22', cvv: '012', cardHolder: 'Mark Henry' },
    ],
    showCardNumber: false,
  }),
  actions: {
    toggleShowCardNumber() {
      this.showCardNumber = !this.showCardNumber;
    },
  },
});
