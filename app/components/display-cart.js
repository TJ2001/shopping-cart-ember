import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    sendOrder() {
      this.sendAction('sendOrder');
    }
  }
});
