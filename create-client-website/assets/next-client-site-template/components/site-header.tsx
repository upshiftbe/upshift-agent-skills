import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="/">
          {site.name}
        </a>
        <div className="nav-links">
          {site.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
