import React, { useState } from "react";
import l1 from '../assets/images/l1.jpg'
import l2 from '../assets/images/l2.jpg'
import l3 from '../assets/images/l3.jpg'
import l4 from '../assets/images/l4.jpg'
import it1 from '../assets/images/it1.jpg'
// import it2 from '../assets/images/it2.jpg'
// import it3 from '../assets/images/it3.jpg'
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 5px;
  font-size: 4em;
`;
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export default function GallerySection() {
    const [items] = useState([l1, l2, l3, l4, it1]);

    return (
        <div>
            <div className='container' style={{ marginTop: 70 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Gallery</h2>
                    <Link to='/'>View All</Link>
                </div>


                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}
                        autoPlaySpeed={4000}
                        enableAutoPlay={true}
                        showArrows={false}
                    >
                        {items.map((item, i) => (
                            <Item key={i}>
                                <img width='100%' height='100%' src={item} alt="" />
                            </Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
