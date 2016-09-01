module.exports = {
  name: 'ember-ahoy',
  included: function(app){
    this._super.included(app);

    app.import(app.bowerDirectory + '/ahoy/ahoy.js');
  },
  contentFor: function(target, config) {
    if (target === 'head') {
      return `<script>
                window.ahoy = {};
                window.ahoy.visitsUrl = '${config.ahoy.visitsUrl}';
                window.ahoy.eventsUrl = '${config.ahoy.eventsUrl}';
              </script>`;
    }
  }
};
