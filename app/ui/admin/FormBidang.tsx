"use client";
import { Anggota, Bidang } from "@/app/lib/definitions";
import { Select, SelectItem } from "@nextui-org/react";
import InputImage from "./InputImage";
import {
  AddAnggota,
  AddBidang,
  EditAnggota,
  EditBidang,
} from "@/app/lib/actions";
import { useState } from "react";
import { redirect } from "next/navigation";
import { jabatanBidang } from "@/app/lib/placeholder-data";
import Image from "next/image";
import { Submit } from "@/app/Button";

export function EditBidangForm({
  params,
  detail,
}: {
  params: { id: string };
  detail: Bidang;
}) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [nama, setNama] = useState<string>(detail.nama);
  const [tugas, setTugas] = useState<string>(detail.tugasumum);
  const [intro, setIntro] = useState<File | null>(null);
  const [card, setCard] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", params.id);
    formData.append("nama", nama);
    formData.append("tugas", tugas);

    if (intro) {
      formData.append("image-intro", intro);
    }

    if (card) {
      formData.append("image-card", card);
    }

    const response: { success: boolean; message: string } =
      await EditBidang(formData);

    if (response.success) {
      setSuccess(true);
      setMessage(response.message);

      redirect(`/dashboard/pengurus/bidang/${params.id}`);
    } else {
      setSuccess(false);
      setMessage(response.message);
    }
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Bidang {params.id}</h1>
      <form action={handleSubmit}>
        <div
          className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2"
          id="wrapper-grid"
        >
          <div className="mb-4 w-full">
            <label htmlFor="nama" className="mb-2 block">
              Nama Bidang {params.id}
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              defaultValue={detail.nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="tugas" className="mb-2 block">
              Tugas Umum Bidang {params.id}
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
              alt={detail.nama}
              className="my-2"
            />
            <label htmlFor="intro" className="mb-2 block">
              Foto Intro Bidang {params.id}
            </label>
            <InputImage name="intro" setCompress={setIntro} />
          </div>
          <div className="mb-4 w-full">
            <h1>Current Image</h1>
            <Image
              src={detail.cardimage}
              width={200}
              height={200}
              alt={detail.nama}
              className="my-2"
            />
            <label htmlFor="card" className="mb-2 block">
              Foto Card Bidang {params.id}
            </label>
            <InputImage name="card" setCompress={setCard} />
          </div>
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}

export function EditAnggotaForm({ data }: { data: Anggota }) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [nama, setNama] = useState<string>(data.nama);
  const [jabatan, setJabatan] = useState<string>(data.jabatan);
  const [insta, setInsta] = useState<string>(data.ig);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", `${data.id}-${data.idbidang}`);
    formData.append("nama", nama);
    formData.append("jabatan", jabatan);
    formData.append("insta", insta);
    if (image) {
      formData.append("image-anggota", image);
    }
    const response: { success: boolean; message: string } =
      await EditAnggota(formData);

    if (response.success) {
      setSuccess(true);
      setMessage(response.message);

      redirect(`/dashboard/pengurus/bidang/${data.idbidang}`);
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
              defaultSelectedKeys={jabatanBidang.indexOf(jabatan).toString()}
            >
              {jabatanBidang.map((jabatan, index) => (
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

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}

export function AddAnggotaForm({ id }: { id: string }) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [nama, setNama] = useState<string | null>(null);
  const [jabatan, setJabatan] = useState<string | null>(null);
  const [insta, setInsta] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    if (jabatan && nama && image && insta) {
      formData.append("id", id);
      formData.append("nama", nama);
      formData.append("jabatan", jabatan);
      formData.append("insta", insta);
      formData.append("image-anggota", image);

      const response: { success: boolean; message: string } =
        await AddAnggota(formData);

      if (response.success) {
        setSuccess(true);
        setMessage(response.message);

        redirect(`/dashboard/pengurus/bidang/${id}`);
      } else {
        setSuccess(false);
        setMessage(response.message);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Anggota Bidang {id}</h1>
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
            {jabatanBidang.map((jabatan) => (
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

export function TambahBidangForm() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [nama, setNama] = useState<string | null>(null);
  const [tugas, setTugas] = useState<string | null>(null);
  const [intro, setIntro] = useState<File | null>(null);
  const [card, setCard] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    if (intro && card && nama && tugas && id) {
      formData.append("id", id);
      formData.append("nama", nama);
      formData.append("tugas", tugas);
      formData.append("image-intro", intro);
      formData.append("image-card", card);

      const response: { success: boolean; message: string } =
        await AddBidang(formData);

      if (response.success) {
        setSuccess(true);
        setMessage(response.message);

        redirect("/dashboard/pengurus");
      } else {
        setSuccess(false);
        setMessage(response.message);
      }
    }
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Bidang</h1>
      <form action={handleSubmit}>
        <div
          className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2"
          id="wrapper-grid"
        >
          <div className="mb-4 w-full">
            <label htmlFor="nama" className="mb-2 block">
              Nama Bidang
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              onChange={(e) => {
                setNama(e.target.value);
              }}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="nama" className="mb-2 block">
              Bidang ke -
            </label>
            <input
              type="number"
              id="id"
              onChange={(e) => {
                setId(e.target.value);
              }}
              name="id"
              required
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>

          <div>
            <label htmlFor="image-intro" className="mb-2 block">
              Foto Intro
            </label>
            <InputImage name="image-intro" setCompress={setIntro} />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="image-card" className="mb-2 block">
              Foto Card
            </label>
            <InputImage name="image-card" setCompress={setCard} />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="tugas" className="mb-2 block">
              Tugas Umum
            </label>
            <textarea
              id="tugas"
              name="tugas"
              rows={2}
              required
              onChange={(e) => {
                setTugas(e.target.value);
              }}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            ></textarea>
          </div>
        </div>

        <Submit name="Submit" />

        {message && success && <p className="mt-5 text-green-500">{message}</p>}
        {message && !success && <p className="mt-5 text-red-700">{message}</p>}
      </form>
    </div>
  );
}
