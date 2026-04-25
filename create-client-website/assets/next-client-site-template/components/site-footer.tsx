import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{site.name}</span>
        <span>{site.footer}</span>
      </div>
    </footer>
  );
}
