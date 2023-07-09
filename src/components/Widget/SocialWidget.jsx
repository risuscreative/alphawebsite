import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a target="_blank" href="https://discord.gg/7Q7EbNKHha">
        <Icon icon="mdi:discord" />
      </Link>
      <Link to='https://www.behance.net/alphagrafik' className="cs-center">
        <Icon icon="fa6-brands:behance" />               
      </Link>
      <Link to='https://www.youtube.com/@alphatasarim' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link to='https://www.instagram.com/alphagraphicart/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  )
}
