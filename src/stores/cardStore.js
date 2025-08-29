import { defineStore } from 'pinia';
import { mockTransactions } from './mockTransactions';
import { mockCards } from './mockCards';
import { mockCompanyCards } from './mockCompanyCards';

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    allMyCards: [],
    companyCards: [],
    showCardNumber: false,
    transactions: [],
  }),
  getters: {
    transactionsByCard: (state) => (cardId) => {
      return state.transactions.filter(tx => tx.cardId === cardId);
    },
  },
  actions: {
    toggleShowCardNumber() {
      this.showCardNumber = !this.showCardNumber;
    },
    async fetchTransactions() {
      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          this.transactions = mockTransactions;
          resolve();
        }, 500);
      });
    },
    async fetchCards() {
      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          this.allMyCards = mockCards;
          resolve();
        }, 500);
      });
    },
    async fetchCompanyCards() {
      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          this.companyCards = mockCompanyCards;
          resolve();
        }, 500);
      });
    },
  },
});
