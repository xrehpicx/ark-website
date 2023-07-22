import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";

export default component$(() => {
  return (
    <div class="min-h-screen bg-background text-foreground">
      <Hero />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Arc",
  meta: [
    {
      name: "description",
      content: "Arc Datacenter",
    },
  ],
};
