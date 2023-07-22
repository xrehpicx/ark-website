import { Slot, component$ } from "@builder.io/qwik";
import { Arklogo } from "./react-utils";

export default component$(() => {
  return (
    <div class="container mx-auto flex h-screen max-w-xl flex-col justify-center gap-2 px-4 text-foreground">
      <section class="flex flex-col justify-center">
        <div class="flex items-center gap-2">
          <Arklogo />
          <h1 class="text-4xl">Ark</h1>
        </div>
        <p class="text-md text-foreground/80">
          Datacenter hosted by{" "}
          <a
            class="text-primary hover:underline"
            href="mailto:ark@cialabs.tech"
          >
            ark@cialabs.tech
          </a>
        </p>
      </section>
      <ul class="flex flex-wrap items-center gap-2">
        <ServiceLink href="https://ark.cialabs.tech">Ark Proxmox</ServiceLink>
        <ServiceLink href="https://vault.cialabs.tech">VaultWarden</ServiceLink>
        <ServiceLink href="https://bin.cialabs.tech">
          Collaborative Pastebin
        </ServiceLink>
        <ServiceLink href="https://OpenWrt.cialabs.tech">OpenWrt</ServiceLink>
        <ServiceLink href="https://switch1.cialabs.tech">Switch</ServiceLink>
        <ServiceLink href="https://monitoring.cialabs.tech">Uptime</ServiceLink>
      </ul>
    </div>
  );
});

const ServiceLink = component$<{ href: string }>(({ href }) => {
  return (
    <a
      href={href}
      class="rounded-md border border-primary/20 px-4 py-3 hover:border-primary"
      target="_blank"
    >
      <Slot />
    </a>
  );
});
