// filepath: /g:/G_WCS/itowns_app-test2/my-app/src/App.tsx
import React, { useEffect } from 'react';
import * as itowns from 'itowns';
import { setupLoadingScreen } from './js/GUI/LoadingScreen';
const App: React.FC = () => {
  useEffect(() => {
    
    function init() 
    {
        console.log('Initialisation de la vue');

        // Define camera initial position
          const placement = {
          coord: new itowns.Coordinates('EPSG:4326', 2.351323, 48.856712),
          range: 6000,
          tilt: 50,
        };  

        // `viewerDiv` contains iTowns' rendering area (`<canvas>`)
        const viewerDiv = document.getElementById('viewerDiv') as HTMLDivElement;
        if (viewerDiv) 
            {
            console.log('viewerDiv trouvé', viewerDiv);
            const view = new itowns.GlobeView(viewerDiv, {
              renderer: {
                antialias: true,
              },placement
              });

          console.log('Vue initialisée', view);
          setupLoadingScreen(viewerDiv ,view);
          
        
          itowns.Fetcher.json('layers/JSONLayers/Ortho.json').then((config) => 
            {
              console.log('Configuration chargée', config);
              config.source = new itowns.WMTSSource(config.source);
              view.addLayer(new itowns.ColorLayer(config.id, config));

              console.log('Couche ajoutée', config.id); 

            }); 
            
          itowns.Fetcher.json('layers/JSONLayers/IGN_MNT_HIGHRES.json').then((config) => 
            {
              config.source = new itowns.WMTSSource(config.source);

              view.addLayer(
                new itowns.ElevationLayer(config.id, config),
              );
            });  
          
            
            itowns.Fetcher.json('layers/JSONLayers/WORLD_DTM.json').then((config) => 
                {
                  config.source = new itowns.WMTSSource(config.source);
    
                  view.addLayer(
                    new itowns.ElevationLayer(config.id, config),
                  );
                });  
  

        } else {
          console.error('viewerDiv non trouvé');
        }
    }
    
    
    document.addEventListener('DOMContentLoaded', init);


    return () => {
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);

  return <div id="viewerDiv" style={{ width: '100%', height: '100vh' }} />;
};

export default App;
