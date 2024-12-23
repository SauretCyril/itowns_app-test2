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
    export namespace OWSLandCover {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export class ElevationLayer {
      constructor(id: string, config: any);
    }
    export namespace OWSLandUse {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export namespace OWSLandCoverType {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export namespace OWSLandUseType {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export namespace OWSLandUseSubtype {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export namespace OWSLandCoverSubtype {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    export namespace OWSLandUseSubtypeGroup {
      function get(crs: string, extent: [number, number, number, number]): Promise<any>;
    }
    
    
  }