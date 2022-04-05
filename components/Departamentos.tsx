import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from "swiper"
import { departamentos } from '../datas'

export default function Departamentos() {
  return (
    <section id='departamentos' className="px-main py-6 bg-gray-400">
      <h2 className="text-xl uppercase mb-6">Departamentos</h2>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,        
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Navigation]}        
      >
        {departamentos.map((departamento, index) => (
          <SwiperSlide key={index}>
            <div className='bg-loja-red py-8'>
              <div className='font-bold text-white text-lg text-center py-2'>
                {departamento}
              </div>
            </div>
          </SwiperSlide>        
        ))}
      </Swiper>
    </section>
  )
}