//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });


function Header(){
  return(
    <header>
      <ul>
        <li>Logo</li>
        <li>Modelos</li>
        <li>Reservas</li>
      </ul>
    </header>

  )
}


export default function Home() {
  return (
    <main>

      <Header/>

      <div> <h1>Listagem de Carros</h1>
      <ul>
        <li>Marca 1</li>
        <li>Marca 2</li>
        <li>Marca 3</li>
      </ul>

      </div>

    </main>
  );
}