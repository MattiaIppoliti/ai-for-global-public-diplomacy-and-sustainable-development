import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

const GITHUB_URL =
  "https://github.com/MattiaIppoliti/ai-for-global-public-diplomacy-and-sustainable-development";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex shrink-0 items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Luiss-icon.png"
            alt="Luiss"
            style={{ height: 28, width: "auto", objectFit: "contain" }}
          />
          <span className="font-semibold leading-none">Luiss Docs</span>
        </span>
      ),
      url: "/",
    },
    githubUrl: GITHUB_URL,
  };
}
