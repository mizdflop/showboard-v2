Router.configure({
  layoutTemplate: 'layout' 
});

Router.map(function () {
	this.route('topics', {
		path: '/topics',
		template: 'topics',
	    /*onBeforeAction: function () {
    	//  AccountsEntry.signInRequired(this);
    	//},
		waitOn: function(){
			return [
				Meteor.subscribe("episodes"),
				Meteor.subscribe("tvseries")
			];
		},
		*/
		action: function () {
      		if (this.ready()){
         		this.render();
         	}
         }
	});
});
