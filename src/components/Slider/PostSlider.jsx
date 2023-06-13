import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      src:'/images/1.png', 
      alt:'Post',  
      title:'Kaliteli & profesyonel tasarım.'
    },
    {
      url:'/iletisim', 
      src:'/images/2.png', 
      alt:'Post', 
      title:'Güvenli ödeme kolaylığı.'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/3.png',  
      alt:'Post', 
      title:'Özenli ve düzenli çalışma'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/4.png', 
      alt:'Post', 
      title:'7/24 hızlı destek imkanı.'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/5.png', 
      alt:'Post', 
      title:'2 revize hakkı.'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/6.png', 
      alt:'Post', 
      title:'Tercih eden +250 müşteri.'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
