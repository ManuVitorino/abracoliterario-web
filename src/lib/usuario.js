import db from './db';

export async function getUsuario(id) {
        const result = await db.query('SELECT * FROM usuario WHERE id = $1', [id]);
        return result.rows;
}
