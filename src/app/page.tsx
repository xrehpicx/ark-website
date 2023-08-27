import { ArkLogo } from "@/components/logo";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full relative">
          <div className="graph-grid bg-gradient-to-t from-black w-full h-full to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
      <header className="max-w-md relative z-10 pt-[40vh] mx-auto">
        <div className="flex items-center justify-center mb-1 gap-1">
          <ArkLogo width={18} height={18} />
          <p className="font-display font-medium leading-tight text-lg">Ark</p>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-sm mx-auto gap-1">
          <ServiceLink href="https://ark.cialabs.tech">Ark Proxmox</ServiceLink>
          <ServiceLink href="https://vault.cialabs.tech">
            VaultWarden
          </ServiceLink>
          <ServiceLink href="https://bin.cialabs.tech">
            Collaborative Pastebin
          </ServiceLink>
          <ServiceLink href="https://OpenWrt.cialabs.tech">OpenWrt</ServiceLink>
          <ServiceLink href="https://switch1.cialabs.tech">Switch</ServiceLink>
          <ServiceLink href="https://monitoring.cialabs.tech">
            Uptime
          </ServiceLink>
        </div>
      </header>
    </main>
  );
}

function ServiceLink({ href, children }: PropsWithChildren<{ href?: string }>) {
  return (
    <a
      href={href}
      className="rounded-md border border-primary/20 px-2 py-1 text-xs transition-all hover:border-accent"
      target="_blank"
    >
      {children}
    </a>
  );
}
