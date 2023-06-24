import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

export default function TeamDetails() {
  pageTitle('Hakkımızda');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Alpha Graphic Hakkında'
        bgSrc='/images/arkaplansayfa.jpg'
        pageLinkText='Hakkımızda'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/member_details_1.jpeg" alt="Member" className="w-100" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Alpha Graphic Art</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Grafik Tasarım Platformu</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">2021'den beri gelişmekte olan tecrübem ile sizlere hizmet veriyorum. Bugüne kadar +250 platform ile çalıştım. Uygun fiyata kaliteli tasarımlar yaparak platformunuzu yeniden tasarlıyor, değer katıyorum. Freelance olan iş modelimde ödeme işlemlerini güvenli ödeme linkleri ile veya para transferi yoluyla almaktayım. Yüksek müşteri memnuniyeti olan Alpha'dan özgün ve profesyonel tasarımlar elde edebilirsiniz. </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">Yüksek program bilgim ile sizlere 3 programdaki çalışmaları sağlamaktayım. Photoshop, Illustrator ve After Effects kullanarak projelerinizi yeniden tasarlıyor, hareket ve canlılık katıyorum. Örnek çalışmalara ulaşmak veya sipariş vermek için aşağıdaki sosyal medya adreslerimizi ziyaret edebilirsiniz.</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
      <Cta
          title="Projeniz için<br />fiyat teklifi alın"
          btnText="Fiyat Teklifi Al"
          btnLink="/iletisim"
          bgSrc="/images/cta_bg_3.png"
        />
      </Div>
    </>
  )
}
