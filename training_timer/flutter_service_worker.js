'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4bf0f36b7cff90892176094100fc2a26",
"assets/assets/images/mainIcon.png": "23204fbca4a9326492f119dca7b35b1e",
"assets/assets/sounds/gong.wav": "2005115b70cc3cd84383c9c728d4800e",
"assets/assets/sounds/lets_go.wav": "4f26255bba60cb6a2bb93d5744fd3871",
"assets/FontManifest.json": "6f0aecdde49eeb379027b3ae33b7be10",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/LICENSE": "8861e9715f75bd8486952afed97eb689",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "8e62ad8548b5c191d202a3d6d71d6959",
"icons/Icon-192.png": "112026ea3eef0cecfc9f79571669cf06",
"icons/Icon-512.png": "f86a11c764b64905c898458d85091863",
"index.html": "a556d24225aba271193c9832edc178a7",
"/": "a556d24225aba271193c9832edc178a7",
"main.dart.js": "7e38ee63de145ae36ddbd0d18f696a1f",
"manifest.json": "f44e67e76527aee4a77a17fd27faaa6c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
