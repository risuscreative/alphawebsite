import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact2 from '../FunFact/FunFact2';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText2 from '../MovingText/MovingText2';
import MasonryGallery from '../Gallery/MasonryGallery';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import PricingTableList from '../PricingTable/PricingTableList';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';

export default function Home() {
  pageTitle('Ana Sayfa');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Discord',
      links: 'https://discord.gg/7Q7EbNKHha',
    },
    {
      name: 'Behance',
      links: 'https://behance.net/alphagrafik ',
    },
  ];
 // FunFact Data
  const funfactData = [
    {
      title: 'Digital products',
      factNumber: '550',
    },
    {
      title: 'Global happy clients',
      factNumber: '40K',
    },
    {
      title: 'Project completed',
      factNumber: '50k',
    },
    {
      title: 'Team members',
      factNumber: '250',
    },
  ];
  const serviceData1 = [
  {
    title: 'Profesyonel',
    href: '/iletisim',
  },
  {
    title: 'Özgün',
    href: '/iletisim',
  },
  {
    title: 'Modern',
    href: '/iletisim',
  },
];
const serviceData2 = [
  {
    title: 'Şık',
    href: '/iletisim',
  },
  {
    title: 'Dinamik',
    href: '/iletisim',
  },
  {
    title: 'Ekonomik',
    href: '/iletisim',
  },
];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Hizmet Verir, <br/>Değer Katar"
        subtitle="2021'den bugüne gelişen tecrübemizle sizlere grafik tasarım hizmeti sağlamaktayız"
        btnText="Sipariş Oluştur"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Takip Et"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/slider_5.png"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfactData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Blog Section */}
      <Spacing lg="70" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Neden Biz?"
                subtitle="Özellikler"
                btnText="İletişim"
                btnLink="/iletisim"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start Service Section */}
      <Spacing lg="70" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Sizlere Verdiğimiz Hizmetler"
                subtitle="Hizmetler"
                btnText="Bütün Hizmetleri Görüntüle"
                btnLink="/hizmetler"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Logo Tasarımı"
                    link="/service/service-details"
                    src="/images/logo.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="GIF Tasarımı"
                    link="/service/service-details"
                    src="/images/gif.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Konu Tasarımı"
                    link="/service/service-details"
                    src="/images/konu.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Yayıncı Paketleri"
                    link="/service/service-details"
                    src="/images/live.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Gallery Section */}
      <Spacing lg="70" md="80" />
      <MasonryGallery />
      {/* End Gallery Section */}


      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start Pricing Section */}
      <Spacing lg="70" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="70" md="55" />
      {/* End Pricing Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Projeniz <br />için <i>fiyat teklifi</i> alın"
          btnText="Fiyat Teklifi Al"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
