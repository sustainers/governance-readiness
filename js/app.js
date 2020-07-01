

let vm = new Vue({
  el: '#vue-app',
  data: {
    dayToDay5: [],
    dayToDayRest: [],
    barriersNeeds5: [],
    barriersNeedsRest: [],
    interventions5: [],
    interventionsRest: []
  },
  mounted: function() {
    var self = this
    $.getJSON('data/data.json', function(json) {
      console.log("loaded");
      console.log(json);
      self.dayToDay5 = json.dayToDay.slice(0,5)
      self.dayToDayRest = json.dayToDay.slice(5)
      self.barriersNeeds5 = json.barriersAndNeeds.slice(0,5)
      self.barriersNeedsRest = json.barriersAndNeeds.slice(5)
      self.interventions5 = json.interventions.slice(0,5)
      self.interventionsRest = json.interventions.slice(5)
    })   
  }
});