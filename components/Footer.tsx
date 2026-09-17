import { siteContent } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-8 md:px-9">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6 opacity-70" />
          <span className="text-[13px] text-stone">{siteContent.footer.copyright}</span>
        </div>
        <span className="text-[13px] text-stone">{siteContent.footer.coverageLine}</span>
      </div>
    </footer>
  );
}
