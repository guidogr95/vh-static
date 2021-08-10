import { useRef, useState } from 'react'
// Utils
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// Assets
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// Styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation])

const SwiperStyleOne = ({
    CardComponent,
    spaceBetween = 50,
    initialItemsInSwipe = 6,
    itemsToAdd = 2,
    slidesPerView = 2,
    title,
    content,
    breakpoints
}) => {

  if (!Array.isArray(content) || content?.length === 0 || !CardComponent) return null

  const prevElRef = useRef(null)
  const nextElRef = useRef(null)
  const [itemsInSwipe, setItemsInSwipe] = useState(initialItemsInSwipe)
  const handlePagination = () => {
    if (itemsInSwipe < content.length) setItemsInSwipe(itemsInSwipe + itemsToAdd)
  }

  return (
    <>
      <section className="centeredBlock section-pd-md" >
        <div className="section-title mb-xlg" >
          <h2 className="gradientFont-day mb-none mw-md" >
            {title}
          </h2>
          <div className="custom-swiper-nav--s1" >
            <button
              ref={prevElRef}
              className="nav-btn-base--1 prev"
            >
              <FiChevronLeft/>
            </button>
            <button
              ref={nextElRef}
              className="nav-btn-base--1 next"
              onClick={handlePagination}
            >
              <FiChevronRight/>
            </button>
          </div>
        </div>
        <div className="swiper-block mb-xlg" >
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => handlePagination()}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevElRef.current
              swiper.params.navigation.nextEl = nextElRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            breakpoints={breakpoints}
          >
            {content.slice(0, itemsInSwipe).map(item => {
              return (
                <SwiperSlide key={item.created_at || item.id}>
                  <CardComponent {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <style jsx>{`
        section {
          padding-right: 0;
          padding-left: 0;
        }
        .section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .swiper-block :global(.swiper-container) {
          overflow: visible;
        }
        .swiper-block :global(.swiper-slide) {
          height: auto;
        }
      `}</style>
    </>
  )
}

export default SwiperStyleOne