"use client";
import { Edit } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export function EditButton({ data }: { data: string }) {
  return (
    <Link href={`/dashboard/form/${data}/edit`}>
      <Edit />
    </Link>
  );
}

export function Submit({ name }: { name: string }) {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} type="submit" className="mt-5">
      {name}
    </Button>
  );
}

export function SubmitValue({
  name,
  value,
  buttonName,
}: {
  name: string;
  value: string;
  buttonName: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type="submit"
      name={buttonName}
      value={value}
      className="mt-5"
    >
      {name}
    </Button>
  );
}
