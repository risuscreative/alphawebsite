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
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Inferno E-Sports',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_inferno.png',
      category: 'gaming',
    },
    {
      title: 'Kitsune Hosting',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_kitsune.png',
      category: 'kurumsal',
    },
    {
      title: 'Life Roleplay',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_life.png',
      category: 'gaming',
    },
    {
      title: 'CeriaNetwork',
      subtitle: 'Banner Tasarımı',
      src: '/images/alpha_ceriabanner.png',
      category: 'gaming',
    },
    {
      title: 'Kotanak Technologies',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_kotanak.png',
      category: 'kurumsal',
    },
    {
      title: 'Twelve Roleplay',
      subtitle: 'Maskot Logo Tasarımı',
      src: '/images/alpha_twelvemaskot.png',
      category: 'gaming',
    },
    {
      title: 'South Roleplay',
      subtitle: 'Banner Tasarımı',
      src: '/images/alpha_Southbanner.png',
      category: 'gaming',
    },
    {
      title: 'YunusShop',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_yunus.png',
      category: 'kurumsal',
    },
    {
      title: 'Waeb.net',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_waeb',
      category: 'kurumsal',
    },
    {
      title: 'Xaviz Shop',
      subtitle: 'Logo Tasarımı',
      src: '/images/alpha_xavizlogo.png',
      category: 'kurumsal',
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
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
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
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
