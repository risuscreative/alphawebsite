import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('tekli')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'tekli' ? "active" : ""} onClick={()=>setTab('tekli')}>Tekli</li>
        <li className={tab === 'paket' ? "active" : ""} onClick={()=>setTab('paket')}>Paket</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='tekli' && (
            <PricingTable 
              title='Gaming Logo'
              price='70'
              currency='₺'
              timeline='başlangıç'
              features={['Maskot ve harf logo seçeneği', '2 revize hakkı', '1-4 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Favicon uyumlu', 'Yüksek kalite',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
)}
          {tab==='paket' && (
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
         {tab==='tekli' && (
            <PricingTable 
              title='Konu Tasarımı'
              price='200'
              currency='₺'
              timeline='başlangıç'
              features={['4 revize hakkı', '1-5 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Dinamik & özgün' , 'Modern & şık','Forumlarda kullanılabilir.' ]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          {tab==='paket' && (
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
         {tab==='tekli' && (
            <PricingTable 
              title='Kurumsal Logo'
              price='120'
              currency='₺'
              timeline='başlangıç'
              features={['4 revize hakkı', '1-5 gün içinde teslim', 'PNG-JPG-PDF teslim', 'Yüksek kalite', 'Dinamik & özgün' , 'Modern & şık',]}
              btnText='Satın Al'
              btnLink='/iletisim'
            />
          )}
          {tab==='paket' && (
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
