import React, { useEffect } from 'react'
import Carousal from '../Components/Carousel';
import Feature from '../Components/Feature';
import GallerySection from '../Components/GallerySection';
import MidFooter from '../Components/MidFooter';
import { testAction } from '../redux/slicers/testSlicer';
const LandingPage = () => {
    useEffect(() => {
        testAction();
    }, [])
    return (
        <div style={{ marginTop: 67 }}>
            <Carousal />
            <Feature />
            <GallerySection />
            <div style={{ marginTop: 10 }} />
            <MidFooter />
        </div>
    )
}

export default LandingPage