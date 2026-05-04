 import { useState } from "react"
 import './App.css'

 export function Card (props) {
   const [show,setShow] = useState(false)


    return(
 <div className='card'>



      <div className={show ? "content blur" : "content"} >
          <img src={props.img} className="gambar" />  
          <h1 className='nama'>{props.nama}</h1>
         
      </div>

      
        
         <div className={show ? "overlay aktif" : "overlay"}>
           <img src={props.kematian} className="kematian"></img> <p className="isi">{props.isi}</p>
            <button onClick={() => setShow(false) } className="tutup">Tutup</button>
      </div>
      
      {!show &&(
         <button className='tombol' onClick={ () => setShow(!show) }>Lihat Detail</button>
      )}
           
      
           
 </div>
    )
 }
 