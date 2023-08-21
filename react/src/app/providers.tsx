'use client';

import { Environment, HypeLab, HypeLabContext } from 'hypelab-react';

export default function Providers({ children }: { children: React.ReactNode }) {
  let client = new HypeLab({
    URL: 'https://api.hypelab-staging.com',
    // URL: 'https://api.hypelab.com', /* Production URL */
    propertySlug: 'demo_property',
    environment: Environment.Development,
    // environment: Environment.Production /* Production Environment */
  });

  return (
    <HypeLabContext client={client}>
      <>{children}</>
    </HypeLabContext>
  );
}
