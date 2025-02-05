"use client";
import { AddEvent, EditEvent } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import InputImage from "./InputImage";
import { useEffect, useState } from "react";
import { Events } from "@/app/lib/definitions";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Submit } from "@/app/Button";

export function EditEventForm({ data }: { data: Events }) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [nama, setNama] = useState<string>(data.nama);
  const [tanggal, setTanggal] = useState<string>(data.tanggal);
  const [desc, setDesc] = useState<string>(data.deskripsi);
  const [event, setEvent] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", data.id.toString());
    formData.append("namaEvent", nama);
    formData.append("tanggalEvent", tanggal);
    formData.append("desc", desc);

    if (event) {
      formData.append("image-event", event);
    }

    const response: { success: boolean; message: string } =
      await EditEvent(formData);

    if (response.success) {
      setSuccess(true);
      setMessage(response.message);

      redirect("/dashboard/events");
    } else {
      setSuccess(false);
      setMessage(response.message);
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Event</h1>
      <form action={handleSubmit}>
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            name="namaEvent"
            required
            defaultValue={data.nama}
            onChange={(e) => {
              setNama(e.target.value);
            }}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="tanggalEvent" className="mb-2 block">
            Tanggal Event
          </label>
          <input
            type="date"
            id="tanggalEvent"
            required
            name="tanggalEvent"
            onChange={(e) => {
              setTanggal(e.target.value);
            }}
            defaultValue={data.tanggal}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="desc" className="mb-2 block">
            Deskripsi Event
          </label>
          <textarea
            id="desc"
            name="desc"
            required
            rows={5}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            defaultValue={data.deskripsi}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Current Image</h3>
          <Image src={data.foto} width={300} height={300} alt="Current image" />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image-event" className="mb-2 block">
            Foto Event
          </label>
          <InputImage name="image-event" setCompress={setEvent} />
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}

export function AddEventForm() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [nama, setNama] = useState<string | null>(null);
  const [tanggal, setTanggal] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [event, setEvent] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();

    if (event && nama && tanggal && desc) {
      formData.append("namaEvent", nama);
      formData.append("tanggalEvent", tanggal);
      formData.append("desc", desc);
      formData.append("image-event", event);

      const response: { success: boolean; message: string } =
        await AddEvent(formData);

      if (response.success) {
        setSuccess(true);
        setMessage(response.message);

        redirect("/dashboard/events");
      } else {
        setSuccess(false);
        setMessage(response.message);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Event</h1>
      <form action={handleSubmit} method="POST">
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            onChange={(e) => {
              setNama(e.target.value);
            }}
            name="namaEvent"
            required
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="tanggalEvent" className="mb-2 block">
            Tanggal Event
          </label>
          <input
            type="date"
            id="tanggalEvent"
            onChange={(e) => {
              setTanggal(e.target.value);
            }}
            required
            name="tanggalEvent"
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="desc" className="mb-2 block">
            Deskripsi Event
          </label>
          <textarea
            id="desc"
            name="desc"
            rows={5}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image-event" className="mb-2 block">
            Foto Event
          </label>
          <InputImage name="image-event" setCompress={setEvent} />
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}
