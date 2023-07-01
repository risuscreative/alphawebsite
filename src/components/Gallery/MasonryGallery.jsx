import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ModalImage from 'react-modal-image';

export default function MasonryGallery() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(10);

  const portfolioData = [
    {
      title: 'South Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_south.png',
      srcLg: '/images/alpha_south.png',
      category: 'gaming',
      height: 512,
    },
    {
      title: 'Rewore Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_rewore.png',
      srcLg: '/images/alpha_rewore.png',
      category: 'gaming',
      height: 512,
    },
    {
      title: 'Zagros Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_south.png',
      srcLg: '/images/alpha_south.png',
      category: 'gaming',
      height: 512,
    },
    {
      title: 'Upcomm',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_upcomm.png',
      srcLg: '/images/alpha_upcomm.png',
      category: 'kurumsal',
      height: 512,
    },
    {
      title: 'Venro Roleplay',
      subtitle: 'Post Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_venroetkinlik.png',
      srcLg: '/images/alpha_venroetkinlik.png',
      category: 'diger',
      height: 256,
    },
    {
      title: 'Riva Community',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_south.png',
      srcLg: '/images/alpha_south.png',
      category: 'gaming',
      height: 512,
    },
    {
      title: 'South Roleplay',
      subtitle: 'Logo Tasarımı',
      href: '/portfolio/portfolio-details',
      src: '/images/alpha_south.png',
      srcLg: '/images/alpha_south.png',
      category: 'gaming',
      height: 512,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_30.jpeg',
      srcLg: '/images/portfolio_30_lg.jpeg',
      category: 'portrait',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_24.jpeg',
      srcLg: '/images/portfolio_24_lg.jpeg',
      category: 'shortfilm',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_28.jpeg',
      srcLg: '/images/portfolio_28_lg.jpeg',
      category: 'fashion',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_21.jpeg',
      srcLg: '/images/portfolio_21_lg.jpeg',
      category: 'wedding',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_25.jpeg',
      srcLg: '/images/portfolio_25_lg.jpeg',
      category: 'portrait',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_29.jpeg',
      srcLg: '/images/portfolio_29_lg.jpeg',
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
  return (
    <>
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
          )}
        </Div>
      </Div>
    </>
  );
}
