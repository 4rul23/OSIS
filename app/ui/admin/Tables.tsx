"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Anggota, AnggotaInti, Events } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  DeleteAnggota,
  DeleteAnggotaInti,
  DeleteEvent,
} from "@/app/lib/actions";
import { Instagram } from "@mui/icons-material";

export function AnggotaTable({ anggotas }: { anggotas: Array<Anggota> }) {
  return (
    <Table aria-label="List anggota">
      <TableHeader>
        <TableColumn className="text-center">Nama</TableColumn>
        <TableColumn className="text-center">Jabatan</TableColumn>
        <TableColumn className="text-center">Foto</TableColumn>
        <TableColumn className="text-center">IG</TableColumn>
        <TableColumn className="text-center">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {anggotas &&
          anggotas.map((anggota) => (
            <TableRow key={anggota.id}>
              <TableCell className="min-w-40 text-center">
                {anggota.nama}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                {anggota.jabatan}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={anggota.image} className="text-blue-600 underline">
                  foto
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={anggota.ig} className="text-blue-600 underline">
                  <Instagram />
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Button
                  as={Link}
                  href={`/dashboard/pengurus/bidang/${anggota.idbidang}/edit/${anggota.id}`}
                  className="bg-transparent text-blue-700 underline"
                >
                  Edit
                </Button>
                <Button
                  className="bg-transparent text-red-700 underline"
                  onClick={() => DeleteAnggota(anggota.id, anggota.idbidang)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export function EventsTable({ events }: { events: Array<Events> }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-center">Nama</TableColumn>
        <TableColumn className="text-center">Tanggal</TableColumn>
        <TableColumn className="text-center">Deskripsi</TableColumn>
        <TableColumn className="text-center">Foto</TableColumn>
        <TableColumn className="text-center">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {events &&
          events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="min-w-40 text-center">
                {event.nama}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                {event.tanggal.split("-").reverse().join("-")}
              </TableCell>
              <TableCell className="min-w-96 text-center">
                {event.deskripsi}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={event.foto} className="text-blue-600 underline">
                  foto
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Button
                  as={Link}
                  href={`/dashboard/events/${event.id}`}
                  className="bg-transparent text-blue-700 underline"
                >
                  Edit
                </Button>
                <Button
                  className="bg-transparent text-red-700 underline"
                  onClick={() => DeleteEvent(event.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export function IntiTable({ inti }: { inti: Array<AnggotaInti> }) {
  return (
    <Table aria-label="List anggota">
      <TableHeader>
        <TableColumn className="text-center">Nama</TableColumn>
        <TableColumn className="text-center">Jabatan</TableColumn>
        <TableColumn className="text-center">Foto</TableColumn>
        <TableColumn className="text-center">IG</TableColumn>
        <TableColumn className="text-center">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {inti &&
          inti.map((inti) => (
            <TableRow key={inti.id}>
              <TableCell className="min-w-40 text-center">
                {inti.nama}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                {inti.jabatan}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={inti.image} className="text-blue-600 underline">
                  foto
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={inti.ig} className="text-blue-600 underline">
                  <Instagram />
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Button
                  as={Link}
                  href={`/dashboard/pengurus/inti/edit/${inti.id}`}
                  className="bg-transparent text-blue-700 underline"
                >
                  Edit
                </Button>
                <Button
                  className="bg-transparent text-red-700 underline"
                  onClick={() => DeleteAnggotaInti(inti.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
