export default function Header() {
  return (
    <header className="lg:flex px-main mx-auto py-12 bg-loja-blue-lighter">
      <div>
        <h1 className='text-white uppercase text-xl'>Materiais de Construção em Votorantim</h1>
        <p className='text-white mt-5'>Entrega Rápida, Preços Justos e Vendedores Treinados para Atender a sua Necessidade</p>
      </div>
      <div className="lg:grow">
        <a 
          href="https://api.whatsapp.com/send?phone=5515988065019&text=Olá, eu gostaria de fazer um pedido com vocês"
          className='block mt-5 bg-loja-red text-white cursor-pointer w-fit p-4 text-center m-auto hover:bg-gray-500'
          target="_blank"
          >
          <p className='uppercase text-sm font-bold'>Faça seu pedido pelo Whatsapp</p>              
        </a>
      </div>      
    </header>
  )
}