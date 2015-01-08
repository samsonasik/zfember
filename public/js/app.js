App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('contact');
});

App.IndexRoute = Ember.Route.extend({
   beforeModel: function() {
     if (!Ember.TEMPLATES.index) {
        return $.ajax({
           url: '/'
        })
        .then(function(response) {
           Ember.TEMPLATES.index = Ember.Handlebars.compile(response);
       });
     }
     return true;
   }
});

App.AboutRoute = Ember.Route.extend({
   beforeModel: function() {
     if (!Ember.TEMPLATES.about) {
        return $.ajax({
           url: '/about'
        })
        .then(function(response) {
           Ember.TEMPLATES.about = Ember.Handlebars.compile(response);
       });
     }
     return true;
   }
});

App.ContactRoute = Ember.Route.extend({
   beforeModel: function() {
     if (!Ember.TEMPLATES.contact) {
        return $.ajax({
           url: '/contact'
        })
        .then(function(response) {
           Ember.TEMPLATES.contact = Ember.Handlebars.compile(response);
       });
     }
     return true;
   }
});

if (window.history && window.history.pushState) {
    App.Router.reopen({
      location: 'history'
    });
}

App.LinkLiComponent = Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});

Em.Handlebars.helper('link-li', App.LinkLiComponent);
