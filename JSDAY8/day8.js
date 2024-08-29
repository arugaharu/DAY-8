function pembelianbuku(judulbuku,hargabuku,diskon,pajak,stok,jumlahbeli,durasikredit){

    //deklarasi variabel
    const pajakdasar = 27;
    let kenapajak = true;
    let jumlahdiskon,hargastlhdiskon,hargapajak,hargaakhir,totalharga;
    let stringharga = "Total : ";
    let jatuhtempo = [];//array utk menyimpan ohjek Date
    let tglskrng = new Date();
    let bulanskrng = tglskrng.getMonth();

    //ammoun diskon
    jumlahdiskon = (hargabuku * diskon) / 100;
    //price after diskon
    hargastlhdiskon = hargabuku - jumlahdiskon;
    //ammoun tax
    hargapajak = (hargastlhdiskon * pajak) / 100;
    //price after tax
    hargaakhir = hargastlhdiskon + hargapajak;
    //stok pembelian buku
    for (let i = 0; i < jumlahbeli; i++) {
        if (stok === 0) {
            console.log("Stok buku habis");
            break;
        }
        stok--;
    }
    //menampilkan jatuhtempo
    for (let i = 1; i <= durasikredit; i++) {
        let dueDate = new Date(tglskrng.getFullYear(), bulanskrng + i, 29);
        let dueDateStr = dueDate.toLocaleString('id-ID', { day:'numeric',month: 'long', year: 'numeric' });
        jatuhtempo.push(`Jatuh tempo bulan ke-${i}: ${dueDateStr}`);
    }
    //tootal harga (belanja lebih dari 1)
    totalharga = hargaakhir * jumlahbeli;


    console.log("Judul Buku: " + judulbuku);
    console.log("Harga Normal: Rp" + hargabuku);
    console.log("Diskon (Berapa Persen): " + diskon + "%");
    console.log("Diskon (Berapa Ribu): Rp" + jumlahdiskon);
    console.log("Harga Promo: Rp" + hargastlhdiskon);

    //deklarasi apabila kena tax
    if (kenapajak) {
        console.log("Persentase Pajak: " + pajak + "%");
        console.log("Harga Pajak: Rp" + hargapajak);
        console.log(stringharga + "Rp" + totalharga);
    } else {
        console.log(stringharga + "Rp" + (hargastlhdiskon * jumlahbeli));
    }
    
    //deklarasi info stok
    if (stok > 0) {
        console.log("Sisa stok buku: " + stok);
        console.log("Buku masih tersedia untuk dibeli.");
    } else {
        console.log("Stok buku habis");
    }

    // Menampilkan tanggal jatuh tempo kredit
    console.log("Due Date Kredit:");
    jatuhtempo.forEach(item => console.log(item));

}

pembelianbuku("Lima Sekawan", 500000, 15, 10, 5, 3, 2);
//judulbuku,hargabuku,diskon,pajak,stok,jumlahbeli,durasikredit