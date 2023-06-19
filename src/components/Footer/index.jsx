import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Sipariş Süreci',
      href: '/'
    },
    {
      title: 'Ödeme Yöntemleri',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Logo Tasarımı',
      href: '/hizmetler'
    },
    {
      title: 'Kurumsal Kimlik',
      href: '/hizmetler'
    },
    {
      title: 'Gaming & Yayıncı Paket',
      href: '/hizmetler'
    },
    {
      title: 'Konu Tasarımı',
      href: '/hizmetler'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='/images/footer_logo.svg' 
                  logoAlt='Logo'
                  text ='Alpha Graphic Art olarak 2021 yılından beri platformunuzu yeniden tasarlıyor, değer katıyoruz. '
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Hizmetler'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='İletişim'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <a href="https://discord.gg/7Q7EbNKHha"><img src="https://discordapp.com/api/guilds/908793841950261350/widget.png?style=banner4" alt="Discord Banner 4"/> </a>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Alpha Graphic Art.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
