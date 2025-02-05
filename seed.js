const { db } = require("@vercel/postgres");
require('dotenv').config({ path: '.env.local' });
const {
  bidangs,
  admins,
  misi,
  visi,
  about,
  PesanKetos,
} = require("./app/lib/placeholder-data");
const bcrypt = require("bcrypt");

async function createBidangs(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS bidangs CASCADE`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS bidangs (
        id SERIAL PRIMARY KEY,
        nama TEXT NOT NULL,
        tugasumum TEXT NOT NULL,
        introImage TEXT NOT NULL,
        cardImage TEXT NOT NULL
      );
    `;
    await Promise.all(
      bidangs.map(
        (bidang) => client.sql`
          INSERT INTO bidangs (nama, tugasumum, introImage, cardImage)
          VALUES (${bidang.nama}, ${bidang.tugasumum}, ${bidang.introImage}, ${bidang.cardImage});
        `
      )
    );
  } catch (error) {
    console.error('Error creating bidangs:', error);
    throw error;
  }
}

async function createAnggotas(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS anggotas`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS anggotas (
        id SERIAL PRIMARY KEY,
        idbidang INTEGER REFERENCES bidangs(id),
        nama VARCHAR(255) NOT NULL,
        image TEXT NOT NULL DEFAULT '/images/default.jpg',
        jabatan VARCHAR(255) NOT NULL,
        ig VARCHAR(255) NOT NULL DEFAULT '@example'
      );
    `;
  } catch (error) {
    console.error('Error creating anggotas:', error);
    throw error;
  }
}

async function createAnggotaIntis(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS AnggotaIntis`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS AnggotaIntis (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        image TEXT NOT NULL DEFAULT '/images/default.jpg',
        jabatan VARCHAR(255) NOT NULL,
        ig VARCHAR(255) NOT NULL DEFAULT '@example'
      );
    `;
  } catch (error) {
    console.error('Error creating AnggotaIntis:', error);
    throw error;
  }
}

async function createIntis(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS intis`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS intis (
        id SERIAL PRIMARY KEY,
        tugasumum TEXT NOT NULL,
        introimage TEXT NOT NULL DEFAULT '/images/default.jpg'
      );
    `;
    await client.sql`
      INSERT INTO intis (tugasumum, introimage)
      VALUES ('Mengkoordinasi seluruh bidang OSIS', '/images/default.jpg');
    `;
  } catch (error) {
    console.error('Error creating intis:', error);
    throw error;
  }
}

async function createEvents(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS events`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image TEXT NOT NULL DEFAULT '/images/default.jpg',
        date DATE NOT NULL DEFAULT CURRENT_DATE
      );
    `;
  } catch (error) {
    console.error('Error creating events:', error);
    throw error;
  }
}

async function createIntroPage(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS intropage`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS intropage (
        id SERIAL PRIMARY KEY,
        image TEXT NOT NULL DEFAULT '/images/default.jpg'
      );
    `;
    await client.sql`
      INSERT INTO intropage (image)
      VALUES ('/images/default.jpg');
    `;
  } catch (error) {
    console.error('Error creating intropage:', error);
    throw error;
  }
}

async function seedVisi(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS visiosis`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS visiosis (
        id SERIAL PRIMARY KEY,
        visi TEXT NOT NULL
      );
    `;
    await client.sql`
      INSERT INTO visiosis (visi)
      VALUES (${visi});
    `;
  } catch (error) {
    console.error('Error seeding visi:', error);
    throw error;
  }
}

async function seedMisi(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS misiosis`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS misiosis (
        id SERIAL PRIMARY KEY,
        misi TEXT NOT NULL
      );
    `;
    await Promise.all(
      misi.map(
        (m) => client.sql`
          INSERT INTO misiosis (misi)
          VALUES (${m});
        `
      )
    );
  } catch (error) {
    console.error('Error seeding misi:', error);
    throw error;
  }
}

async function seedAbout(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS aboutosis`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS aboutosis (
        id SERIAL PRIMARY KEY,
        about TEXT NOT NULL
      );
    `;
    await client.sql`
      INSERT INTO aboutosis (about)
      VALUES (${about});
    `;
  } catch (error) {
    console.error('Error seeding about:', error);
    throw error;
  }
}

async function seedPesan(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS pesanketos`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS pesanketos (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        periode VARCHAR(255) NOT NULL,
        pesan TEXT NOT NULL,
        image TEXT NOT NULL DEFAULT '/images/default.jpg'
      );
    `;
    await client.sql`
      INSERT INTO pesanketos (nama, periode, pesan, image)
      VALUES (${PesanKetos.nama}, ${PesanKetos.periode}, ${PesanKetos.pesan}, ${PesanKetos.image});
    `;
  } catch (error) {
    console.error('Error seeding pesan:', error);
    throw error;
  }
}

async function seedAdmin(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS admins`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    const hashedPassword = await bcrypt.hash(admins[0].password, 10);
    await client.sql`
      INSERT INTO admins (nama, email, password)
      VALUES (${admins[0].nama}, ${admins[0].email}, ${hashedPassword});
    `;
  } catch (error) {
    console.error('Error seeding admin:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await createBidangs(client);
    await createAnggotas(client);
    await createAnggotaIntis(client);
    await createIntis(client);
    await createEvents(client);
    await createIntroPage(client);
    await seedVisi(client);
    await seedMisi(client);
    await seedAbout(client);
    await seedPesan(client);
    await seedAdmin(client);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Database seeding failed:', error);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
  process.exit(1);
});
