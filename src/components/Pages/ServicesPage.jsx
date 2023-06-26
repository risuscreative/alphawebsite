import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServicesPage() {
  pageTitle('Hizmetler');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Hizmetlerimiz'
        bgSrc='/images/arkaplansayfa.png'
        pageLinkText='Hizmetler'
      />
      <Spacing lg='80' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Sizlere Verdiğimiz Hizmetler' 
                subtitle='Hizmetler'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                <Card
                    title="Logo Tasarımı"
                    link="/tasarimlar"
                    src="/images/logo.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                <Card
                    title="Animasyonlu Logo Tasarımı"
                    link="/tasarimlar"
                    src="/images/gif.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="Konu Tasarımı"
                    link="/tasarimlar"
                    src="/images/konu.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                <Card
                    title="Yayıncı Paketleri"
                    link="/tasarimlar"
                    src="/images/live.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                <Card
                    title="Kurumsal Kimlik"
                    link="/tasarimlar"
                    src="/images/brand.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                <Card
                    title="İlan/Reklam Tasarımı"
                    link="/tasarimlar"
                    src="/images/ads.jpg"
                    alt="Service"
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='80' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='80' md='80'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='80' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='80' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
