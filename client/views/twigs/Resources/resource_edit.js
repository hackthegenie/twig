Template.resourceEdit.helpers({
  resource: function() {
    return Resources.findOne(Session.get('currentResourceId'));
  }
});

Template.resourceEdit.events({ 	
  'submit form': function(e) {

   
    e.preventDefault();

    var currentResourceId = Session.get('currentResourceId');
	
    var resourceProperties = { 
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    }

    Resources.update(currentResourceId, {$set: resourceProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('resourcePage', currentResourceId);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this twig?")) {
      var currentResourceId = Session.get('currentResourceId');
      Resource.remove(currentResourceId);
      Meteor.Router.to('twigsList');
    }
  }
});

Template.resourceEdit.rendered  = function (){

  alert("Temlpate Rendered");
  content: $(e.target).find('[name=content]').val()
 
 $('#myParentTable').editable({
      selector: '.editable-click'
    });
  
  $(Template.resourceEdit.find('#textArea.editable:not(.editable-click)')).editable('destroy').editable(
   {
    success: function(response, newValue) {}
   });
};