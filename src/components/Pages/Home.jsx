import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
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
  const funfaceData = [
    {
      title: 'Mutlu Müşteri',
      factNumber: '160',
    },
    {
      title: 'Tekrar Tercih Edenler',
      factNumber: '70',
    },
    {
      title: 'Yeni Katılanlar',
      factNumber: '60',
    },
    {
      title: 'Toplam Referans',
      factNumber: '180',
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
        bgImageUrl="/images/slider_5.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
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
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Sizlere Verdiğimiz Hizmetler"
                subtitle="Hizmetler"
                btnText="Bütün Hizmetleri Görüntüle"
                btnLink="/service"
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
      <Spacing lg="145" md="80" />
      <MasonryGallery />
      {/* End Gallery Section */}


      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start Pricing Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
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
