import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setActiveMenu',
    ]),
    setActive(item) {
      const payload = {
        item,
        location: 'side',
      };

      this.setActiveMenu(payload);
    },
  },
};
