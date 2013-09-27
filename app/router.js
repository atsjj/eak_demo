var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

// Root
//   Patients
//     new
//     show
//     Medications


Router.map(function(){
  this.resource('patients', function() {
    // this.route('index');
    this.route('show', { path: '/show/:patient_id' });
  })
});

export default Router;
