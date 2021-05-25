// Components
import TestimonialBoxStyleOne from './TestimonialBoxStyleOne'
// Assets
import Ebay from 'public/assets/media/icons/ebay.svg'
import Cnn from 'public/assets/media/icons/cnn.svg'
import Google from 'public/assets/media/icons/google.svg'

const TestimonialsStyleOne = () => {
  return (
    <>
      <section className="containerSection" >
        <main className="centeredBlock" >
          <article className="text-col" >
            <h2 className="gradientFont-day" >We run clouds for</h2>
            <div className="client-logos" >
              <img alt="ebay" src={Ebay} />
              <img alt="cnn" src={Cnn} />
              <img alt="Google" src={Google} />
              <img alt="cnn" src={Cnn} />
              <img alt="Google" src={Google} />
              <img alt="ebay" src={Ebay} />
            </div>
            <p>
              At VEXXHOST, we offer cost-conscious, complete, and widely flexible infrastructure and cloud solutions, allowing users to take.
            </p>
          </article>
          <article className="testimonials-col" >
            <ul>
              <li>
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
              </li>
              <li>
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
              </li>
              <li>
                <TestimonialBoxStyleOne />
                <TestimonialBoxStyleOne />
              </li>
            </ul>
          </article>
        </main>
      </section>
      <style jsx>{`
        section {
          min-height: 100vh;

        }
        h2 {
          font-weight: 700;
          margin-bottom: 0;
        }
        main {
          display: grid;
          grid-template-columns: 350px auto;
          column-gap: 150px;
          align-items: center;
          width: 100%;
          margin-right: 0;
          max-height: 100vh;
          overflow: hidden;
        }
        main .text-col {
          display: flex;
          flex-direction: column;
        }
        main .text-col p {
          font-weight: 100;
        }
        main .text-col .client-logos img {
          width: 100%;
        }
        main .text-col .client-logos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 40px 0;
        }
        .testimonials-col {
          height: 100%;
        }
        .testimonials-col ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          list-style: none;
          align-items: center;
        }
        .testimonials-col ul li > :global(div) {
          margin-bottom: 30px;
        }
        .testimonials-col ul li:nth-child(1) {
          margin-top: 30px;
        }
        .testimonials-col ul li:nth-child(2) {
          margin-top: -130px;
        }
      `}</style>
    </>
  )
}

export default TestimonialsStyleOne