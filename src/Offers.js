import Carousel from 'react-bootstrap/Carousel';

const Offers=()=> {
    // //.log(document.getElementsByClassName('offers')[0].innerHTML)
  return (
    <div className='offers'>
        <Carousel style={{padding:'0',margin:'0'}} variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/pplunrse36nn5qdeuzus"
          alt="First slide"
          style={{height:'50vh'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.shopickr.com/wp-content/uploads/2017/09/bigbasket-diwali-sweets-discount.jpg" alt=''
          style={{height:'50vh'}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://i.ndtvimg.com/i/2018-03/kulfi_620x350_51521531449.jpg"
          alt="Third slide"
          style={{height:'50vh'}}
        />
        <Carousel.Caption>
          <h1 style={{color:'white'}}>NOW AVAILABLE</h1>
          <p style={{color:'white'}}>FIND DELICIOUSE KULFI</p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Offers;