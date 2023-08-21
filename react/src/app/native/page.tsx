'use client';

import { Native, NativeLink, NativeMediaContent } from 'hypelab-react';

export default function Page() {
  return (
    <div className="w-1/3">
      <Native placement="native_placement">
        {(ad) =>
          ad && ad.icon ? (
            <div className="bg-black p-5">
              <div className="relative flex items-center">
                <div className="flex-shrink-0">
                  <img data-cy="icon" className="mr-5 h-10 w-10 rounded-full" src={ad.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="font-medium text-slate-400">
                    @<span data-cy="advertiser">{ad.advertiser}</span>
                  </p>
                  <p data-cy="displayUrl" className="text-sm text-emerald-300">
                    {ad.displayUrl}
                  </p>
                </div>
              </div>
              <div className="body-row text-left">
                <div data-cy="headline" className="mt-3 text-white">
                  {ad.headline}
                </div>

                <div data-cy="body" className="mt-3 text-white">
                  {ad.body}
                </div>

                <div className="mt-5">
                  <div data-cy="ctaLink">
                    <NativeLink>
                      <div data-cy="mediaContent" className="mediaContent">
                        <NativeMediaContent />
                      </div>
                      <div
                        data-cy="ctaText"
                        className="mt-5 rounded-full bg-emerald-300 px-10 py-2 text-center font-bold text-black"
                      >
                        {ad.ctaText}
                      </div>
                    </NativeLink>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        }
      </Native>
    </div>
  );
}
