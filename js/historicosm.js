
      function main() {
        cartodb.createVis('map', 'http://sigdeletras.cartodb.com/api/v2/viz/ee775ae8-c4de-11e3-afe5-0e73339ffa50/viz.json', {
            shareable: true,
            //title: true,
            //description: true,
            search: true,
            tiles_loader: true,
            center_lat: 40.416667, 
            center_lon: -3.75,
            zoom: 5
        })
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, pos, latlng, data) {
            cartodb.log.log(e, pos, latlng, data);
          });

          // you can get the native map to work with it
          // depending if you use google maps or leaflet
          map = vis.getNativeMap();

          // now, perform any operations you need
          // map.setZoom(3)
          // map.setCenter(new google.maps.Latlng(...))
        })
        .error(function(err) {
          console.log(err);
        });
      }

      window.onload = main;
    