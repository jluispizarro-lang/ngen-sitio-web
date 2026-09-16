import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-8 md:px-9">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="text-[13px] text-stone">{siteContent.footer.copyright}</span>
        <span className="text-[13px] text-stone">{siteContent.footer.coverageLine}</span>
      </div>
    </footer>
  );
}
