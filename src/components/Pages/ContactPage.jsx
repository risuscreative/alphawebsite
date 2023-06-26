import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  pageTitle('İletişim');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="İletişime Geç"
        bgSrc='/images/arkaplansayfa.png'
        pageLinkText="İletişim"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Bizimle iletişime geçmek<br/>ister misiniz?"
              subtitle="İletişime Geç"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="https://formspree.io/f/mknalqzn" method="POST" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">İsim*</label>
                <input type="text" name="name" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="email" className="cs-primary_color">E-posta Adresi*</label>
                <input type="email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Konu*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mesajınız*</label>
                <textarea name="message"
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Mesaj Gönder!</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="70" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="/images/imza.png"
          title="İmza"
          fill="none"
          
        />
        <Spacing lg="70" md="40" />
      </Div>
      <Spacing lg="70" md="40" />
    </>
  );
}
