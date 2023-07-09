import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://www.instagram.com/alphagraphicart/' className="cs-center" target="_blank" >
        <Icon icon="mdi:discord" />
        </a>
      <a href='https://www.instagram.com/alphagraphicart/' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:behance" />               
        </a>
      <a href='https://www.instagram.com/alphagraphicart/' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:youtube" />              
        </a>
      <a href='https://www.instagram.com/alphagraphicart/' className="cs-center" target="_blank" >
        <Icon icon="fa6-brands:instagram" />
      </a>
    </Div>
  )
}
