import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order', {async: true}),
  shirt: DS.belongsTo('shirt', {async: true})
});
