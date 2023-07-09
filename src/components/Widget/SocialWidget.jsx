import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://discord.gg/7Q7EbNKHha' className="cs-center">
        <Icon icon="mdi:discord" />
      </Link>
      <Link to='https://www.behance.net/alphagrafik' className="cs-center">
        <Icon icon="fa6-brands:behance" />               
      </Link>
      <Link to='https://youtube.com/@alphatasarim' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
        </Link>
      <a href='https://youtube.com/@alphatasarim' className=“cs-center” target=“_blank”></a>
        <Icon icon="fa6-brands:instagram" />
      </a>
    </Div>
  )
}
