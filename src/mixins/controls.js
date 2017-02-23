export default {
  methods: {
    setActiveMenu(item) {
      const payload = {
        item,
        location: 'side',
      };
      this.$store.dispatch('SET_ACTIVE_MENU', payload);
    },
  },
};
