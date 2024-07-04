export default function Header(){
    return(
        <header className='text-2xl'>
            <ul className='flex justify-between items-center bg-lime-600 h-[100px] text-zinc-50' >
                <li>Logo</li>
                <li className="loja">AlugaFácil</li>
                <li>Modelos</li>
                <li>Favoritos</li>
                <li>Cadastre-se</li>
            </ul>
        </header>
    )
}