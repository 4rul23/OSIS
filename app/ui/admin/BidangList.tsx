"use client";
import { DeleteBidang } from "@/app/lib/actions";
import { Bidang } from "@/app/lib/definitions";
import { Delete } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function BidangList({ bidangs }: { bidangs: Array<Bidang> }) {
  return (
    <>
      {bidangs.map((bidang) => (
        <li className="findus-link mb-5" key={bidang.id}>
          <div className="flex w-full items-center justify-center">
            <Link href={`/dashboard/pengurus/bidang/${bidang.id}`}>
              Bidang {bidang.id}
            </Link>
            <Button
              onClick={() => DeleteBidang(bidang.id)}
              size="sm"
              className="h-fit bg-transparent px-0"
            >
              <Delete />
            </Button>
          </div>
        </li>
      ))}
    </>
  );
}
