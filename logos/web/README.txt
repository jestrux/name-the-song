Add this to your HTML <head>:

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

Add this to your app's manifest.json:

    ...
    "icons": [
      {
        "src": "favicon.ico",
        "type": "image/x-icon",
        "sizes": "64x64 32x32 24x24 16x16"
      },
      { "src": "logo192.png", "type": "image/png", "sizes": "192x192" },
      { "src": "logo512.png", "type": "image/png", "sizes": "512x512" },
      {
        "src": "logo192-maskable.png",
        "type": "image/png",
        "sizes": "192x192",
        "purpose": "maskable"
      },
      {
        "src": "logo512-maskable.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "maskable"
      }
    ],
    ...
