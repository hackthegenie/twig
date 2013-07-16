Meteor.Router.add({
  '/': 'twigsList',
  '/twigs/:_id': {
    to: 'twigPage', 
    and: function(id) {
		 Session.set('currentTwigId', id);
     }
  },
   '/twigs/:_id/edit': {
    to: 'twigEdit', 
    and: function(id) { Session.set('currentTwigId', id); } 
       
  },

  '/resources/:_id/edit': {
    to: 'resourceEdit', 
    and: function(id) { 
      alert('Yout have hit the Resourcedit template');
      Session.set('currentResourceId', id);
       } 

  },
 
  '/submit': 'twigSubmit',
  '/newResource': 'resourcesSubmit',
  '/simple': 'twigSimplePage',
  '/selectlist': 'selectList',
 
'/resources/:_id': {
    to: 'resourcePage', 
    and: function(id) {
     Session.set('currentTwigId', id);
     }
}

});

	