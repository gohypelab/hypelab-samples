import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex-col p-5">
      <h1 className="mb-3">HypeLab Publisher SDK Examples</h1>
      <ul>
        <li>
          <a className="underline text-blue-600" href="/banner">
            Banner
          </a>
        </li>
        <li>
          <a className="underline text-blue-600" href="/native">
            Native
          </a>
        </li>
        <li>
          <a className="underline text-blue-600" href="/rewarded">
            Rewarded
          </a>
        </li>
      </ul>
    </main>
  );
}
