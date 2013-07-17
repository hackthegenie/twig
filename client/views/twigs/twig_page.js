Template.twigPage.helpers({
  currentTwig: function() {
    return Twigs.findOne(Session.get('currentTwigId'));
  },
});

Template.twigPage.events({
		'click .new1': function(e) {
		    e.preventDefault();
		    var NewId = Twigs.insert({});
		    alert(NewId);
		    var currentTwigId = Session.get('currentTwigId');
		    alert(currentTwigId);
		    Twigs.update({'_id':currentTwigId}, {$set:{'twig1Id': NewId}});
		    Meteor.Router.to('twigEdit', NewId);
			},
		'click .new2': function(e) {
		    e.preventDefault();
		    var NewId = Twigs.insert({});
		    var currentTwigId = Session.get('currentTwigId');
		    Twigs.update({'_id':currentTwigId},{$set:{'twig2Id': NewId}});
		    Meteor.Router.to('twigEdit', NewId);
			},
		'click .new3': function(e) {
		    e.preventDefault();
		    var NewId = Twigs.insert({});
		    var currentTwigId = Session.get('currentTwigId');
		    Twigs.update({'_id':currentTwigId},{$set:{'twig3Id': NewId}});
		    Meteor.Router.to('twigEdit', NewId);
			}
});
