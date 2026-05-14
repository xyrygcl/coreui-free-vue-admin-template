import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    unfoldable: false,
    visible: true,
  }),
  actions: {
    toggleUnfoldable() {
      this.unfoldable = !this.unfoldable
    },
    toggleVisible(value) {
      this.visible = value
    },
  },
})
