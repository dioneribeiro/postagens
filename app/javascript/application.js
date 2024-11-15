// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"

import LocalTime from "local-time"
LocalTime.start()

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log("Service worker registered with scope:", registration.scope);
    }).catch((error) => {
        console.error("Service worker registration failed:", error);    
    });
}