"use client";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DropdownBidang from "./DropdownBidang";
import { Bidang } from "@/app/lib/definitions";
import { Logout } from "@/app/lib/actions";

function NavLink({
  name,
  pathname,
  to,
  setActiveNav,
}: {
  name: string;
  pathname: string;
  to: string;
  setActiveNav: Function;
}) {
  return (
    <Button
      className={clsx(
        "block h-full w-full bg-transparent px-5 text-left font-bold uppercase transition duration-150 hover:text-primary md:w-fit",
        { "text-primary": pathname === to },
      )}
      disableAnimation={true}
      href={to}
      as={Link}
      onClick={() => setActiveNav(false)}
    >
      {name}
    </Button>
  );
}

export default function NavLinks({ bidangs }: { bidangs: Array<Bidang> }) {
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname();
  const isInDashboard = pathname.startsWith("/dashboard");

  return (
    <div>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        onClick={() => {
          setActiveNav(!activeNav);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <ul
        className={`${
          activeNav
            ? "absolute left-0 top-full block w-full scale-100 bg-white px-5 pb-5 shadow-md md:pb-0"
            : "absolute left-0 top-full w-full scale-0"
        } items-center gap-10 font-semibold transition-all duration-200 md:static md:flex md:h-full md:w-full md:scale-100 md:shadow-none`}
      >
        <li>
          <NavLink
            setActiveNav={setActiveNav}
            name="home"
            pathname={pathname}
            to={isInDashboard ? "/dashboard/home" : "/"}
          />
        </li>
        <li>
          <DropdownBidang
            pathname={pathname}
            setActiveNav={setActiveNav}
            isInDashboard={isInDashboard}
            bidangs={bidangs}
          />
        </li>
        <li className="mb-5 md:mb-0">
          <NavLink
            setActiveNav={setActiveNav}
            name="events"
            pathname={pathname}
            to={isInDashboard ? "/dashboard/events" : "/events"}
          />
        </li>
        <li className={`${isInDashboard ? "mb-5 block md:mb-0" : "hidden"}`}>
          <NavLink
            name="Tambah Bidang"
            to="/dashboard/pengurus/bidang/add"
            pathname={pathname}
            setActiveNav={setActiveNav}
          />
        </li>
        <li>
          <form
            action={Logout}
            className={`${isInDashboard ? "block" : "hidden"}`}
          >
            <Button
              disableAnimation={true}
              type="submit"
              className="h-fit w-fit bg-transparent px-5 font-semibold uppercase transition duration-200 hover:text-primary"
            >
              Logout
            </Button>
          </form>
        </li>
      </ul>
    </div>
  );
}
