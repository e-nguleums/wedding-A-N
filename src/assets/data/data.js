export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Agung Aprianto',
            child: 'Putra Pertama',
            father: 'Alm. Yatni',
            mother: 'Pujiatti',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Nurhalimah',
            child: 'Putri Pertama',
            father: 'Sajarudin',
            mother: 'Kusmiati',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '06',
            day: 'Senin',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '26',
            day: 'Jumat',
            hours: {
                start: '07.00',
                finish: 'Selesai'
            }
        },
        address: 'Blok.Babakanjati, RT 01/ RW 04, Dsn.Sindangsari, Ds.Sukamaju, Kec.Mangunjaya, Kab.Pangandaran'
    },

    link: {
        calendar: 'https://calendar.app.google/7jHC1g8ixPwmZZgR9',
        map: 'https://maps.app.goo.gl/bdjii4rhdnuQJeod7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
    ],

    bank: [
        {
            id: 1,
            name: 'Nurhalimah',
            icon: './src/assets/images/bni.png',
            rekening: '1738733291'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzSnP75U6e1oGd2EHdz9E3zJnWt4FbctTtTNdpLDrsUqeGaUPvk2ppx_nGcOtOyKwZC/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
export const config = {
    mainEvent: 'reception' // 'marriage' atau 'reception'
};