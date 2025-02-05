const { db } = require("@vercel/postgres");
const {
  bidangs,
  admins,
  misi,
  visi,
  about,
  PesanKetos,
} = require("../app/lib/placeholder-data");
const bcrypt = require("bcrypt");

async function createAnggota(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS anggotas`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS anggotas (
        id SERIAL PRIMARY KEY,
        idbidang INTEGER,
        nama VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        jabatan VARCHAR(255) NOT NULL,
        ig VARCHAR(255) NOT NULL,
        FOREIGN KEY (idbidang) REFERENCES bidangs(id)
        );
    `;

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding anggota:", error);
    throw error;
  }
}

async function createInti(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS intis`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS intis (
        tugasumum TEXT NOT NULL,
        introimage TEXT NOT NULL
        );
    `;

    const insertedInti = await client.sql`
    INSERT INTO intis (tugasumum, introimage)
    VALUES ('balbalbal', 'balblablablab');
    `;

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding inti:", error);
    throw error;
  }
}

async function createAnggotaInti(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS AnggotaIntis`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS AnggotaIntis (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        jabatan VARCHAR(255) NOT NULL,
        ig VARCHAR(255) NOT NULL
        );
    `;

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding inti:", error);
    throw error;
  }
}

async function createBidang(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS bidangs`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS bidangs (
        id INT PRIMARY KEY,
        nama TEXT NOT NULL,
        tugasumum VARCHAR(255) NOT NULL,
        introImage TEXT NOT NULL,
        cardImage TEXT NOT NULL
        );
    `;

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding bidangs:", error);
    throw error;
  }
}

async function seedVisi(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS visiosis`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS VisiOSIS (
        id SERIAL PRIMARY KEY,
        visi TEXT NOT NULL
        );
    `;

    console.log(`Created "visiMisi" table`);

    const insertedVisi = await client.sql`
    INSERT INTO VisiOSIS (visi)
    VALUES (${visi})
    ON CONFLICT (id) DO NOTHING;
  `;

    console.log(`Seeded visi`);

    return {
      createTable,
      visi: insertedVisi,
    };
  } catch (error) {
    console.error("Error seeding visi :", error);
    throw error;
  }
}

async function seedMisi(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS misiosis`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS MisiOSIS (
        id SERIAL PRIMARY KEY,
        misi TEXT NOT NULL
        );
    `;

    console.log(`Created "misi" table`);

    const insertedMisis = await Promise.all(
      misi.map(async (m) => {
        return client.sql`
        INSERT INTO MisiOSIS (misi)
        VALUES (${m})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded misi`);

    return {
      createTable,
      misi: insertedMisis,
    };
  } catch (error) {
    console.error("Error seeding misi :", error);
    throw error;
  }
}

async function seedAbout(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS aboutosis`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS aboutosis (
        id SERIAL PRIMARY KEY,
        about TEXT NOT NULL
        );
    `;

    console.log(`Created "about" table`);

    const insertedAbout = await client.sql`
        INSERT INTO aboutosis (about)
        VALUES (${about})
        ON CONFLICT (id) DO NOTHING;
      `;

    console.log(`Seeded about`);

    return {
      createTable,
      about: insertedAbout,
    };
  } catch (error) {
    console.error("Error seeding about :", error);
    throw error;
  }
}

async function seedPesan(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS pesanketos`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS pesanketos (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        periode VARCHAR(255) NOT NULL,
        pesan TEXT NOT NULL,
        image TEXT
        );
    `;

    console.log(`Created "pesanketos" table`);

    const insertedPesan = await client.sql`
        INSERT INTO pesanketos (nama, periode, pesan)
        VALUES (${PesanKetos.nama}, ${PesanKetos.periode}, ${PesanKetos.pesan})
        ON CONFLICT (id) DO NOTHING;
      `;

    console.log(`Seeded ${insertedPesan.length}`);

    return {
      createTable,
      pesanketos: insertedPesan,
    };
  } catch (error) {
    console.error("Error seeding pesan ketos:", error);
    throw error;
  }
}

async function seedAdmin(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS admins`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        );
    `;

    console.log(`Created "admins" table`);

    const insertedAdmins = await Promise.all(
      admins.map(async (admin) => {
        const hashed_pass = await bcrypt.hash(admin.password, 10);
        return client.sql`
        INSERT INTO admins (nama, email, password)
        VALUES (${admin.nama}, ${admin.email}, ${hashed_pass})
        ON CONFLICT (email) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded admins`);

    return {
      createTable,
      admin: insertedAdmins,
    };
  } catch (error) {
    console.error("Error seeding admins:", error);
    throw error;
  }
}

async function alter(client) {
  try {
    await client.sql`ALTER TABLE bidangs ALTER COLUMN tugasumum TYPE TEXT`;
  } catch (error) {
    console.error("Error alter bidang:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await alter(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
