import http from 'node:http';
import { Pool } from 'pg';

const PORT = 8080;

// Create a PostgreSQL connection pool - Hardcoded in real app must be in the env file
const pool = new Pool({
	host: 'postgres',
	port: 5432,
	user: 'user',
	password: 'strongPassword',
	database: 'motorcycles',
});

const initConnection = async () => {
	try {
		await pool.connect();
		console.log('Connected to the PostgreSQL database');
	} catch (err) {
		console.error('Error connecting to the database:', err);
		process.exit(1);
	}
};

const initServer = async () => {
	const server = http.createServer(async (req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET');

		if (req.url === '/motorcycles' && req.method === 'GET') {
			try {
				const result = await pool.query('SELECT * FROM motorcycles');
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(result.rows));
				console.log('Sent motorcycles data');
			} catch (err) {
				console.error('Error fetching data:', err);
				res.writeHead(500, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify({ error: `internal server error: ${err.message}` }));
			}
		} else {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ error: 'Not found' }));
		}
	});

	server.listen(PORT, () => console.log(`Server is up at http://localhost:${PORT}`));
};

const startApp = async () => {
	console.log('\nStarting application...');
	await initConnection();
	await initServer();
}

startApp();