Template.resourcePage.helpers({
  currentTwig: function() {
    return Resources.findOne(Session.get('currentTwigId'));
  },
});