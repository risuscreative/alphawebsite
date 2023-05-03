import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Gaming Logo Tasarımı'
              price='70'
              currency='₺'
              timeline='başlangıç'
              features={['Maskot, tipografik veya harf logo seçeneği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Favicon uyumlu', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          {tab==='monthly' && (
            <PricingTable 
              title='Kurumsal Logo Tasarımı'
              price='120'
              currency='₺'
              timeline='başlangıç'
              features={['Tipografik veya harf logo seçeneği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Favicon uyumlu', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Konu Tasarımı'
              price='250'
              currency='₺'
              timeline='başlangıç'
              features={['4 revize hakkı', '1-5 gün içinde teslim', 'PSD-PNG-JPG-PDF teslim', 'Yüksek kalite', 'Dinamik & özgün' , 'Modern & şık',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Gaming Paket'
              price='120'
              currency='₺'
              timeline='başlangıç'
              features={['Gaming sunucunuzu tanıtan paket içeriği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='yearly' && (
            <PricingTable 
              title='Kurumsal Paket'
              price='200'
              currency='₺'
              timeline='başlangıç'
              features={['Firmanızı tanıtan paket içeriği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Yayıncı Paket'
              price='140'
              currency='₺'
              timeline='başlangıç'
              features={['Kanalınızı tanıtan paket içeriği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
