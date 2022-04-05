import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";
import Card from "./Card";
import { products } from '../datas'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function Destaques() {
  return (
    <section id='destaques' className="px-main py-6 bg-gray-100 text-gray-800">
      <h2 className="text-xl uppercase mb-6">Produtos em destaque</h2>

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
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card              
              img={product.img}
              title={product.title}
              price={product.price}
            />         
          </SwiperSlide>
        ))}            
      </Swiper>

      <p className='mt-6'>Para mais ofertas nos mande uma mensagem dizendo o que precisa e faremos o possível para conseguir o melhor preço para você</p>
    </section>
  )
}