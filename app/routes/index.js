import Route from '@ember/routing/route';

// index.js handles users navigating to (/) and redirects it to 'rentals'
export default Route.extend({
    redirect(){
        this.transitionTo('rentals');
    }
});
