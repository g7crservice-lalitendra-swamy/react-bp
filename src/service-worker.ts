/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: any;

// Workbox automatically injects `self.__WB_MANIFEST` during the build process
precacheAndRoute(self.__WB_MANIFEST);

// Cache API responses
registerRoute(
  ({ request }) => 
    request.destination === 'script' || 
    request.destination === 'style' || 
    request.destination === 'image',
  new StaleWhileRevalidate()
);

// Install event
self.addEventListener('install', (event:any) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting(); // Force new SW to activate immediately
});

// Activate event
self.addEventListener('activate', (event:any) => {
  console.log('[Service Worker] Activated');
  event.waitUntil(self.clients.claim()); // Immediately control open pages
});
