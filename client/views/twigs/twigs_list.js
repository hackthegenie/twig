Template.twigsList.helpers({
  twigs: function(){
  return Twigs.find({homepage: 'homepage'});
  }
});