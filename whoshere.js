var whoshere = function( customCallBack ) {

  var win = window,
      nav = navigator;

  this.getInfo = function() {

     this.getIPAddress();
       
  };

  this.getIPAddress = function() {

    var req = new XMLHttpRequest(),
        self = this,
        formatJSONP = function( str ) { return JSON.parse( str.substring( str.indexOf('(') + 1, str.lastIndexOf( ')') ) ) };

    req.open( 'GET', 'http://freegeoip.net/json/?callback=?', true );
     
    req.send();

    req.onload = function() {

      var jsonp = req.responseText;

      self.getCurrentPosition( navigator, formatJSONP(jsonp) ); 

    };      

  };

  this.returnInfo = function( posValue, ip ) {

    var date = new Date(),
        obj =  {

          platform: nav.platform,
          lang: nav.language,
          onLine: nav.onLine,
          currentLocation: posValue,
          doNotTrack: nav.doNotTrack,
          appVersion: nav.appVersion,
          winHeight: win.innerHeight,
          winWidth: win.innerWidth,
          location: location.href,
          ipObject: ip,
          date: date,
          promise: ( win.Promise ) ? win.Promise : 'Unsupported',
          time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

        };  

    //silently fail if no callback is passed in
    if ( customCallBack ) { customCallBack( obj ) }

    else { console.log('ERROR: No callback function provided'); };

  };

  this.getCurrentPosition = function( nav, ip ) {

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      },

      self = this,

      success = function( position ) {

        self.returnInfo( position, ip );

      },

      error = function( error ) {

        self.returnInfo(  'ERROR(' + error.code + '): ' + error.message, ip );

      }; 

      nav.geolocation.getCurrentPosition( success, error, options );    

  };

}