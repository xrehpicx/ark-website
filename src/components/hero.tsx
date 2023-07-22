import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="h-screen gap-2 flex flex-col items-center justify-center text-foreground">
      <section class="flex flex-col items-center justify-center">
        <h1 class="text-8xl">Ark</h1>
        <p class="text-md">Datacenter</p>
      </section>
      <ul class="flex flex-wrap gap-2">
        <ServiceLink href="https://ark.cialabs.tech">Ark Proxmox</ServiceLink>
        <ServiceLink href="https://vault.cialabs.tech">VaultWarden</ServiceLink>
        <ServiceLink href="https://rpad.cialabs.tech">
          Rust Pastebin
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
      class="border px-4 py-3 border-sky-400 rounded-md"
      target="_blank"
    >
      <Slot />
    </a>
  );
});
