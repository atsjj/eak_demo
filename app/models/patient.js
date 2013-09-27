var Patient = DS.Model.extend({
   name: DS.attr("string"),
   encounter_id: DS.attr("string"),
   person_id: DS.attr("string"),
   medication_id: DS.attr("string"),
   medication: DS.attr("string"),
   medication_date: DS.attr("string"),
   status: DS.attr("string"),
   klass: (function() {
    return 'yellow';
   }).property()
});

Patient.FIXTURES = [
  {
    "id": 1,
    "name": "Patient Zero",
    "encounter_id": 12345,
    "person_id": 67890,
    "medication_id": null,
    "medication": null,
    "medication_date": "",
    "klass": "red"
  },
  {
    "id": 2,
    "name": "Patient One",
    "encounter_id": 67890,
    "person_id": 12345,
    "medication_id": null,
    "medication": null,
    "medication_date": "",
    "klass": "yellow"
  }
];

export default Patient;