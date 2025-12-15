import { Pool } from 'pg';

const db = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// 2. Exporte a variável nomeada
export default db;