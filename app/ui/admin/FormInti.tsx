"use client";
import { Submit } from "@/app/Button";
import { Select, SelectItem } from "@nextui-org/react";
import InputImage from "./InputImage";
import { useState } from "react";
import { redirect } from "next/navigation";
import { jabatanInti } from "@/app/lib/placeholder-data";
import Image from "next/image";
import { AnggotaInti, Inti } from "@/app/lib/definitions";
import { AddAnggotaInti, EditAnggotaInti, EditInti } from "@/app/lib/actions";

export function EditIntiForm({ detail }: { detail: Inti }) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [tugas, setTugas] = useState<string>(detail.tugasumum);
  const [intro, setIntro] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("tugas", tugas);

    if (intro) {
      formData.append("image-intro", intro);
    }

    const response: { success: boolean; message: string } =
      await EditInti(formData);

    if (response.success) {
      setSuccess(true);
      setMessage(response.message);

      redirect(`/dashboard/pengurus/inti`);
    } else {
      setSuccess(false);
      setMessage(response.message);
    }
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Inti</h1>
      <form action={handleSubmit}>
        <div className="mb-5 grid grid-cols-1" id="wrapper-grid">
          <div className="mb-4 w-full">
            <label htmlFor="tugas" className="mb-2 block">
              Tugas Umum Inti
            </label>
            <textarea
              id="tugas"
              name="tugas"
              rows={2}
              defaultValue={detail.tugasumum}
              onChange={(e) => setTugas(e.target.value)}
              required
              className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            ></textarea>
          </div>
          <div>
            <h1>Current Image</h1>
            <Image
              src={detail.introimage}
              width={200}
              height={200}
              alt={"inti"}
              className="my-2"
            />
            <label htmlFor="intro" className="mb-2 block">
              Foto Intro Inti
            </label>
            <InputImage name="intro" setCompress={setIntro} />
          </div>
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}

export function EditAnggotaForm({ data }: { data: AnggotaInti }) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [nama, setNama] = useState<string>(data.nama);
  const [jabatan, setJabatan] = useState<string>(data.jabatan);
  const [insta, setInsta] = useState<string>(data.ig);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", `${data.id}`);
    formData.append("nama", nama);
    formData.append("jabatan", jabatan);
    formData.append("insta", insta);
    if (image) {
      formData.append("image-anggota", image);
    }

    const response: { success: boolean; message: string } =
      await EditAnggotaInti(formData);

    if (response.success) {
      setSuccess(true);
      setMessage(response.message);

      redirect(`/dashboard/pengurus/inti`);
    } else {
      setSuccess(false);
      setMessage(response.message);
    }
  };
  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Anggota</h1>

      <form action={handleSubmit}>
        <div className="mb-4" id="koor">
          <div className="mb-2">
            <label htmlFor="nama" className="mb-2 block">
              Nama Anggota
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              defaultValue={data.nama}
              onChange={(e) => setNama(e.target.value)}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm  text-default-500"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="jabatan" className="mb-2 block">
              Jabatan Anggota
            </label>
            <Select
              label="Pilih Jabatan"
              radius="sm"
              className="w-full rounded-md border border-gray-500"
              name="jabatan"
              id="jabatan"
              onChange={(e) => setJabatan(e.target.value)}
              defaultSelectedKeys={jabatanInti.indexOf(jabatan).toString()}
            >
              {jabatanInti.map((jabatan, index) => (
                <SelectItem key={index} value={jabatan}>
                  {jabatan}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="mb-4">
            <h1 className="mb-2">Current Image</h1>
            <Image src={data.image} width={200} height={200} alt={data.nama} />
          </div>

          <div>
            <label htmlFor="image-anggota" className="mb-2 block">
              Foto Anggota
            </label>
            <InputImage name="image-anggota" setCompress={setImage} />
          </div>

          <div className="my-2">
            <label htmlFor="insta" className="mb-2 block">
              Instagram Anggota
            </label>
            <input
              type="text"
              id="insta"
              name="insta"
              required
              defaultValue={data.ig}
              onChange={(e) => setInsta(e.target.value)}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm  text-default-500"
            />
          </div>
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}

export function AddAnggotaForm() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [nama, setNama] = useState<string | null>(null);
  const [jabatan, setJabatan] = useState<string | null>(null);
  const [insta, setInsta] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    if (jabatan && nama && image && insta) {
      formData.append("nama", nama);
      formData.append("jabatan", jabatan);
      formData.append("insta", insta);
      formData.append("image-anggota", image);

      const response: { success: boolean; message: string } =
        await AddAnggotaInti(formData);

      if (response.success) {
        setSuccess(true);
        setMessage(response.message);

        redirect(`/dashboard/pengurus/inti`);
      } else {
        setSuccess(false);
        setMessage(response.message);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Anggota Inti</h1>
      <form action={handleSubmit}>
        <div className="mb-4 w-full">
          <label htmlFor="nama" className="mb-2 block">
            Nama Anggota
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            required
            onChange={(e) => setNama(e.target.value)}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="jabatan" className="mb-2 block">
            Jabatan Anggota
          </label>
          <Select
            label="Pilih Jabatan"
            radius="sm"
            className="w-full rounded-md border border-gray-500"
            name="jabatan"
            id="jabatan"
            onChange={(e) => setJabatan(e.target.value)}
          >
            {jabatanInti.map((jabatan) => (
              <SelectItem key={jabatan} value={jabatan}>
                {jabatan}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="image-anggota" className="mb-2 block">
            Foto Anggota
          </label>
          <InputImage name="image-anggota" setCompress={setImage} />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="insta" className="mb-2 block">
            Instagram Anggota
          </label>
          <input
            type="text"
            id="insta"
            name="insta"
            required
            onChange={(e) => setInsta(e.target.value)}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}
