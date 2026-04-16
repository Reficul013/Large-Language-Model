import { modules } from "@/data/modules";
import ModulePageContent from "@/components/ModulePageContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) {
    notFound();
  }

  return <ModulePageContent mod={mod} />;
}
