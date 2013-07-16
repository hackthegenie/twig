Template.resourcesSubmit.events({
	'submit form' : function(e){
		e.preventDefault();

		var resources={
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val()
			
		}	
		resources._id = Resources.insert(resources);
		Meteor.Router.to('resourcePage',resources); 
	}
	
});