import Image from 'next/image'

export default function MaisCord() {
  return(
    <>
    <div className="m-auto  w-96 mt-10">
      <Image src="/img/mais_cor/icon.svg" width={300} height={100}  alt=""/>
    </div>
    <div className=" grid grid-cols-2 bg-slate-400  flex-wrap shadow-lg  mb-14 mt-10 rounded-2xl">
    <div className="flex justify-center">
      <div className="block p-10 ml-4">
          <h5 className="text-blue-900 text-3xl leading-tight font-bold mb-10">Doações de tintas que
          <br />
          <span>beneficiam escolas, instituições e comunidades carentes.</span>
          </h5>
          <p className="text-gray-700 text-sm mb-4 mr-24 text-justify">
          O projeto Verginia + Cor foi criado para contribuir com o desenvolvimento de escolas, instituições e comunidades carentes. Através dele, o Grupo Verginia faz doações de tintas para beneficiar aqueles que mais precisam, proporcionando mais bem-estar, conforto e alegria.
          </p>
          <button type="button" 
            className="inline-block px-6 py-2 border-2 border-blue-900 text-blue-900 font-bold text-xs leading-tight uppercase rounded-xl hover:bg-blue-50 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-10">PARTICIPE DO PROJETO</button>

      </div>
    </div>
    <Image className=" rounded-2xl" src="/img/mais_cor/card.png" width={650} height={450}  alt=""/>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mb-8 bg-slate-400 rounded-2xl">
      <div className="shadow p-5 h-72 rounded-2xl bg-blue-900">
        <div className="p-14">
          <p className="mt-4 text-3xl font-bold text-slate-400 ">
            Fale Conosco
          </p>

          <p className="mt-4 text-slate-400">
          Deixe sua dúvida ou comentário abaixo que em breve um dos nossos atendentes entrará em contato.
          </p>

          <p className="mt-14 text-xl text-slate-400 font-bold ">
            Canais de Atendimento
          </p>
          <p className="mt-4 text-xl text-slate-400 font-bold">
            Canais de Atendimento
          </p>
          <p className="mt-4 text-xs text-slate-400 font-medium mb-6">
            Rua Teffé 1124, casa 9 
            <br />
            <span>Bom Retiro - CEP 80520-110</span>
            <br />
            <span>Telefone: (41) 3030-3030</span>
          </p>
        </div>
      </div>
      <div className="block p-6 rounded-lg w-full">
  <form>
    <div className="grid grid-cols-2 gap-4 mb-4 mt-16">
      <div className="form-group mb-6">
        <input type="text" className="form-control
            block
            w-full
            px-3
            py-2.5
            text-base
            font-normal
            text-blue-900
            bg-slate-400 bg-clip-padding
            border border-solid border-blue-900
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-blue-900 focus:bg-slate-400 focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="First name"/>
      </div>
      <div className="form-group mb-6">
        <input type="text" className="form-control
            block
            w-full
            px-3
            py-2.5
            text-base
            font-normal
            text-blue-900
            bg-slate-400 bg-clip-padding
            border border-solid border-blue-900
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-blue-900 focus:bg-slate-400 focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Last name" />
      </div>
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
            w-full
            px-3
            py-2.5
            text-base
            font-normal
            text-blue-900
            bg-slate-400 bg-clip-padding
            border border-solid border-blue-900
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-blue-900 focus:bg-slate-400 focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address" />
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
            w-full
            px-3
            py-2.5
            text-base
            font-normal
            text-blue-900
            bg-slate-400 bg-clip-padding
            border border-solid border-blue-900
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-blue-900 focus:bg-slate-400 focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Assunto" />
    </div>
    <div className="col-span-2">
      <label className="text-blue-900" >
        <textarea className="
        flex-1 
        appearance-none 
        border border-blue-900 
        w-full py-2 px-4 bg-slate-400 
        text-blue-900 placeholder-gray-400 
        rounded-lg text-base focus:outline-none 
        focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
        id="comment" placeholder="Mensagem" name="comment" rows="5" cols="40">
        </textarea>
      </label>
    </div>
    <div className="col-span-2">
      <label className="text-blue-900" >
        <textarea className="
        flex-1 
        appearance-none 
        border border-blue-900 
        w-full py-2 px-4 bg-slate-400 
        text-blue-900 placeholder-gray-400 
        rounded-lg text-base focus:outline-none 
        focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
        id="comment" placeholder="Mensagem" name="comment" rows="5" cols="40">
        </textarea>
      </label>
    </div>
    <div className="col-span-2">
      <label className="text-blue-900" >
        <textarea className="
        flex-1 
        appearance-none 
        border border-blue-900 
        w-full py-2 px-4 bg-slate-400 
        text-blue-900 placeholder-gray-400 
        rounded-lg text-base focus:outline-none 
        focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
        id="comment" placeholder="Mensagem" name="comment" rows="5" cols="40">
        </textarea>
      </label>
    </div>
    <div className="col-span-2">
      <label className="text-blue-900" >
        <textarea className="
        flex-1 
        appearance-none 
        border border-blue-900 
        w-full py-2 px-4 bg-slate-400 
        text-blue-900 placeholder-gray-400 
        rounded-lg text-base focus:outline-none 
        focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
        id="comment" placeholder="Mensagem" name="comment" rows="5" cols="40">
        </textarea>
      </label>
    </div>
    <button type="submit" className="
    mt-8
    w-48
      px-6
      py-2.5
      bg-blue-900
      text-slate-100
      font-bold
      text-base
      leading-tight
      uppercase
      rounded-2xl
      shadow-md
      hover:bg-blue-400 hover:shadow-lg
      focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-400 active:shadow-lg
      transition
      duration-150
      ease-in-out">ENVIAR</button>
        </form>
      </div>
    </div>
</>

  )
}