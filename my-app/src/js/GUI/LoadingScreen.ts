import * as itowns from 'itowns';

interface View {
  isDebugMode: boolean;
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
}

export function setupLoadingScreen(viewerDiv: HTMLDivElement, view: View): void {
  let loadingScreenContainer: HTMLDivElement | null;

  

  // loading screen
  loadingScreenContainer = document.createElement('div');
  loadingScreenContainer.innerHTML = `
    <div>
    <span class="c1">i</span><span class="c2">T</span><span class="c3">o</span><span class="c4">w</span><span class="c5">n</span><span class="c6">s</span>
    </div>`;
  loadingScreenContainer.id = 'itowns-loader';
  viewerDiv.appendChild(loadingScreenContainer);

  // auto-hide in 3 sec or if view is loaded
  function hideLoader() {
    if (!loadingScreenContainer) {
      return;
    }
    loadingScreenContainer.style.opacity = '0';
    loadingScreenContainer.style.pointerEvents = 'none';
    loadingScreenContainer.style.transition = 'opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)';

    loadingScreenContainer.addEventListener('transitionend', function _(e) {
      viewerDiv.removeChild(e.target as Node);
    });
    loadingScreenContainer = null;
    view.removeEventListener(itowns.VIEW_EVENTS.LAYERS_INITIALIZED, hideLoader);
  }

  view.addEventListener(itowns.VIEW_EVENTS.LAYERS_INITIALIZED, hideLoader);
  setTimeout(hideLoader, 3000);
}