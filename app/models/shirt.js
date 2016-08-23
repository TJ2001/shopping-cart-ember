import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  color: DS.attr(),
  size: DS.attr(),
  price: DS.attr(),
  shirtOrder: DS.hasMany('shirt-order', {async: true})
});
