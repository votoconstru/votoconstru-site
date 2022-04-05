import { FaWhatsapp } from "react-icons/fa";

type Product = {
  img: string
  title: string
  price: number
}

export default function Card({img, title, price}: Product) {
  // Formatar preços, trocando ponto por vírgula e adicionando ",00" se necessário
  let strPrice = price.toString().replace('.',',')  
  if (strPrice.split(',').length === 2) {
    if (strPrice.split(',')[1].length === 1) {
      strPrice += '0'
    }
  } else {
    strPrice += ',00'
  }

  return (
    <div className="w-full max-w-sm mx-auto shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: `url('/images/${img}')`}}>
        <a 
          href={`https://api.whatsapp.com/send?phone=5515988065019&text=Olá, eu tenho interesse no produto ${title}`} 
          className="p-2 rounded-full bg-green-400 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500"
          target="_blank"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>
      </div>
      <div className="px-5 py-3 bg-white">
        <h3 className="text-gray-700 uppercase">{title}</h3>
        <span className="text-gray-500 mt-2">R$ {strPrice}</span>
      </div>          
    </div> 
  )
}
