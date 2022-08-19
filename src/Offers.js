import Carousel from 'react-bootstrap/Carousel';

const Offers=()=> {
    // console.log(document.getElementsByClassName('offers')[0].innerHTML)
  return (
    <div className='offers'>
        <Carousel style={{padding:'0',margin:'0'}} variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.etimg.com/photo/msid-89390957,quality-100/capture.jpg"
          alt="First slide"
          style={{height:'40vh'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.theoakgrays.co.uk/content/dam/oak-tree-pubs/common/images/dn18/drink/241-cocktails/oaktree-241cocktails.jpg.asset/1622035699489.jpg" alt=''
          style={{height:'40vh'}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://upgradedpoints.com/wp-content/uploads/2021/03/Most-Popular-Cocktails-Featured-Image.png"
          alt="Third slide"
          style={{height:'40vh'}}
        />
        

        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Offers;