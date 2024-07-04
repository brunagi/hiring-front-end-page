

function Header(){
  return(
    <header className='text-2xl'>
      <ul className='flex justify-between items-center bg-lime-500 h-[100px] text-zinc-50' >
        <li>Logo</li>
        <li className="loja">AlugaFácil</li>
        <li>Modelos</li>
        <li>Favoritos</li>
        <li>Cadastre-se</li>
      </ul>
    </header>

  )
}

function Main(){
  return(
    <main>

        <h1>Listagem de Carros</h1>
      <ul>
        <li>Marca 1</li>
        <li>Marca 2</li>
        <li>Marca 3</li>
      </ul>
      
    </main>

  )
}


export default function Home() {
  return (
    <div>

      <Header/>
      <Main/>



    </div>
  );
}