import { useRef } from 'react'
// Utils
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// Components
import BlogSwiperCard from './BlogSwiperCard'
// Component Data
import { Blogs } from 'utils/imports/siteData'
// Assets
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'
// Styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation])

const BlogSwiper = () => {

  const prevElRef = useRef(null)
  const nextElRef = useRef(null)

  console.log(Blogs)

  return (
    <>
      <section className="centeredBlock section-pd-md" >
        <div className="section-title mb-xlg" >
          <h2 className="gradientFont-day mb-none mw-md" >
            Explore our latest content
          </h2>
          <div className="custom-swiper-nav" >
            <button ref={prevElRef} className="prev-button" >
              <FiChevronLeft/>
            </button>
            <button ref={nextElRef} className="next-button" >
              <FiChevronRight/>
            </button>
          </div>
        </div>
        <div className="swiper-block mb-xlg" >
          {/* <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevElRef.current
              swiper.params.navigation.nextEl = nextElRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
          >
            {WpAndEbooks.map(item => {
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
          </Swiper> */}
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
        .custom-swiper-nav {
          display: grid;
          column-gap: 20px;
          grid-template-columns: repeat(2, 1fr);
        }
        .custom-swiper-nav button {
          color: ${colors.lightPurple};
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2em;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: .3s ease-out all;
        }
        .custom-swiper-nav .prev-button {
          padding-right: 15%; 
        }
        .custom-swiper-nav .next-button {
          padding-left: 15%; 
        }
        .custom-swiper-nav :global(.swiper-button-disabled) {
          opacity: 0.5;
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

export default BlogSwiper