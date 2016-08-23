import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('order');
  },

  actions: {
    save3(params) {
      var newShirt = this.store.createRecord('shirt', params);
      newShirt.save();
      this.transitionTo('item');
    },
  }
});
