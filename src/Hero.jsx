import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            modi. Ex accusamus neque, placeat velit at, possimus assumenda
            deleniti quia delectus amet suscipit iure eos accusantium voluptas
            sint laudantium minus aut. Similique, labore minima! Doloremque
            facilis sapiente nisi adipisci, officia inventore dignissimos itaque
            dicta corporis sint libero veniam voluptatibus ducimus.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
