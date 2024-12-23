// filepath: /g:/G_WCS/itowns_app-test2/my-app/src/App.tsx
import React, { useEffect } from 'react';
import * as itowns from 'itowns';
import { setupLoadingScreen } from './js/GUI/LoadingScreen';
//import Searchbar from 'itowns/lib/utils/gui/Searchbar.js';
//import 'itowns_widgets/Searchbar.css';
interface Config {
  id: string;
  source: itowns.WMTSSource;
}
const App: React.FC = () => {
 
  useEffect(() => {
    
    
    
    function init(): void 
    {
      /* function lookAtCoordinate(coordinates: itowns.Coordinates) {
        // const view = (window as any).view as itowns.View;
        view.controls.lookAtCoordinate({ coord: coordinates, range: 20000, tilt: 45, heading: 0 });
      } */
     
      const viewerDiv = document.getElementById('viewerDiv') as HTMLDivElement;
      const view = new itowns.GlobeView(viewerDiv, {
        renderer: {
          antialias: true,
        },
      });
      // Define camera initial position
     /*  const placement = {
        coord: new itowns.Coordinates('EPSG:4326', 2.351323, 48.856712),
        range: 6000,
        tilt: 50,
      }; */

      // `viewerDiv` contains iTowns' rendering area (`<canvas>`)
     
     
        
        setupLoadingScreen(viewerDiv, view);

        itowns.Fetcher.json('layers/JSONLayers/Ortho.json').then((config: Config) => {
          console.log('Configuration chargée', config);

          config.source = new itowns.WMTSSource(config.source);
          view.addLayer(new itowns.ColorLayer(config.id, config));

          console.log('Couche ajoutée', config.id);
        }).catch((error: unknown) => {
          console.error('Erreur lors du chargement de la configuration', error);
        });

        itowns.Fetcher.json('layers/JSONLayers/WORLD_DTM.json').then((config: Config) => {
          config.source = new itowns.WMTSSource(config.source);
          view.addLayer(new itowns.ElevationLayer(config.id, config));

     
        }); 
        
        //----------------------------------------------------------------
        // Searchbar
        //----------------------------------------------------------------
       /*  const geocodingOptions = {
          url: new URL(
            'https://data.geopf.fr/geocodage/completion?' +
            'text=&type=StreetAddress,PositionOfInterest',
          ),
          parser: (response: any) => {
            const map = new Map<string, itowns.Coordinates>();
            response.results.forEach((location: any) => {
              map.set(location.fulltext, new itowns.Coordinates('EPSG:4326', location.x, location.y));
            });
            return map;
          },
          onSelected: lookAtCoordinate,
        };

        const searchbar = new Searchbar(view, geocodingOptions, {
          maxSuggestionNumber: 15,
          placeholder: 'Search a location in France (Cyr)',
        });

        viewerDiv.appendChild(searchbar.domElement); */

     
    }

    document.addEventListener('DOMContentLoaded', init);

    return () => {
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);

  return <div id="viewerDiv" style={{ width: '100%', height: '100vh' }} />;
};

export default App;
