// CombinedComponent.js
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
//import ArrowBackIosIcon from "@mui/icons-material/KeyboardArrowLeft";
//import ArrowForwardIosIcon from "@mui/icons-material/KeyboardArrowRight";
import ProductList from '../routes/ProductList/productList';
import Logo from './logo';
import './home.css';
import './footer.css';
import '../output.css';
import './header.css';
import './about.css';



const Home = () => {
  const sliderItems = [
    {
      type: 'image',
      content: {
        url: 'https://www.labkafe.com/storage/test-tubes-all-you-need-to-know-1.jpg',
      },
    },
    {
      type: 'image',
      content: {
        url: 'https://cdn1.vectorstock.com/i/1000x1000/90/80/chemical-science-lab-equipment-test-tubes-flasks-vector-21709080.jpg',
      },
    },
    {
      type: 'image',
      content: {
        url: 'https://wallpapers.com/images/hd/chemistry-pictures-4qvzw3gjed2dk7me.jpg',
      },
    },
    {
      type: 'image',
      content: {
        url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71nZBHy70jL.jpg',
      },
    },
  ];

  const [activeItemNum, setActiveItem] = useState(0);
  const length = sliderItems.length;

  const nextItem = useCallback(() => {
    setActiveItem((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);


  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, 2000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [activeItemNum, nextItem]);

  return (
    <div id="home-section" className="text-center">
      <section className="relative h-96 flex justify-center items-center overflow-hidden">
        {sliderItems.map((item, index) => (
          <div
            className={`currentItem ${index === activeItemNum ? 'active' : 'opacity-0'}`}
            key={item.content.url}
          >
            <img
              src={item.content.url}
              className="media w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out"
              alt={`Slide ${index + 1}`}
              style={{ display: index === activeItemNum ? 'block' : 'none' }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

const About = () => {
  return (
      <div id='about'>
      <div className='about-design bg-blue-600 text-white'>
          <div className='about-detail bg-blue-700 text-white rounded-lg shadow-md font-bold text-md p-4'>
            <p>Deals in - All type of Laboratory Instrument, Chemical, Pathological Instrument & Accessories</p>
          </div>
      </div>
      </div>
  );

};



const Footer = () => {
    return (
        <div id='footer'>
        <div className='footer-design'>
            <div className='address-detail'>
                <div className='icon-container'>
                    <FontAwesomeIcon icon ={faLocationDot} size='3x' style={{ marginBottom: '16px' }}/>
                </div>
            <h3>Rasra</h3>
            <h3>Ballia,Uttar Pradesh</h3>
            <h4>Pincode: 221712</h4>
            </div>
            <div className='phone-detail'>
            <div className='icon-container'>
                <FontAwesomeIcon icon ={faPhoneVolume} size='3x' style={{ marginBottom: '16px' }} />
            </div>
            <h3>Contact No:</h3>
            <p id='phone-number'>7897744247</p>
            </div>
            <div className='email-detail'>
            <div className='icon-container'>
            <FontAwesomeIcon icon ={faEnvelopeOpenText}  size='3x' style={{ marginBottom: '16px' }}/>
            </div>
            <h3>Email-Id:</h3>
            <h4>mittalscientificcompany21@gmail.com</h4>
            </div>
        </div>
        </div>
    );

};

const Header = () => {

  return (
    <div className="nav-design">
      <div className="header-container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <div className="buttons-container">
            
            <a href='/' className='btn'>Home</a>
            <a href="#about" className="btn">About Us</a>
            <Link to="/productList" className="btn" activeClassName="active">Product List</Link>
            <a href="#footer" className="btn">Contact Us</a>
           
          </div>
        </nav>
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div>
    <div className="homepage-content">
    <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/productList" element={<ProductList />} />
      </Routes>
      <About />
      <Footer />
    </div>
    </div>
  );
};

export default CombinedComponent;
