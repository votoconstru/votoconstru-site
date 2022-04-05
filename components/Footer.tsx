import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-loja-blue text-white px-main py-6">
      <div id="contato" className='lg:flex lg:justify-between'>
        <div>
          <p className='flex items-center'>
            <FaMapMarkerAlt />
            <a
              className='underline'
              href="https://www.google.com/maps/place/Votoconstru/@-23.5621896,-47.4582453,18.5z/data=!4m5!3m4!1s0x94c58961cd6d72f9:0x9abb69dcbedd7225!8m2!3d-23.5622612!4d-47.4578838"
              target="_blank"
            >
              &nbsp;Egydio Ribeiro, 135 - Jd. Serrano II - Votorantim
            </a>
          </p>
          <div className="flex items-center">
            <FaPhone />
            <p>&nbsp;(15) 3242-7763 /&nbsp;</p>
            <FaWhatsapp />
            <p>&nbsp;(15) 98806-5019</p>
          </div>
          <div className='flex items-center'>
            <FaEnvelope />
            <p>&nbsp;comercial@votoconstru.com.br</p>
          </div>
          <div className="flex items-center">
            <FaFacebook /> 
            <p>&nbsp;/&nbsp;</p>
            <FaInstagram />            
            <p>&nbsp;votoconstru</p>
          </div>
        </div>
        <div className='mt-4 lg:mt-0'>
          <p>Horários:</p>
          <p>Segunda à Sexta: 08:00h às 18:00h</p>
          <p>Sábado: 08:00h às 14:00h</p>
        </div>
      </div>
    </footer>
  )
}