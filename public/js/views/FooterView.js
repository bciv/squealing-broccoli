define([ 'marionette', 'handlebars', 'text!templates/footer.html'],
    function (Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template:Handlebars.compile(template)
        });
    });