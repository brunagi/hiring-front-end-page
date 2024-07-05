import Link from "next/link";


export default function Header(){
    return(
        <header className='text-2xl'>
            <ul className='flex justify-between items-center bg-lime-600 h-[100px] text-zinc-50' >
                <li>Logo</li>
                <li> <Link href={"/"} className="loja">AlugaFácil </Link> </li>
                <li> <Link href={"/favoritos/favoritos"}>Favoritos</Link> </li>
                <li> <Link href={"/reservas/reservas"}>Suas Reservas</Link> </li>
                <li> <Link href={"/inputs/inputs"}>Cadastre-se</Link> </li>
            </ul>

        </header>
    )
}