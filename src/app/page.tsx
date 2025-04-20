import { DealOverviewSection } from "@/components/sections/DealOverviewSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen px-2.5 pt-4 pb-8 overflow-x-hidden">
      <div className="relative container m-auto">
        <nav className="mb-4 px-8">
          <Button variant="ghost" size="icon" className="p-2.5">
            <ArrowLeftIcon className="size-6" />
            <span className="sr-only">Go back</span>
          </Button>
        </nav>

        <section className="w-full">
          <DealOverviewSection />
        </section>

        <section className="w-full">
          <InsightsSection />
        </section>
      </div>
    </main>
  );
}
