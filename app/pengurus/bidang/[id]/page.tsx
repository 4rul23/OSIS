import { Suspense } from "react";
import Pengurus from "@/app/ui/pengurus/Pengurus";
import PengurusSkeleton from "@/app/ui/pengurus/skeletons/PengurusSkeleton";

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Params }) {
  const { id } = params;

  return (
    <Suspense fallback={<PengurusSkeleton />}>
      <Pengurus id={id} />
    </Suspense>
  );
}
