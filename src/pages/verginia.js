import Image from 'next/image'



export default function Verginia() {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
      <div className=" grid grid-cols-2 bg-slate-400  flex-wrap shadow-lg  mb-14 mt-10 rounded-2xl">
        <div className="flex justify-center">
          <div className="block p-10 ml-4">
              <h5 className="text-blue-900 text-3xl leading-tight font-bold mb-10">A Verginia</h5>
              <p className="text-gray-700 text-base mb-4">
              Desde 1991, a Verginia tem mudado o tom da cidade. Criamos tendências, entregamos sorrisos e construímos belas histórias. O grupo Verginia atua como revenda e distribuidora de tintas, ferramentas e acessórios em Curitiba e região metropolitana. Temos orgulho da relação de respeito, confiança e dedicação que temos com nossos clientes e colaboradores. Nosso compromisso é oferecer a melhor solução para você!
              </p>
          </div>
        </div>
        <Image className=" rounded-2xl" src="/img/loja-matriz.jpg" width={650} height={450}  alt=""/>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full mb-8">
    <div className="p-6 border rounded-2xl border-blue-900">
    <div  className="m-auto w-20 mt-5">
    <div className="inline-flex  rounded-full border-2 p-6 border-blue-900">
    <Image className=" " src="/img/missao.svg" width={60} height={60}  alt=""/>
	</div>

    </div>
	<div className="font-bold text-2xl text-blue-800 text-center mt-2 mb-3 ">
      <h2>MISSÃO</h2>
	</div>
  <div className=" w-7 m-auto border-b-4 border-blue-900">
      
	</div>

	<p className="mt-8 mb-12 text-sm text-blue-800  text-center">
  Construir um mundo melhor, mais colorido e cheio de vida, oferecendo produtos e serviços que valorizam e renovam ambientes.
	</p>
  </div>
  <div className="p-6 border rounded-2xl border-blue-900">
    <div  className="m-auto w-20 mt-5">
    <div className="inline-flex  rounded-full border-2 p-6 border-blue-900">
    <Image className=" " src="/img/visao.svg" width={60} height={60}  alt=""/>
	</div>

    </div>
	<div className="font-bold text-2xl text-blue-800 text-center mt-2 mb-3 ">
      <h2>VISÃO</h2>
	</div>
  <div className=" w-7 m-auto border-b-4 border-blue-900">
      
	</div>

	<p className="mt-8 mb-12 text-sm text-blue-800  text-center">
    Ser reconhecida como uma empresa inovadora e eficaz no setor de tintas e materiais de pintura e acabamento. Explorando as melhores oportunidades de negócio para atingir um crescimento sustentável à organização.
	</p>
  </div>
  <div className="p-6 border rounded-2xl border-blue-900">
    <div  className="m-auto w-20 mt-5">
    <div className="inline-flex  rounded-full border-2 p-6 border-blue-900">
    <Image className=" " src="/img/valores.svg" width={60} height={60}  alt=""/>
	</div>

    </div>
	<div className="font-bold text-2xl text-blue-800 text-center mt-2 mb-3 ">
      <h2>VALORES</h2>
	</div>
  <div className=" w-7 m-auto border-b-4 border-blue-900">
      
	</div>

	<p className="mt-8 mb-12 text-sm text-blue-800  text-center">
    - Ética e confiança 
    <br />
    <span>Foco no cliente e nas pessoas</span>
    <br />
    <span>- Colaboração e trabalho em equipe </span>
    <br />
    <span>- Orientação para soluções e resultados </span>
    <br />
    <span>- Harmonia entre os envolvidos</span>
	</p>
  </div>
    </div>
    <h2 className="text-blue-900 text-center font-bold text-4xl p-6 ">Diferenciais Verginia</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 w-full">
  <div className="p-6  flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-slate-400 rounded-3xl overflow-hidden">
  <Image className=" " src="/img/vendedor.svg" width={200} height={100}  alt=""/>

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		  Consultoria e suporte técnico
	  </h3>

	  <p className="mt-2 text-sm md:text-sm text-gray-600">
		- Dúvidas
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Visitas nas obras
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Diagnóstico
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
    - Especificação de patologias e solução do sistema de pintura mais indicado para a obra.
	  </p>

	</div>
  </div>
  <div className="p-6  flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-slate-400 rounded-3xl overflow-hidden">
  <Image className=" " src="/img/vendedor.svg" width={200} height={100}  alt=""/>

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		  Consultoria e suporte técnico
	  </h3>

	  <p className="mt-2 text-sm md:text-sm text-gray-600">
		- Dúvidas
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Visitas nas obras
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Diagnóstico
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
    - Especificação de patologias e solução do sistema de pintura mais indicado para a obra.
	  </p>

	</div>
  </div>
  <div className="p-6 mb-8 flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-slate-400 rounded-3xl overflow-hidden">
  <Image className=" " src="/img/vendedor.svg" width={200} height={100}  alt=""/>

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		  Consultoria e suporte técnico
	  </h3>

	  <p className="mt-2 text-sm md:text-sm text-gray-600">
		- Dúvidas
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Visitas nas obras
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Diagnóstico
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
    - Especificação de patologias e solução do sistema de pintura mais indicado para a obra.
	  </p>

	</div>
  </div>
  <div className="p-6 mb-8 flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-slate-400 rounded-3xl overflow-hidden">
  <Image className=" " src="/img/vendedor.svg" width={200} height={100}  alt=""/>

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		  Consultoria e suporte técnico
	  </h3>

	  <p className="mt-2 text-sm md:text-sm text-gray-600">
		- Dúvidas
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Visitas nas obras
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
		 - Diagnóstico
	  </p>
    <p className="mt-2 text-sm md:text-sm text-gray-600">
    - Especificação de patologias e solução do sistema de pintura mais indicado para a obra.
	  </p>

	</div>
  </div>
</div>
    </div>
    </>
  )
}