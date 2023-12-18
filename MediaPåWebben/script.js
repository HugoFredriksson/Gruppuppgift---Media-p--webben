const imageToCache = new Image();
imageToCache.src = 'scrummer.png';

// Funktion för att använda cachen
function useCachedImage() {
  const cachedImage = new Image();
  cachedImage.src = 'scrummer.png';
  document.body.appendChild(cachedImage);
}