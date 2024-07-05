import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const carros=[
          {id:1,marca:'audi',modelo:'A4',classe:'Compacto',ano:'1996'},
          {id:2,marca:'toyota',modelo:'Corolla',classe:'Compacto',ano:'1993'},
          {id:3,marca:'j.k.motors',modelo:'BMW535i',classe:'Midsize',ano:'1992'},

]

export default function Main(){
    const [marca, setMarca]=useState('')
    const [linhas, setLinhas]=useState<any[]>([])

    function criarLinhas(cat:any){
        setMarca(cat)
        let l:any[]=[]
        carros.forEach((c:any)=>{
            if(c.marca==cat){
                l.push(
                
                <div className="flex flex-row w-[500px]" key={c.id}>
                    <div className="w-full">{c.modelo}</div>
                    <div className="w-full">{c.classe}</div>
                    <div className="w-full">{c.ano}</div>
                </div>       
                )
            }
        })
        setLinhas(l)

    }

    return(
        <div className=' text-black' >
            <Header/>

            <label>Selecione a Marca</label>
            <select value={marca} onChange={(evt)=>{criarLinhas(evt.target.value)}}>
                <option value=''>Nenhum</option>
                <option value='audi'>Audi</option>
                <option value='toyota'>Toyota</option>
                <option value='j.k.motors'>J.K. Motors</option>

            </select>

            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Modelo</div>
                    <div className="w-full">Classe</div>
                    <div className="w-full">Ano</div>

                </div>

                {linhas}
            </div>

            <Footer/>

        </div>
    )
}