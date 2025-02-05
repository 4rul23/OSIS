import { Bidang } from "@/app/lib/definitions";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

export default function DropdownBidang({
  pathname,
  setActiveNav,
  bidangs,
  isInDashboard,
}: {
  pathname: string;
  setActiveNav: Function;
  bidangs: Array<Bidang>;
  isInDashboard: boolean;
}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className={clsx(
            "my-5 block h-fit w-full cursor-pointer bg-transparent px-0 text-left font-bold uppercase hover:text-primary md:my-0 md:mb-0 md:w-fit",
            { "text-primary": pathname.includes("pengurus") },
          )}
          aria-label="dropdownBidang"
          disableAnimation={true}
          variant="flat"
        >
          <h1 className="px-5">Bidang</h1>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="dropdownBidang">
        <DropdownItem
          key="inti"
          href={isInDashboard ? "/dashboard/pengurus/inti" : "/pengurus/inti"}
          onClick={() => setActiveNav(false)}
        >
          Pengurus Inti
        </DropdownItem>
        <DropdownSection items={bidangs}>
          {bidangs.map((bidang) => (
            <DropdownItem
              key={`bidang-${bidang.id}`}
              href={
                isInDashboard
                  ? `/dashboard/pengurus/bidang/${bidang.id}`
                  : `/pengurus/bidang/${bidang.id}`
              }
              onClick={() => setActiveNav(false)}
            >
              Bidang {bidang.id}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
