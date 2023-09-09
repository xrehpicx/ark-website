import { ArkLogo } from "@/components/logo";
import { StyledNotion } from "@/components/notion/styled";
import { NotionAPI } from "notion-client";
import { getPageTitle } from "notion-utils";
import { PropsWithChildren } from "react";

export default async function Home() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("7fba3b3b6a104bbc8b590105f0e3c479");
  const title = getPageTitle(recordMap);

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full relative">
          <div className="graph-grid bg-gradient-to-t from-black w-full h-full to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
      <header className="max-w-2xl relative pb-[20vh] z-10 pt-[20vh] mx-auto">
        <div className="flex items-center md:mb-1 mb-8 gap-1">
          <ArkLogo width={38} height={38} />
          <p className="font-display font-medium leading-tight text-4xl">
            {title}
          </p>
        </div>
        <StyledNotion
          className="text-balanced"
          blockId="7fba3b3b6a104bbc8b590105f0e3c479"
        />
        <Services />
      </header>
    </main>
  );
}

function Services() {
  return (
    <div>
      {/* <h1 className="">Services</h1> */}
      <div className="flex flex-wrap items-center max-w-sm gap-1">
        <ServiceLink href="https://ark.cialabs.tech">Ark Proxmox</ServiceLink>
        <ServiceLink href="https://vault.cialabs.tech">VaultWarden</ServiceLink>
        <ServiceLink href="https://bin.cialabs.tech">
          Collaborative Pastebin
        </ServiceLink>
        <ServiceLink href="https://OpenWrt.cialabs.tech">OpenWrt</ServiceLink>
        <ServiceLink href="https://switch1.cialabs.tech">Switch</ServiceLink>
        <ServiceLink href="https://monitoring.cialabs.tech">Uptime</ServiceLink>
      </div>
    </div>
  );
}

function ServiceLink({ href, children }: PropsWithChildren<{ href?: string }>) {
  return (
    <a
      href={href}
      className="rounded-md border border-primary/20 md:px-2 md:py-1 md:text-xs text-lg px-4 py-3 transition-all hover:border-accent"
      target="_blank"
    >
      {children}
    </a>
  );
}
