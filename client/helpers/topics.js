Template.topics.helpers({
  isActive: function(item) {
    if(Session.equals("visibleTopics", item)){
      return "active";
    }
    return false;
  }

});

Template.topics.events({
  'click .topicTabSorter': function(e, t){
    Session.set("visibleTopics", e.target.text);
  }
});
Template.topics.rendered = function(){
/*
  $container = $('#container');
  // init
  $container.isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
*/
};