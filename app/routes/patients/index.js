var PatientsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('patient');
  }
});

export default PatientsIndexRoute;
