var PatientsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('patient', params.patient_id);
  }
});

export default PatientsShowRoute;

