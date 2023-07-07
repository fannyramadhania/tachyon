import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import './css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mile from './assets/img/base milestone.png';
import mileline from './assets/img/base milestone2.png';
import mileline2 from './assets/img/base milestone3.png';
import item2007 from './assets/img/2007.png';
import item2008 from './assets/img/2008.png';
import item2009 from './assets/img/2009.png';
import item2011 from './assets/img/2011.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    AOS.init({
      once: false // Hanya menerapkan animasi sekali saat elemen muncul dalam viewport
    });
  }, []);
  return (
    <div className="App">

      <div className='content-1'></div>
      <div className='col-10 m-auto d-block content-2'>
        <h4>SOLUSI INTERNET TERBAIK UNTUK KEBUTUHAN ANDA</h4>
        <p className='mt-4'>Dengan kemampuan kami, serta dukungan yang maksimal dari seluruh mitra-kerja kami, maka kami yakin bahwa
          PT Remala Abadi akan mampu memberikan pelayanan yang maksimal dengan biaya yang jauh lebih kompetitif.
          PT. Remala Abadi berniat untuk tumbuh bersama dengan mitra-kerja, pelanggan, dan karyawan.</p>
      </div>
      <div className='outcontent-3'>
        <div className='content-3 col-7 m-auto d-block'>
          <h5>History</h5>
          <p>Adalah salah satu Internet Service Provider
            yang mana telah berdiri sejak tahun 2007 dibawah manajemen PT. Remala Abadi.
            Kami melayanai kebutuhan Akses Internet, Network & IT Solution yang menjadikan sebuah layanan
            Managed Services yang didukung dengan sumber daya manuasia yang profesional dan dukungan
            infrastruktur jaringan yang handal yang berupa jaringan Fiber Optic maupun Wireless yang
            menggunakan teknologi terbaru. Dengan selalu berfikir kreatif dan inovatif serta yakin dan optimis
            untuk dapat memberikan layanan serta solusi yang tepat, handal dan tentunya efektif dan efisien.untuk dapat memberikan layanan serta solusi yang tepat, handal dan tentunya efektif dan efisien.
          </p>
          <p>
            Perusahaan kami telah berpengalaman melayani kebutuhan layanan Telekomunikasi dan Internet di
            berbagai jenis usaha, baik di segmen Korporasi, Industri Telekomunikasi, Pemerintahan, Kementerian dan Lembaga, Perbankan, Pariwisata, Pendidikan, dll.</p>
          <p>
            Berbekal pengalaman dibidang telekomunikasi serta jaringan internet Tachyon Network Indonesia terus
            melakukan pengembangan layanan untuk memenuhi semua kebutuhan customer yang semakin dinamis,
            dengan kami bekerja bersama group dan partner perusahaan, kami bersinergi dalam pengembangan
            produk / layanan-layanan kami.produk / layanan-layanan kami. Adapun group perusahaan kami saat ini meliputi beberapa perusahaan </p>
        </div>
      </div>
      <div className='content-4 d-flex justify-content-around'>
        <div className='col-4'>
          <h3>VISION</h3>
          <div className='boxcontent-4'>
            <p>
              Menjadi Penyedia Layanan
              Internet & Solusi yang utama di Indonesia
              (Ultimate Internet Solution)
            </p>
          </div>


        </div>
        <div className='col-4'>
          <h3>MISION</h3>
          <div className='boxcontent-4'>
            <p> Selalu berfikir kreatif dan inovatif
              serta berkomitmen agar dapat memberikan
              layanan serta solusi yang tepat dan handal
              yang dapat diandalkan oleh semua pelanggan.

            </p>
          </div>


        </div>
      </div>
      <div className='' style={{height:'120vh'}}>
        <h3 className='text-center text-white mt-5'>MILESTONE</h3>
        <div className='content-5 mt-3'>
          <div className='mile3 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={mile} className='img-fluid' />
          </div>
          <div className='mile4 col-1' data-aos="fade" data-aos-duration="1000">
            <img src={mileline2} className='img-fluid' />
          </div>
          <div className='mile5 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={mile} className='img-fluid' />
          </div>
          <div className='mile6 col-1' data-aos="fade" data-aos-duration="1000">
            <img src={mileline} className='img-fluid' />
          </div>
          <div className='item col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={item2007} className='img-fluid' />
          </div>

          <div className='mile7 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={mile} className='img-fluid' />
          </div>
          <div className='mile8 col-1' data-aos="fade" data-aos-duration="1000">
            <img src={mileline2} className='img-fluid' />
          </div>
          <div className='item2 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={item2008} className='img-fluid' />
          </div>
          <div className='mile9 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={mile} className='img-fluid' />
          </div>
          <div className='mile10 col-1' data-aos="fade" data-aos-duration="1000">
            <img src={mileline} className='img-fluid' />
          </div>
          <div className='item3 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={item2009} className='img-fluid' />
          </div>
          <div className='mile11 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={mile} className='img-fluid' />
          </div>
          <div className='item4 col-1' data-aos="zoom-in" data-aos-duration="1000">
            <img src={item2011} className='img-fluid' />
          </div>


        </div>
      </div>
      {/* <div className='content-6 d-flex justify-content-center text-white fw-bold'>
        <div className='col-3 text-center'>
          <h1>16+</h1>
          <h2>YEARS</h2>
        </div>
        <div className='col-3 text-center'>
          <h1>3616+</h1>
          <h2>CLIENTS</h2>
        </div>
        <div className='col-3 text-center'>
          <h1>240+</h1>
          <h2>EMPLOYEES</h2>
        </div>
      </div> */}
    </div>
  );
}

export default App;
