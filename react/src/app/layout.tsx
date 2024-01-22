import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        id="hypelab"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!(function (h, y, p, e, l, a, b) {
    ((l = document.createElement(h)).async = !0),
      (l.src = y),
      (l.onload = function () {
        (a = { URL: p, propertySlug: e, environment: 'development' }), HypeLab.initialize(a);
      }),
      (b = document.getElementsByTagName(h)[0]).parentNode.insertBefore(l, b);
  })('script', 'https://api.hypelab.com/v1/scripts/hp-sdk.js?v=0', 'https://api.hypelab-staging.com', 'demo_property');`,
        }}
      />

      <body className="h-screen w-full">{children}</body>
    </html>
  );
}
