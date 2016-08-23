import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        color: this.get('color'),
        size: this.get('size'),
        price: this.get('price'),
      };
      this.sendAction('save2', params);
    }
  }
});
