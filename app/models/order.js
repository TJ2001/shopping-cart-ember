import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr(),
  address: DS.attr(),
  shirtOrder: DS.hasMany('shirt-order', {async: true})
});
