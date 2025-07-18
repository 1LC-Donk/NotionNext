import QrCode from '@/components/QrCode'
import { siteConfig } from '@/lib/config'
import { useState } from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  const CONTACT_TELEGRAM = siteConfig('CONTACT_TELEGRAM')
  const CONTACT_BILIBILI = siteConfig('CONTACT_BILIBILI')
  const CONTACT_YOUTUBE = siteConfig('CONTACT_YOUTUBE')
  const [qrCodeShow, setQrCodeShow] = useState(false)

  const openPopover = () => {
    setQrCodeShow(true)
  }
  const closePopover = () => {
    setQrCodeShow(false)
  }

  return (
    <div className='w-full justify-center flex-wrap flex'>
      <div className='space-x-3 text-xl flex items-center text-gray-600 dark:text-gray-300 '>
        {CONTACT_TELEGRAM && (
          <a
            target='_blank'
            rel='noreferrer'
            href={CONTACT_TELEGRAM}
            title={'telegram'}>
            <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-green-400 hover:text-green-600' />
          </a>
        )}
        {CONTACT_BILIBILI && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={CONTACT_BILIBILI}>
            <i className='transform hover:scale-125 duration-150 dark:hover:text-green-400 hover:text-green-600 fab fa-bilibili' />
          </a>
        )}
        {CONTACT_YOUTUBE && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'youtube'}
            href={CONTACT_YOUTUBE}>
            <i className='transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-green-400 hover:text-green-600' />
          </a>
        )}
      </div>
    </div>
  )
}
export default SocialButton
