App = Ember.Application.create();
showdown = new Showdown.converter();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend();

App.IndexController = Ember.Controller.extend({
  unformattedText: '',
  isFocussed: false,

  formattedText: function(){
    html = showdown.makeHtml(this.get('unformattedText') + "<span class='cursor'>|</span>");
    return new Ember.Handlebars.SafeString(html);
  }.property('unformattedText'),

  setFocus: function(){
    this.set('isFocussed', true);
    Ember.$('textarea').focus();
  }
});
