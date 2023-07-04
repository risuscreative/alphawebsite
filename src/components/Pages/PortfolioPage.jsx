import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(10);

  const portfolioData = [
    {
      title: 'Jaxies',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/jaxieslogo.png',
      srcLg: '/images/jaxieslogo.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'Rewore Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/reworerp.png',
      srcLg: '/images/reworerp.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'Zagros Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/zagros.png',
      srcLg: '/images/zagros.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'South Banner',
      subtitle: 'Afiş Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/southbanner.png',
      srcLg: '/images/southbanner.png',
      category: 'paket',
      height: 400,
    },
    {
      title: 'Venro Roleplay',
      subtitle: 'Post Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_venroetkinlik.png',
      srcLg: '/images/alpha_venroetkinlik.png',
      category: 'diger',
      height: 400,
    },
    {
      title: 'Riva Community',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/rclogo.png',
      srcLg: '/images/rclogo.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'Netmila Hosting',
      subtitle: 'Logo Tasarımı',
      src: '/images/netmilaa.png',
      srcLg: '/images/netmilaa.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'South Roleplay',
      subtitle: 'Logo Tasarımı',
      src: '/images/South RP.png',
      srcLg: '/images/South RP.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'US Navies: Anarchy',
      subtitle: 'Logo Tasarımı',
      src: '/images/us navies.png',
      srcLg: '/images/us navies.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'Kitsune Hosting',
      subtitle: 'Logo Tasarımı',
      src: '/images/kitsune.png',
      srcLg: '/images/kitsune.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'Fakirhanem',
      subtitle: 'İlan Tasarımı',
      src: '/images/fk2.png',
      srcLg: '/images/fk2.png',
      category: 'ilan',
      height: 400,
    },
    {
      title: 'Dark Botlist',
      subtitle: 'Logo Tasarımı',
      src: '/images/dark logo.png',
      srcLg: '/images/dark logo.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'SonKılıç',
      subtitle: 'Logo Tasarımı',
      src: '/images/sonkılıç.png',
      srcLg: '/images/sonkılıç.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'Forces Military Roleplay',
      subtitle: 'Login UI Tasarımı',
      src: '/images/forceslogin.png',
      srcLg: '/images/forceslogin.png',
      category: 'paket',
      height: 400,
    },
    {
      title: 'Netmila Hosting',
      subtitle: 'Logo Tasarımı',
      src: '/images/netmilaa.png',
      srcLg: '/images/netmilaa.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'GTA Tr',
      subtitle: 'Logo Tasarımı',
      src: '/images/gtatr.png',
      srcLg: '/images/gtatr.png',
      category: 'kurumsal',
      height: 400,
    },
  ];
  const categoryMenu = [
    {
      title: 'Gaming',
      category: 'gaming',
    },
    {
      title: 'Kurumsal',
      category: 'kurumsal',
    },
    {
      title: 'İlan & Reklam',
      category: 'ilan',
    },
    {
      title: 'Paket Çalışmaları',
      category: 'paket',
    },
    {
      title: 'Diğer',
      category: 'diger',
    },
  ];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolyo"
        bgSrc='/images/arkaplansayfa.png'
        pageLinkText="Tasarımlar"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Yapılan Bazı Çalışmalar" subtitle="Portfolyo" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
              <span onClick={() => setActive('all')}>Tümü</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Daha Fazla</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
          title="Projenizi bizim ile<br />büyütmeye ne dersiniz?"
          btnText="Birlikte Çalışalım!"
          btnLink="/iletisim"
          bgSrc="/images/cta_bg_3.png"
        />
    </>
  );
}