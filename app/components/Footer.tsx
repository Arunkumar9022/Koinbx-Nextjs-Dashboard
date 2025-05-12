import Image from 'next/image';
import Link from 'next/link';
import logoHead from '../assets/Images/KoinbxLogo.jpg'
import googlePlay from '../assets/Images/GooglePlay.jpg';
import appStore from '../assets/Images/GoogleApp.jpg';

import twitter from '../assets/Images/Twitter.jpg';
import telegram from '../assets/Images/TeleNew.jpg';
import facebook from '../assets/Images/Fb.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#fbfdff] text-dark px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <Image src={logoHead} alt="KoinBX Logo" className="mb-4 h-[120px] w-[70px" />
          <p className="mb-4 text-sm">
            Empower your crypto journey with KoinBX, the simple and secure crypto exchange platform
          </p>
          <div className="flex flex-col space-x-4 mb-2">
            <Image src={googlePlay} alt="Google Play" width={120} className='mb-3' />
            <Image src={appStore} alt="App Store" width={120} />
          </div>
          <p className="text-xs">
            A FIU (Govt. of India) registered entity with REID : VA00048773
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Markets</Link></li>
            <li><Link href="#">Trade</Link></li>
            <li><Link href="#">Fees</Link></li>
            <li><Link href="#">API Documentation</Link></li>
            <li><Link href="#">Trade Contest</Link></li>
            <li><Link href="#">Download</Link></li>
            <li><Link href="#">List Crypto</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Glossary</Link></li>
            <li><Link href="#">Support Ticket</Link></li>
            <li><Link href="#">Partnership & Enquiries</Link></li>
            <li><Link href="#">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Trade Crypto</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Buy Bitcoin</Link></li>
            <li><Link href="#">Buy Ethereum</Link></li>
            <li><Link href="#">Buy Tether</Link></li>
            <li><Link href="#">Buy Ripple</Link></li>
            <li><Link href="#">Buy Doge Coin</Link></li>
            <li><Link href="#">Buy Litecoin</Link></li>
            <li><Link href="#">Buy Tron</Link></li>
            <li><Link href="#">Buy Cardano</Link></li>
            <li><Link href="#">Buy Polygon</Link></li>
            <li><Link href="#">Buy Solana</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><Link href="#">White Paper</Link></li>
            <li><Link href="#">Terms and Use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">AML KYC</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
            <li><Link href="#">Corporate Account</Link></li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Image src={twitter} alt="Twitter" width={24} />
            <Image src={telegram} alt="Telegram" width={24} />
            <Image src={facebook} alt="Facebook" width={24} />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} KoinBX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
