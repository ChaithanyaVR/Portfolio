import Link from 'next/link'
import React from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import Layout from './Layout'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark/60 font-medium text-lg dark:text-light dark:border-light'>
    <Layout className='py-8 flex items-center justify-between'>
        <span>&copy; {new Date().getFullYear()} Chaithanya VR. All Rights Reserved.</span>
        <Link href='/'>Say hello</Link>
        <div className='flex flex-col items-start justify-center mt-5'>
        <span>Stay In Touch</span>
        <nav className='flex items-center justify-center flex-wrap'>
    <a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3"><TwitterIcon/></a>
    <a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><GithubIcon/></a>
    <a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><LinkedInIcon/></a>
    <a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><PinterestIcon/></a>
    <a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3"><DribbbleIcon/></a>
   </nav>
   </div>
    </Layout>
   </footer>
  )
}

export default Footer