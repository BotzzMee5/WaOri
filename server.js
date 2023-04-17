impor { fileURLToPath, URL } dari 'url'

impor {gabung, dirname} dari 'jalur'

impor {Server} dari "socket.io"

impor ekspres dari 'ekspres'

impor http dari 'http'

aplikasi const = ekspres()

server const = http.createServer(aplikasi);

const __dirname = dirname(fileURLToPath(import.meta.url))

const io = Server baru (server);

fungsi ekspor terhubung (conn, PORT) {

	app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index.html');

});

io.on('koneksi', (soket) => {

  console.log('pengguna terhubung');

  socket.on('pesan obrolan', (msg) => {

    console.log('pesan: ' + pesan);

  });

  socket.on('putus', () => {

    console.log('pengguna terputus');

  });

});

server.mendengarkan(PORT, () => {

  console.log('mendengarkan di *:3000');

});

}

