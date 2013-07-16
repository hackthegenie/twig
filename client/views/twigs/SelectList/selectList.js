Template.selectList.helpers({
 resources: function(){
  return Resources.find();
  },
  twigs: function(){
  return Twigs.find();
  }

});