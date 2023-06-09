import React from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';

export default function ErrorPage() {
  pageTitle('Error');
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/arkaplansayfa.png")' }}
    >
      <Div className="container">
        <SectionHeading
          title="Burada bir şey bulamadık."
          subtitle="404"
          btnText="Ana Sayfaya Dön"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
