import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Carousel() {

  return (
    <>
      <MDBCarousel showIndicators showControls fade className='carousel'>
        {/* <Link to="/applycard" className='blackbox'><MDBBtn color='danger' outline className='btncarousal'>Apply For Card</MDBBtn></Link> */}
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement className='carosule' height={400} src='https://i.dawn.com/primary/2020/05/5ec211100d87f.jpg' alt='...' />
            <MDBCarouselCaption id="cp">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>

          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement height={400} src='https://www.unsdglearn.org/wp-content/uploads/2020/03/SDG_Indicators_2.3.1-and-2.3_Labour-productivity-and-income-of-small-scale-food-producers-aspect-ratio-1920x1080-1.jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement height={400} src='https://www.dss-hr.com/blog/wp-content/uploads/2019/11/salary-negotiation.jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement height={400} src='https://www.projectmanager.com/wp-content/uploads/2018/10/181126_Blog_Feature_Negotiating_Workplace.jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}