require('itowns')
import * as itowns from 'itowns';
const conf = {
    version: '0.01'
};
export const REVISION = conf.version;



function init() {
   // Define camera initial position
   const placement = {
      coord: new itowns.Coordinates('EPSG:4326', 2.351323, 48.856712),
      range: 6000,
      tilt: 50,
  }
  
  const viewerDiv = document.getElementById('viewerDiv');
  const view = new itowns.GlobeView(viewerDiv, {
    renderer: {
      antialias: true,
    },
  });

  // Add your layers and other initialization code here
  console.log('Vue initialisée', view);
  // Setup loading screen and debug menu
  setupLoadingScreen(viewerDiv,view );
  const debugMenu = new GuiTools('menuDiv', view);
  //const debugMenu = new GuiTools('menuDiv', view);

  // Add your layers and other initialization code here

    itowns.Fetcher.json('layers/JSONLayers/Ortho.json').then((config) => {
                config.source = new itowns.WMTSSource(config.source);
                view.addLayer(
                    new itowns.ColorLayer(config.id, config),
                ).then(debugMenu.addLayerGUI.bind(debugMenu));
            });

}

document.addEventListener('DOMContentLoaded', init);

