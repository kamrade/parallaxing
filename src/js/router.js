let Router = {
  routes: [], // it keeps the current registered routes
  mode: null, // could be 'hash' or 'history' showing if we use the History API or not
  root: '/',

  config: function(options) {
    this.mode = options && options.mode && options.mode === 'history' && !!(history.pushState) ? 'history' : 'hash';
    this.root = options && options.root ? '/' : this.clearSlashes(options.root);
    return this;
  },

  getFragment: function() {
    let fragment = '';
    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      let match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }

    return this.clearSlashes(fragment);
  }

  


}
