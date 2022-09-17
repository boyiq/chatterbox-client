// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //Run the roominitializer one time here;

    //Make app.fetch run every 1s, 1000ms.
    setTimeout(() => { App.fetch(call = () =>{}); }, 15000); //100 second refresh
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('FETCH DATA:', data);
      Messages._data = data;
      //console.log(Rooms._data);
      callback();
      var timesInitalized = false;
      if (!timesInitalized) {
        Rooms._initializeRooms();
        timesInitalized = true;
      }
      if (timesInitalized) {
        Rooms._updateRoomStorage();
      }

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
