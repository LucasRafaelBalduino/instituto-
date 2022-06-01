import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex bg-white flex-wrap  justify-between p-4 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
      <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>
                Menu
              </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
      </div>
      <div className=" flex items-center">
          <a className="flex-shrink-0" href="">
            <Image src="/img/logo.svg" width={150} height={83} />
          </a>
      </div>
      <div className="navbar-menu hidden md:block ">
        <div className="flex space-x-4 justify-end border-b border-blue-900 mb-4 p-2 ">
         <button type="button" className="rounded-tl-2xl  inline-block px-8 py-2  bg-blue-100 text-slate-400 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">NOSSAS LOJAS</button>
          <button type="button" className=" rounded-br-2xl inline-block px-8 py-2 bg-Lime-400  text-slate-400 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-Lime-700 hover:shadow-lg focus:bg-Lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">COMPRE ONLINE</button>
        </div>
        <Link href="/verginia">
            <a  className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              A VERGINA
            </a>
            </Link>
            <Link href="/mais_cor">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              INSTITUTO VERGINIA
            </a>
            </Link>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              PARA PROFISSIONAIS
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              INDUSTRIA
            </a>
            <Link href="/contact">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              TRABALHE CONOSCO
            </a>
            </Link>
            <Link href="/contact">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
              FALE CONOSCO
            </a>
            </Link>
            <a className="block lg:inline-block mt-4 lg:mt-0 font-bold text-blue-900 hover:text-indigo-600" href="#">
            </a>
      </div>
    </nav>
  )
}