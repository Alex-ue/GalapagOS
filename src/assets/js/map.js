(function() {
    // Register an event listener to be called when the page is loaded.
    window.addEventListener("load", eventWindowLoaded, false);

    
    // Define the event listener to initialize Web WorldWind.
    function eventWindowLoaded() {
        // Create a WorldWindow for the canvas.
        var wwd = new WorldWind.WorldWindow("mapCanvas");

        // Add some image layers to the WorldWindow's globe.
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BMNGLandsatLayer());

        // Add a compass, a coordinates display and some view controls to the WorldWindow.
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
    }
 })();