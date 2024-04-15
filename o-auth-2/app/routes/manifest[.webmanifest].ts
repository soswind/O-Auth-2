import type { WebAppManifest } from '@remix-pwa/dev';
import { json } from '@remix-run/node';
import logo from '/assets/logo.png';

export const loader = () => {
  return json(
    <WebAppManifest>{
      short_name: 'PWA',
      name: 'Remix PWA',
      start_url: '/',
      display: 'standalone',
      background_color: '#d3d7dd',
      theme_color: '#c34138',
      icons: [
        {
          src: logo,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: logo,
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    } as WebAppManifest,
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    }
  );
};
