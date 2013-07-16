Template.twigPage.helpers({
  currentTwig: function() {
    return Twigs.findOne(Session.get('currentTwigId'));
  },
});

