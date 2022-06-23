import 'dotenv/config';
import app from './server';

const PORT = process.env.PORT;
const handleListenning = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListenning);
