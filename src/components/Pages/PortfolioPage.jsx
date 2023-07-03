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
      title: 'GTA Tr',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/gtatr.png',
      srcLg: '/images/gtatr.png',
      category: 'kurumsal',
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
      href: '/portfolio/portfolio-details',
      src: '/images/netmilaa.png',
      srcLg: '/images/netmilaa.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'South Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/South RP.png',
      srcLg: '/images/South RP.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'US Navies: Anarchy',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/us navies.png',
      srcLg: '/images/us navies.png',
      category: 'gaming',
      height: 400,
    },
    {
      title: 'Kitsune Hosting',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/kitsune.png',
      srcLg: '/images/kitsune.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'Kotanak Technologies',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/kotanaktechlogo.png',
      srcLg: '/images/kotanaktechlogo.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'Dark Botlist',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/dark logo.png',
      srcLg: '/images/dark logo.png',
      category: 'kurumsal',
      height: 400,
    },
    {
      title: 'Fakirhanem',
      subtitle: 'İlan Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/fk2.png',
      srcLg: '/images/fk2.png',
      category: 'fashion',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_22.jpeg',
      srcLg: '/images/portfolio_22_lg.jpeg',
      category: 'commercial',
      height: 622,
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
      title: 'Gif & Vfx',
      category: 'gif',
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
        title="Portfolyomuz"
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
                <span onClick={() => setActive('all')}>All</span>
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
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="cs-masonry_4_col">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${
              active === 'all'
                ? ''
                : !(active === item.category)
                ? 'd-none'
                : ''
            }`}
            key={index}
          >
            <Div
              className="cs-portfolio cs-style1 cs-type2"
              style={{ height: `${item.height}px` }}
            >
              <Div className="cs-lightbox_item">
                <ModalImage
                  small={item.src}
                  large={item.srcLg}
                  alt={item.title}
                />
              </Div>
              <Div className="cs-portfolio_hover" />
              <span className="cs-plus" />
              <Div
                className="cs-portfolio_bg cs-bg"
                style={{ backgroundImage: `url("${item.src}")` }}
              />
              <Div className="cs-portfolio_info">
                <Div className="cs-portfolio_info_bg cs-accent_bg" />
                <h2 className="cs-portfolio_title">{item.title}</h2>
                <Div className="cs-portfolio_subtitle">{item.subtitle}</Div>
              </Div>
            </Div>
          </Div>
        ))}
      </Div>
      <Div className="container">
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Daha Fazla</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )
          }