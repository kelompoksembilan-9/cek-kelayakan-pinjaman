document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai input
    let umur = parseFloat(document.getElementById('umur').value);
    let pendapatan = parseFloat(document.getElementById('pendapatan').value);
    let statusKerja = document.getElementById('status-kerja').value;

    // Lakukan pengecekan kelayakan pinjaman
    let result = document.getElementById('result');
    if (umur >= 21 && umur <= 55) {
        if (pendapatan >= 5) {
            if (statusKerja === 'ya') {
                result.innerHTML = 'Selamat anda berhasil mendapatkan pinjaman.';
            } else {
                result.innerHTML = 'Maaf, Anda tidak layak untuk mengajukan pinjaman karena Anda tidak memiliki pekerjaan tetap.';
            }
        } else {
            result.innerHTML = 'Maaf, Anda tidak layak untuk mengajukan pinjaman karena pendapatan bulanan Anda kurang dari 5 juta rupiah.';
        }
    } else {
        result.innerHTML = 'Maaf, Anda tidak layak untuk mengajukan pinjaman karena usia Anda tidak memenuhi persyaratan (21-55 tahun).';
    }
});
