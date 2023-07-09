import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://discord.gg/7Q7EbNKHha' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:discord" />
        </a>
      <a href='https://www.behance.net/alphagrafik' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:behance" />               
        </a>
      <a href='https://www.youtube.com/@alphatasarim' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:youtube" />              
        </a>
      <a href='https://www.instagram.com/alphagraphicart/' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:instagram" />
      </a>
    </Div>
  )
}
