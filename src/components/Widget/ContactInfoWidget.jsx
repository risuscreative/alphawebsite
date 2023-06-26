import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:discord" /></span>:''}
          discord.gg/7Q7EbNKHha
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:email" /></span>:''}
          destek.alphagrafik@gmail.com
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:instagram" /></span>:''}
          @alphagraphicart
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:behance" /></span>:''}
          behance.net/alphagrafik
        </li>
      </ul>
      
    </>
  )
  
}

