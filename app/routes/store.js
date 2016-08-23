import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll('shirt');
  },
  actions: {
    sendOrder() {
      var newOrder = this.store.createRecord('order');
      var rt = this;
      this.get('shoppingCart').getItems().forEach(function(purchasedItem){
        var params = {
          order: newOrder,
          shirt: purchasedItem
        };
        var shirtOrder = rt.store.createRecord('shirt-order', params);
        shirtOrder.save().then(function() {
          purchasedItem.save();
        });
        purchasedItem.get('shirtOrder').addObject(shirtOrder);
        newOrder.get('shirtOrder').addObject(shirtOrder);
      });
      newOrder.save();
    }
  }
});
