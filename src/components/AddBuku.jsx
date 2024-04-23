import { useState } from "react";
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBuku = () => {
    const [kodeBuku, setKodeBuku] = useState("");
    const [isbn, setIsbn] = useState("");
    const [judulBuku, setJudulBuku] = useState("");
    const [pengarang, setPengarang ] = useState("");
    const [sekilasIsi, setSekilasIsi ] = useState("");
    const [tanggalMasuk, setTanggalMasuk ] = useState('');
    const [stok, setStok ] = useState(0); // Default to 0
    const [foto, setFoto] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const simpanBuku = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.get(`http://localhost:5000/checkbook?kodeBuku=${kodeBuku}&isbn=${isbn}`);

            // if (response.data.exists) {
            //     setError("Kode buku atau ISBN sudah ada di dalam database.");
            //     return;
            // }
            const requestData = {
                kode_buku: kodeBuku,
                isbn: isbn,
                judul_buku: judulBuku,
                pengarang: pengarang,
                sekilas_isi: sekilasIsi,
                tanggal_masuk: tanggalMasuk,
                stok: stok,
                foto: foto
            }

            console.log('Request Data:', requestData);
            await axios.post('http://localhost:5000/databuku', requestData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={simpanBuku}>
                    <div className="field">
                        <label className='label'>Kode Buku*</label>
                        <div className="control">
                            <input type="text" className='input'
                            value={kodeBuku} onChange={(e)=> setKodeBuku(e.target.value)} placeholder='Kode Buku' />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>ISBN*</label>
                        <div className="control">
                            <input type="text" className='input' value={isbn} onChange={(e)=> setIsbn(e.target.value)} placeholder='ISBN' />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Judul Buku</label>
                        <div className="control">
                            <input type="text" className='input' 
                            value={judulBuku} onChange={(e)=> setJudulBuku(e.target.value)} placeholder='Judul Buku' />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Pengarang</label>
                        <div className="control">
                            <input type="text" className='input' value={pengarang} onChange={(e)=> setPengarang(e.target.value)} placeholder='Pengarang' />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Sekilas Isi</label>
                        <div className="control">
                            <input type="text" className='input' value={sekilasIsi} onChange={(e)=> setSekilasIsi(e.target.value)} placeholder='Sekilas Isi' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tanggal Masuk</label>
                        <div className="control">
                            <input type="date" className="input" value={tanggalMasuk} onChange={(e)=> setTanggalMasuk(e.target.value)} placeholder="Tanggal Masuk" />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Stok</label>
                        <div className="control">
                        <input
                        type="number"
                        className="input"
                        value={stok.toString()} // Cast to string to avoid NaN warning
                        onChange={(e) => setStok(parseInt(e.target.value) || 0)} // Parse to integer or default to 0
                        placeholder="Stok"
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Foto</label>
                        <div className="control">
                            <input type="text" className='input' value={foto} onChange={(e)=> setFoto(e.target.value)} placeholder='Foto' />
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBuku;
