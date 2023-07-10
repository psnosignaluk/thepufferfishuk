import type { LinksFunction } from "@remix-run/cloudflare";
import { Link, Outlet } from "@remix-run/react";

import stylesUrl from '~/styles/about.css';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function AboutRoute() {
  return (
    <div className="about-layout">
      <header className="about-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Pufferfish Home" aria-label="The Pufferfish">
              <span className="logo-medium">The Pufferfish</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="about-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  )
}