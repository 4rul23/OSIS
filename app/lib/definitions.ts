export type Anggota = {
  id: number;
  idbidang: number;
  nama: string;
  image: string;
  jabatan: string;
  ig: string;
};
export type AnggotaInti = {
  id: number;
  nama: string;
  image: string;
  jabatan: string;
  ig: string;
};

export type Bidang = {
  id: number;
  nama: string;
  tugasumum: string;
  introimage: string;
  cardimage: string;
};

export type Inti = {
  nama: string;
  introimage: string;
  tugasumum: string;
};

export type Admin = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Misi = {
  id: number;
  misi: string;
};

export type PesanKetos = {
  id: number;
  nama: string;
  pesan: string;
  periode: string;
  image: string | null;
};

export type Events = {
  id: number;
  nama: string;
  deskripsi: string;
  tanggal: string;
  foto: string;
};
