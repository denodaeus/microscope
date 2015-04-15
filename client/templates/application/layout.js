Session.set('pageTitle', 'Microscope');

Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});
