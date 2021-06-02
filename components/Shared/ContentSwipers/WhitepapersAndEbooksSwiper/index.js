import { useRef, useState } from 'react'
// Utils
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// Components
import WESwiperCard from './WESwiperCard'
// Component Data
import { WpAndEbooks } from 'utils/imports/siteData'
// Assets
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// Styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation])

const WhitepapersAndEbooksSwiper = () => {

  const prevElRef = useRef(null)
  const nextElRef = useRef(null)
  const [itemsInSwipe, setItemsInSwipe] = useState(6)
  const handlePagination = () => {
    // if ()
    setItemsInSwipe(itemsInSwipe + 2)
  }

  return (
    <>
      <section className="centeredBlock section-pd-md" >
        <div className="section-title mb-xlg" >
          <h2 className="gradientFont-day mb-none mw-md" >
            Know cloud and more
          </h2>
          <div className="custom-swiper-nav--s1" >
            <button
              ref={prevElRef}
              className="prev-button"
            >
              <FiChevronLeft/>
            </button>
            <button
              ref={nextElRef}
              className="next-button"
              onClick={handlePagination}
            >
              <FiChevronRight/>
            </button>
          </div>
        </div>
        <div className="swiper-block mb-xlg" >
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevElRef.current
              swiper.params.navigation.nextEl = nextElRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
          >
            {WpAndEbooks.slice(0, itemsInSwipe).map(item => {
              return (
                <SwiperSlide key={item.created_at}>
                  <WESwiperCard
                    Title={item.Title}
                    Content={item.TextContent}
                    Thumbnail={item?.Thumbnail?.url}
                  />
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

export default WhitepapersAndEbooksSwiper