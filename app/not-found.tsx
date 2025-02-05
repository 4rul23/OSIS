import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full py-40 text-center">
      <h2 className="text-8xl font-bold text-primary">404</h2>
      <p className="my-3 text-2xl">Oops! Pages Not Found</p>
      <p className="mb-10">The page you are looking for does not exist.</p>

      <Button className="bg-primary text-white" href="/" as={Link}>
        Return Home
      </Button>
    </div>
  );
}
