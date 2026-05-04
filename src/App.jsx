import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Card'
import { NavBar } from './NavBar'
import { Contact } from './Contact'



function App() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  
  const handleScroll = () =>  {
    const currentScroll = window.scrollY

    if(currentScroll > lastScroll){
      setShowNavbar(false) 
    }
    else{
      setShowNavbar(true)
    }

    setLastScroll(currentScroll)

  }


  useEffect (() =>{
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[lastScroll])

  return (
    <>
    <div className="fireflies">
  {Array.from({ length: 20 }).map((_, i) => (
    <span key={i}></span>
  ))}


</div>

  <div className={showNavbar ? "navbar show" : "navbar hide"}>
  
  <NavBar/>
    </div>

    <div className='container'>
      <div className='judul' id='about'>
       <h1>Funfact Of Every Anime Character</h1>
     </div>
     <div className='kartu'>
     <Card nama = "Reze" img = "/reze.jpg" kematian = "/rezeDeath.jpg" isi = "Kematian Reze dalam Chainsaw Man terjadi saat ia akhirnya memilih meninggalkan misinya dan berniat kembali menemui Denji untuk kabur bersama, menandakan perubahan perasaannya yang mulai tulus, namun sebelum sempat bertemu, ia dicegat oleh Makima yang dengan kekuatan dan kendali absolutnya langsung membunuh Reze secara cepat, membuat momen tragis itu terasa pahit karena Reze sebenarnya sudah ingin meninggalkan kehidupannya sebagai senjata dan memilih jalan baru bersama Denji"
></Card>
     <Card nama = "Rengoku" img = "/rengoku.jpg" kematian="/rengokuDeath.jpg" isi = "Kematian Kyojuro Rengoku dalam Demon Slayer: Mugen Train terjadi setelah ia bertarung melawan Akaza demi melindungi penumpang dan Tanjiro Kamado; meski berhasil menahan musuh hingga matahari terbit, ia menerima luka fatal dan gugur sambil tetap tegar serta memberi pesan penyemangat."></Card>
     <Card nama = "Eren Yeager" img = "/eren.jpg" kematian="/erenDeath.jpg" isi = "Kematian Eren Yeager dalam Attack on Titan terjadi di puncak konflik besar saat ia menjalankan rencana “Rumbling” yang menghancurkan sebagian besar dunia demi melindungi orang-orang yang ia sayangi, pada akhirnya, Mikasa Ackerman menjadi orang yang menghentikannya dengan membunuh Eren secara langsung, sebuah keputusan berat yang didasari cinta sekaligus tanggung jawab, sehingga kematiannya bukan sekadar kekalahan, tetapi penutup tragis dari perjuangan dan pilihan ekstrem yang ia ambil."></Card>
     <Card nama = "Kira" img = "/light.jpg" kematian="/kiraDeath.jpg" isi ="Kematian Light Yagami dalam Death Note terjadi saat identitasnya terbongkar oleh Near, dan dalam kondisi terdesak ia mencoba memanfaatkan Ryuk, namun justru Ryuk yang menuliskan namanya di Death Note, mengakhiri hidupnya dan menjadikan kematiannya ironi sebagai “dewa” yang jatuh jadi manusia biasa."></Card>
     <Card nama = "Nanami" img = "/nanami.jpg" kematian="/nanamiDeath.jpg" isi ="Kematian Kento Nanami dalam Jujutsu Kaisen terjadi saat insiden Shibuya ketika ia sudah kelelahan dan terluka parah, namun tetap menjalankan tugasnya hingga akhirnya dibunuh oleh Mahito, membuat kematiannya terasa tragis karena ia bertahan sampai akhir."></Card>
     <Card nama = "D. Ace" img = "/ace.jpg" kematian="/aceDeath.webp" isi ="Kematian Portgas D. Ace dalam One Piece terjadi saat perang Marineford ketika ia mengorbankan diri untuk melindungi Monkey D. Luffy dari serangan Akainu; meski sudah hampir selamat, ia menerima luka fatal dan gugur sambil mengucapkan terima kasih atas cinta yang ia terima."></Card>
     <Card nama = "Koro Sensei" img = "/koro.jpg" kematian="/koroDeath.webp" isi ="Kematian Koro-sensei dalam Assassination Classroom terjadi saat murid Kelas 3-E akhirnya menjalankan misi mereka untuk membunuhnya demi menyelamatkan bumi, meskipun mereka sudah sangat dekat dengannya, di akhir, Nagisa Shiota menjadi orang yang mengakhiri hidupnya, membuat momen itu terasa sangat menyedihkan karena mereka kehilangan sosok guru yang benar-benar peduli."></Card>
     <Card nama = "Ai Hoshino" img = "/ai.jpg" kematian="/aiDeath.webp" isi ="Ai meninggal secara tiba-tiba di momen yang harusnya bahagia, tepat di depan anaknya sendiri, dan baru di detik terakhir ia benar-benar memahami arti cinta, bikin scene ini terasa sangat kejam."></Card>
     </div>
    </div>
    

    <Contact></Contact>
    </>
   
  )
}

export default App
