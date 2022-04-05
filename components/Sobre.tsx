import Image from "next/image";

export default function Sobre() {
  return (
    <section id='sobre' className="px-main py-6">
      <h2 className="text-xl uppercase mb-6">Sobre Nós</h2>
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <p>O nosso foco está no atendimento do cliente final, recusamos orçamos grandes de construtoras para poder dar prioridade aos nossos clientes locais e continuar fornecendo entregas rápidas e atendimento personalizado para todos.</p>
          <p className="mt-2">A loja existe neste mesmo ponto desde 2007, mas em 2019 passamos por uma reforma, trocamos os administradores e mudamos o nome para Votoconstru. Estamos sempre buscando evoluir e oferecer cada vez mais opções de produtos para os nossos clientes.</p>
          <p className="mt-2">Nos mande uma mensagem no Whatsapp solicitando o seu orçamento e buscaremos as melhores condições para você.</p>
        </div>
        <div className="flex justify-center items-center mt-4 lg:mt-0 lg:grow">
          <img
            src={'/images/foto-loja.jpg'}                        
            alt='Foto da Loja'
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}