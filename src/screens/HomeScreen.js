import React, { useState } from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer.js'
import Sidebar from '../screens/Sidebar.js'
// import ServicesCategories from '../Components/ServicesCategories/ServicesCategories.js';
import SpecialPromo from '../Components/SpecialPromo/SpecialPromo.js';
// import Carousel from '../Components/carousel/carousel.js'
import BottomImage from '../Images/MANDIR-VECTORcolorchange.png'
import Video from '../Components/Video/Video.js'
import Souvenir from '../Components/Souvenir/Souvenir.js'
function App() {
  // const Data = [{
  //   "project": "About Temple",
  //   "child_title1": "History",
  //   "child_id1": 1,
  //   "child_title2": "12 Jyotirlinga ",
  //   "child_id2": 2,
  //   "child_title3": "Festivals",
  //   "child_id3": 3,
  //   "child_title4": "Upcoming\nEvents",
  //   "child_id4": 4,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/1.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/2.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/3.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/4.png"

  // },
  // {
  //   "project": "Book Services",
  //   "child_title1": "Sugam Darshan",
  //   "child_id1": 5,
  //   "child_title2": "Aarti",
  //   "child_id2": 6,
  //   "child_title3": "Rudrabhishek",
  //   "child_id3": 7,
  //   "child_title4": "Other Services",
  //   "child_id4": 8,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/5.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/6.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/7.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/8.png"
  // },
  // {
  //   "project": "Donations",
  //   "child_title1": "Temple Donation",
  //   "child_id1": 9,
  //   "child_title2": "Annakshetra Donation",
  //   "child_id2": 10,
  //   "child_title3": "Anonymous Donation",
  //   "child_id3": 11,
  //   "child_title4": "Other Donation",
  //   "child_id4": 12,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/9.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/10.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/11.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/12.png"
  // },
  // {
  //   "project": "General Informations",
  //   "child_title1": "Notices",
  //   "child_id1": 13,
  //   "child_title2": "How to Reach",
  //   "child_id2": 14,
  //   "child_title3": "FAQ",
  //   "child_id3": 15,
  //   "child_title4": "Contact Us",
  //   "child_id4": 16,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/13.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/14.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/15.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/16.png"
  // },
  // {
  //   "project": "Media",
  //   "child_title1": "Live Darshan",
  //   "child_id1": 17,
  //   "child_title2": "Videos",
  //   "child_id2": 18,
  //   "child_title3": "Gallery",
  //   "child_id3": 19,
  //   "child_title4": "Important Links",
  //   "child_id4": 20,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/17.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/18.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/19.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/20.png"
  // },
  // {
  //   "project": "Social Media",
  //   "child_title1": "Instagram",
  //   "child_id1": 21,
  //   "child_title2": "Facebook",
  //   "child_id2": 22,
  //   "child_title3": "Twitter",
  //   "child_id3": 23,
  //   "child_title4": "YouTube",
  //   "child_id4": 24,
  //   "icon_image1": "https://app.oojus.com/upload/appservice/iconimage/21.png",
  //   "icon_image2": "https://app.oojus.com/upload/appservice/iconimage/22.png",
  //   "icon_image3": "https://app.oojus.com/upload/appservice/iconimage/23.png",
  //   "icon_image4": "https://app.oojus.com/upload/appservice/iconimage/24.png"
  // }
  // ]
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // const services = [
  //   { name: 'Sugam Darshan', icon: 'https://app.oojus.com/upload/appservice/iconimage/1.png' },
  //   { name: 'Aarti', icon: 'https://app.oojus.com/upload/appservice/iconimage/2.png' },
  //   { name: 'Rudrabhishek', icon: 'https://app.oojus.com/upload/appservice/iconimage/3.png' },
  //   { name: 'Mahadev Pool', icon: 'https://app.oojus.com/upload/appservice/iconimage/4.png' },
  //   { name: 'History', icon: 'https://app.oojus.com/upload/appservice/iconimage/5.png' },
  //   { name: '12 Jyotirlinga', icon: 'https://app.oojus.com/upload/appservice/iconimage/6.png' },
  //   { name: 'Donations', icon: 'https://app.oojus.com/upload/appservice/iconimage/7.png' },
  //   { name: 'Other Services', icon: 'https://app.oojus.com/upload/appservice/iconimage/8.png' },
  // ];
  return (
    <div className="min-h-screen HomemainPage ">
      <div className=''>
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className='mt-0'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      {/* <figure className="relative h-60 w-full z-0">
        <img
          className="h-full w-full  object-cover object-center"
          src="https://app.oojus.com/upload/appservice/appslider/temple.jpg"
          alt="nature image"
        />
        <figcaption className="absolute top-5 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div className='border-0 '>
            <img
              className="h-full w-full  object-cover object-center skvtLogo"
              src="https://app.oojus.com/upload/appservice/logo/SKVT-LOGO.png"
              alt="nature image"
            />
          </div>
          <div className='border-0 '>
            <img
              className="h-full w-full  object-cover object-center skvtTextLogo"
              src="https://www.shrikashivishwanath.org/frontend/images/logo.png"
              alt="nature image"
            />
          </div>
        </figcaption>
        <figcaption className="absolute bottom-20 full">
          <p className='PosterText'>Shri Kashi Viswanath Temple</p>
        </figcaption>
      </figure> */}
      {/* <div>
        {Data.map((service, index) => (
          <>
            <h2 className="text-base font-bold mb-0  text-start mt-2 ml-10">{service.project}</h2>
            <div className='flex overflow-x-auto space-x-3 mx-5  items-center justify-center'>
              {<ServicesCategories service={service} index={index} />}
            </div>
          </>
        ))}
      </div> */}

      <div className='mb-8 CardBox '>
        <SpecialPromo />
        <SpecialPromo />
        <Souvenir />
        <div class="p-4 mb-0 ">
          <Video>
            <div class="flex flex-row gap-4">
              <div class="flex-1 p-4 rounded-lg">
                <img className='' src='https://shrikashivishwanath.org/frontend/about_temple/lord-shive.png' alt='sivJi' />
              </div>
              <div class="flex-1 bg-orange-400 text-white p-4 rounded-lg">
                ॐ नमः शिवाय
                <p style={{ fontSize: 16 }}>गङ्गातरङ्गरमणीयजटाकलापं
                  गौरीनिरन्तरविभूषितवामभागम् ।
                </p>
                <p style={{ fontSize: 16 }}>
                  नारायणप्रियमनङ्गमदापहारं
                  वाराणसीपुरपतिं भज विश्वनाथम् ॥१॥
                </p>
              </div>
            </div>
          </Video>
          <div className='mt-5'>
            <p className='text-orange-500 font-bold line-after-text'>News & Update</p>
          </div>
          <marquee class="marq bg-orange-500 mt-5 rounded-lg p-2"
            direction="left" loop="">
            <div class="marquee">
              <p className=''> गङ्गातरङ्गरमणीयजटाकलापं गौरीनिरन्तरविभूषितवामभागम् । नारायणप्रियमनङ्गमदापहारं वाराणसीपुरपतिं भज विश्वनाथम् ॥१॥</p>
            </div>
          </marquee>
        </div>
        <div className='mb-14 '>
          <img src={BottomImage} alt='sivJi' />
        </div>
      </div>
      {/* <SpecialPromo /> */}
      <Footer />
    </div>
  );
}

export default App;
