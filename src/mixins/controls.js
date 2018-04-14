import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setActiveMenu',
      'resetActiveMenus',
    ]),
    setActive(item) {
      const payload = {
        item,
        location: 'builder',
      };

      this.setActiveMenu(payload);
    },
    resetActives() {
      this.resetActiveMenus();
    },
  },
};
