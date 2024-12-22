// filepath: /g:/G_WCS/itowns_app-test2/my-app/src/itowns.d.ts
declare module 'itowns' {
    export class Coordinates {
      constructor(crs: string, longitude: number, latitude: number);
    }
  
    export class GlobeView {
      constructor(viewerDiv: HTMLDivElement, options: { renderer: { antialias: boolean } });
      addLayer(layer: ColorLayer): void;
    }
  
    export class WMTSSource {
      constructor(source: any);
    }
  
    export class ColorLayer {
      constructor(id: string, config: any);
    }
  
    export namespace Fetcher {
      function json(url: string): Promise<any>;
    }
  }