const marked = require('marked');

// Set default options except highlight which has no default
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: 'lang-',
});

export default {
  methods: {
    marked(input) {
      return marked(input);
    },
  },
};
