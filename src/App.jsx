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
     <Card nama = "Rengoku" img = "/rengoku.jpg" kematian="/rengokuDeath.jpg" isi = "Kematian Kyojuro Rengoku dalam Demon Slayer Mugen Train terjadi setelah pertarungan sengit melawan iblis Upper Rank Three, Akaza, di mana Rengoku bertarung habis-habisan untuk melindungi penumpang kereta dan rekan-rekannya seperti Tanjiro Kamado meskipun berhasil menahan Akaza hingga matahari terbit dan mencegah korban lebih banyak, Rengoku mengalami luka yang sangat parah dan akhirnya gugur dengan penuh keteguhan, tetap tersenyum dan menyampaikan pesan terakhir yang menguatkan Tanjiro dan yang lain untuk terus maju."></Card>
     <Card nama = "Eren Yeager" img = "/eren.jpg" kematian="/erenDeath.jpg" isi = "Kematian Eren Yeager dalam Attack on Titan terjadi di puncak konflik besar saat ia menjalankan rencana “Rumbling” yang menghancurkan sebagian besar dunia demi melindungi orang-orang yang ia sayangi, pada akhirnya, Mikasa Ackerman menjadi orang yang menghentikannya dengan membunuh Eren secara langsung, sebuah keputusan berat yang didasari cinta sekaligus tanggung jawab, sehingga kematiannya bukan sekadar kekalahan, tetapi penutup tragis dari perjuangan dan pilihan ekstrem yang ia ambil."></Card>
     <Card nama = "Kira" img = "/light.jpg" kematian="/kiraDeath.jpg" isi ="Kematian Light Yagami (Kira) dalam Death Note terjadi ketika identitasnya akhirnya terbongkar oleh Near dan tim investigasi, setelah rencananya gagal total akibat kesalahan perhitungan terhadap situasi dan orang-orang di sekitarnya dalam kondisi terdesak, Light masih berusaha memanfaatkan Ryuk, namun sesuai aturan Death Note, Ryuk justru menuliskan nama Light di buku tersebut, mengakhiri hidupnya sendiri, sehingga kematiannya menjadi ironi besar dari seseorang yang merasa sebagai “dewa keadilan” menjadi manusia biasa yang tak bisa lolos dari takdirnya sendiri."></Card>
     <Card nama = "Nanami" img = "/nanami.jpg" kematian="/nanamiDeath.jpg" isi ="Kematian Kento Nanami dalam Jujutsu Kaisen terjadi saat insiden Shibuya, ketika ia sudah berada di kondisi sangat lelah dan tubuhnya terluka parah setelah menghadapi banyak kutukan; di tengah situasi kacau, Nanami tetap berjalan maju sambil menenangkan pikirannya dan sempat membayangkan kehidupan sederhana yang ia inginkan, namun akhirnya ia bertemu Mahito yang kemudian mengakhiri hidupnya secara cepat, menjadikan kematiannya terasa tragis karena terjadi saat ia tetap menjalankan tanggung jawabnya sampai detik terakhir."></Card>
     <Card nama = "D. Ace" img = "/ace.jpg" kematian="/aceDeath.webp" isi ="Kematian Portgas D. Ace dalam One Piece terjadi saat perang besar di Marineford, ketika ia sebenarnya sudah berhasil diselamatkan oleh Monkey D. Luffy dan sekutunya, namun kembali terlibat konfrontasi dengan Akainu; dalam momen krusial, Ace mengorbankan dirinya untuk melindungi Luffy dari serangan fatal, sehingga ia menerima luka yang tidak bisa diselamatkan, dan sebelum menghembuskan napas terakhir, ia menyampaikan rasa terima kasih karena telah dicintai, menjadikan kematiannya salah satu momen paling emosional dalam cerita."></Card>
     <Card nama = "Koro Sensei" img = "/koro.jpg" kematian="/koroDeath.webp" isi ="Kematian Koro-sensei dalam Assassination Classroom terjadi saat murid Kelas 3-E akhirnya menjalankan misi mereka untuk membunuhnya demi menyelamatkan bumi, meskipun mereka sudah sangat dekat dengannya, di akhir, Nagisa Shiota menjadi orang yang mengakhiri hidupnya, membuat momen itu terasa sangat menyedihkan karena mereka kehilangan sosok guru yang benar-benar peduli."></Card>
     <Card nama = "Ai Hoshino" img = "/ai.jpg" kematian="/aiDeath.webp" isi ="Ai meninggal secara tiba-tiba di momen yang harusnya bahagia, tepat di depan anaknya sendiri, dan baru di detik terakhir ia benar-benar memahami arti cinta, bikin scene ini terasa sangat kejam."></Card>
     </div>
    </div>
    

    <Contact></Contact>
    </>
   
  )
}

export default App
