import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


const BukuList = () => {
    const [buku, setBuku] = useState([]);
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        window.location.reload();
    };  
    
    useEffect(()=>{
        getBuku();
    },[]);

    const getBuku = async () => {
        try {
            const response = await axios.get('http://localhost:5000/databuku');
            setBuku(response.data); // Assuming response.data is an array of books
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deletebuku = async (id)=> {
        try {
            await axios.delete(`http://localhost:5000/databuku/${id}`)
            getBuku();
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="columns mt-5 is-centered" >
            <div className="column is-half ">
                    {!loggedIn ? (
                    // Render the "Login" button if the user is not logged in
                    <Link to="/login" className="button is-success">Login</Link>
                    ) : (
                    // Render the "Logout" button and "Tambah Buku" button if the user is logged in
                    <>
                        <button onClick={handleLogout} className="button is-warning">Logout</button>
                        <Link to="/add" className="button is-success ml-5">Tambah Buku</Link>
                    </>
                    )}
                <table className='table is-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Kode Buku</th>
                            <th>ISBN</th>
                            <th>Judul Buku</th>
                            <th>Pengarang</th>
                            <th>Sekilas Isi</th>
                            <th>Tanggal Masuk</th>
                            <th>Stok</th>
                            <th>Foto</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buku.map((buku, index) => (
                        <tr key={buku.id}>
                            <td>{index + 1}</td>
                            <td>{buku.kode_buku}</td>
                            <td>{buku.isbn}</td>
                            <td>{buku.judul_buku}</td>
                            <td>{buku.pengarang}</td>
                            <td>{buku.sekilas_isi}</td>
                            <td>{buku.tanggal_masuk}</td>
                            <td>{buku.stok}</td>
                            <td>
                                <img src={buku.foto} alt="Book Cover" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                            </td>
                            <td>
                                {loggedIn && ( 
                                    <>
                                        <Link to ={`edit/${buku.id}`} className='button is-small is-info'>Edit</Link>
                                        <button onClick={() => deletebuku(buku.id)} className="button is-small is-danger mt-1">
                                        Hapus
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                        ) )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BukuList