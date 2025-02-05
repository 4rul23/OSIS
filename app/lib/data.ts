import { sql } from "@vercel/postgres";
import {
  Anggota,
  AnggotaInti,
  Bidang,
  Events,
  Inti,
  Misi,
  PesanKetos,
} from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getAllBidang() {
  noStore();

  try {
    const data = await sql<Bidang>`SELECT * FROM bidangs ORDER BY id`;
    return data.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch all bidang");
  }
}

export async function getDetailBidang(id: string) {
  noStore();

  try {
    const data =
      await sql<Bidang>`SELECT * FROM bidangs WHERE id = ${id.toString()}`;
    return data.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch detail bidang");
  }
}

export async function getAbout() {
  noStore();

  try {
    const about = await sql`SELECT * FROM aboutosis`;
    const visi = await sql`SELECT * FROM visiosis`;
    const misi = await sql<Misi>`SELECT * FROM misiosis ORDER BY id`;
    return {
      about: about.rows[0].about,
      visi: visi.rows[0].visi,
      misi: misi.rows,
    };
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch about");
  }
}

export async function getPesanKetos() {
  noStore();

  try {
    const pesan = await sql<PesanKetos>`SELECT * FROM pesanketos`;
    return pesan.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch pesan ketos");
  }
}

export async function getIntroImage() {
  noStore();
  try {
    const introImage = await sql`SELECT * FROM intropage LIMIT 1`;
    if (!introImage.rows[0]) {
      return { image: '/images/intro-default.jpg' };
    }
    return introImage.rows[0];
  } catch (err) {
    console.log(err);
    return { image: '/images/intro-default.jpg' };
  }
}

export async function getAllEvents() {
  noStore();

  try {
    const events = await sql<Events>`SELECT * FROM events`;
    return events.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function get3Events() {
  noStore();

  try {
    const events =
      await sql<Events>`SELECT * FROM events ORDER BY id DESC LIMIT 3`;
    return events.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function getDetailEvent(id: string) {
  noStore();

  try {
    const events = await sql<Events>`SELECT * FROM events WHERE id=${id}`;
    return events.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch events");
  }
}

export async function getAllAnggota(id: string) {
  noStore();

  try {
    const anggotas =
      await sql<Anggota>`SELECT * FROM anggotas WHERE idbidang=${id} ORDER BY id`;
    return anggotas.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota");
  }
}

export async function getAllAnggotaOnly(id: string) {
  noStore();

  try {
    const anggotas =
      await sql<Anggota>`SELECT * FROM anggotas WHERE jabatan != 'Koordinator' and idbidang=${id} ORDER BY id`;
    return anggotas.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota");
  }
}

export async function getDetailAnggota(id: string) {
  noStore();

  try {
    const anggota = await sql<Anggota>`SELECT * FROM anggotas WHERE id=${id}`;
    return anggota.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota");
  }
}

export async function getAllAnggotaInti() {
  noStore();

  try {
    const anggotaintis =
      await sql<AnggotaInti>`SELECT * FROM AnggotaIntis ORDER BY id`;
    return anggotaintis.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}

export async function getAllAnggotaIntiOnly() {
  noStore();

  try {
    const ketos =
      await sql<AnggotaInti>`SELECT * FROM AnggotaIntis WHERE jabatan!='Ketua OSIS' ORDER BY id`;
    return ketos.rows;
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}

export async function getKetos() {
  noStore();

  try {
    const anggotaintis =
      await sql<AnggotaInti>`SELECT * FROM AnggotaIntis WHERE jabatan='Ketua OSIS'`;
    return anggotaintis.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}

export async function getKoor(id: string) {
  noStore();

  try {
    const koor =
      await sql<Anggota>`SELECT * FROM anggotas WHERE jabatan='Koordinator' and idbidang=${id}`;
    return koor.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}

export async function getIntiData() {
  noStore();

  try {
    const inti = await sql<Inti>`SELECT * FROM intis`;
    return { ...inti.rows[0], nama: "Inti OSIS" };
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}

export async function getDetailAnggotaInti(id: string) {
  noStore();

  try {
    const anggotaintis =
      await sql<AnggotaInti>`SELECT * FROM AnggotaIntis WHERE id=${id}`;
    return anggotaintis.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("failed fetch anggota inti");
  }
}
