const { db } = require('@vercel/postgres');
require('dotenv').config({ path: '.env.local' });
async function testConnection() {
  try {
    const client = await db.connect();
    console.log('Database connected successfully');
    await client.end();
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

testConnection();
