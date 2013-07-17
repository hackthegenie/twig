Template.twigSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var twig = {
      homepage: $(e.target).find('[name=homepage]').val(),
      title: $(e.target).find('[name=title]').val(),
      twig1Image: $(e.target).find('[name=twig1Image]').val(),
      twig1Text: $(e.target).find('[name=twig1Text]').val(),
      twig1Title: $(e.target).find('[name=twig1Title]').val(),
      twig1Id: $(e.target).find('[name=twig1Id]').val(),
      twig1Resource: $(e.target).find('[name=twig1Resource]').val(),
      twig2Image: $(e.target).find('[name=twig2Image]').val(),
      twig2Text: $(e.target).find('[name=twig2Text]').val(),
      twig2Title: $(e.target).find('[name=twig2Title]').val(),
      twig2Resource: $(e.target).find('[name=twig2Resource]').val(),
      twig2Id: $(e.target).find('[name=twig2Id]').val(),
      twig3Image: $(e.target).find('[name=twig3Image]').val(),
      twig3Text: $(e.target).find('[name=twig3Text]').val(),
      twig3Resource: $(e.target).find('[name=twig3Resource]').val(),
      twig3Id: $(e.target).find('[name=twig3Id]').val(),
      twig3Title: $(e.target).find('[name=twig3Title]').val() 
    }

    twig._id = Twigs.insert(twig);
    Meteor.Router.to('twigPage', twig);
  }
});