"use client";
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import KoinBx1 from "../assets/Images/Koinbx1.jpg";
import KoinBx2 from "../assets/Images/KoinBx2.jpg";
import KoinBx3 from "../assets/Images/Koinbx3.jpg";
import KoinBx4 from "../assets/Images/KoinBx4.jpg";
import KoinBx5 from "../assets/Images/Koinbx5.jpg";
import KoinBx6 from "../assets/Images/KoinBx6.jpg";
import KoinBx7 from "../assets/Images/KoinBx7.jpg";
import KoinBx8 from "../assets/Images/KoinBx8.jpg";
import CreateAccount from "../assets/Images/Create-Account.jpg";
import DepositFund from "../assets/Images/Depositfund.jpg";
import StartTrading from "../assets/Images/StartTrading.jpg";
import GroupBanner6 from "../assets/Images/GroupBanner6.jpg";
import DiversifiedIcon from "../assets/Images/Diversified-icon.jpg"
import CompetitiveIcon from "../assets/Images/Competitive-icon.jpg";
import RobustSecurityIcon from "../assets/Images/Robust-Security-Measures-icon.jpg";
import FastestIcon from "../assets/Images/Fastest-Customer-Support-icon.jpg";
import MobileStay from "../assets/Images/MobileStayAhead.jpg";
import GoogleApp from "../assets/Images/GoogleApp.jpg";
import GooglePlay from "../assets/Images/GooglePlay.jpg";
import QrCode from "../assets/Images/QrCode.png";
import Banners from "../assets/Images/Banners.jpg";
import SmartContracts from "../assets/Images/SmartContracts.jpg";
import MNTC from "../assets/Images/MNTC.jpg";
import BlockChain from "../assets/Images/blockchain.jpg";
import KoinbxEarning from "../assets/Images/KoinBxEarning.jpg";
interface CryptoData {
  name: string;
  price: number;
  change: number;
  chartUrl: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'hot' | 'new'>('hot');

  const hotList: CryptoData[] = [
    {
      name: "BTC/INR",
      price: 4000000,
      change: 3.25,
      chartUrl: "/charts/btc.png",
    },
    {
      name: "ETH/INR",
      price: 250000,
      change: -1.45,
      chartUrl: "/charts/eth.png",
    },
  ];

  const newList: CryptoData[] = [
    {
      name: "DOGE/INR",
      price: 8.5,
      change: 10.1,
      chartUrl: "/charts/doge.png",
    },
    {
      name: "SHIB/INR",
      price: 0.0012,
      change: -5.2,
      chartUrl: "/charts/shib.png",
    },
  ];

  const displayedList = activeTab === 'hot' ? hotList : newList;

  const imagePaths = [
    KoinBx1,
    KoinBx2,
    KoinBx3,
    KoinBx4,
    KoinBx5,
    KoinBx6,
    KoinBx7,
    KoinBx8,
  ];

  return (
    <>
      <Head>
        <title>KoinBX Dashboard</title>
      </Head>

      <section className="w-full px-4 md:px-16 py-10 bg-white text-gray-800">
        <div className="text-center text-sm md:text-base font-semibold mb-4 mt-44 underline">
          We are <span className='text-cyan-400 text-xl'>FIU registered & 100% compliant</span> with Indian regulations.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="text-center px-3 py-1 rounded-md text-lg font-normal underline ">
              KoinBX ranks in <span className='text-cyan-400 font-bold text-lg'>Top 100</span> exchanges on CoinMarketCap.
            </div>
            <div className="text-7xl md:text-6xl text-center font-normal">
              The<span className='font-medium text-6xl ms-2'>Most</span> <span className='text-cyan-400 text-6xl font-medium'>Trusted </span>and <span className='text-6xl font-bold'>Fastest</span>
              <div className='mt-2'>
                <span className='text-cyan-400 font-medium'>Growing</span> Crypto Exchange
              </div>
            </div>
            <div className='text-center'>
              <button className="mt-4 bg-cyan-400 text-dark px-11 py-2 rounded-full text-center text-sm md:text-base">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between text-center gap-6">
            <div className="flex flex-col">
              <Image src={GroupBanner6} alt="Milestone" className="w-64 h-12 text-center object-contain" />
              <h4 className="text-lg font-normal text-center">Exciting Milestones Ahead</h4>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-2xl font-bold">1.5 M+</h3>
              <p className="text-gray-600">Userbase</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-2xl font-bold">225+</h3>
              <p className="text-gray-600">Active Pairs</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-2xl font-bold">$38 Billion+</h3>
              <p className="text-gray-600">Traded so far</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-600">Cryptos Listed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className='text-left text-4xl font-medium'>Latest Insights</h2>
        <div className="w-full max-w-7xl mx-auto py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {imagePaths.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[300px] h-[500px] md:h-[700px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
                  <Image src={src} alt={`Koinbx Slide ${index + 1}`} fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="p-2 max-w-5xl mx-auto">
        <h1 className="text-4xl font-medium mb-4">Catch Your Next Trading Opportunity</h1>

        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab('hot')}
            className={`px-4 py-2 ${activeTab === 'hot' ? 'border-b-2 border-green-500 font-semibold' : 'text-gray-500'}`}
          >
            HOT LIST
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 ${activeTab === 'new' ? 'border-b-2 border-green-500 font-semibold' : 'text-gray-500'}`}
          >
            NEW LIST
          </button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-700">
              <th className="pb-2">Trading Pairs</th>
              <th className="pb-2">Last Price</th>
              <th className="pb-2">24 hrs change</th>
              <th className="pb-2">Per/Day Chart</th>
              <th className="pb-2">Trade</th>
            </tr>
          </thead>
          <tbody>
            {displayedList.map((item, idx) => (
              <tr key={idx} className="border-t text-sm">
                <td className="py-2 flex items-center gap-2">
                  <Image
                    src={`/icons/${item.name.split('/')[0].toLowerCase()}.png`}
                    width={20}
                    height={20}
                    alt={item.name}
                  />
                  {item.name}
                </td>
                <td className="py-2">₹ {item.price.toFixed(2)}</td>
                <td className={`py-2 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change.toFixed(2)} %
                </td>
                <td className="py-2">
                  <Image src={item.chartUrl} width={100} height={30} alt="chart" />
                </td>
                <td className="py-2">
                  <button className="border border-green-500 text-green-500 px-3 py-1 rounded-full hover:bg-green-50">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-44 px-4 md:px-16 text-center mb-11">
        <h2 className="text-3xl font-semibold mb-10  px-40">
          Buying & selling cryptocurrency will be more user-friendly than in the past
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 px-4 py-8">
          <div className="text-center max-w-xs">
            <Image src={CreateAccount} alt="Create Account" className="w-36 h-auto mx-auto mb-4" />
            <h3 className="font-semibold text-2xl mb-2">Create Your Account</h3>
            <p className="font-light space-y-1">
              <span className="block">Set up your KoinBX account by downloading the app,</span>
              <span className="block">ensuring your documents are easily accessible,</span>
              <span className="block">to complete the KYC process.</span>
            </p>
          </div>

          <div className="text-center max-w-xs">
            <Image src={DepositFund} alt="Deposit Fund" className="w-36 h-auto mx-auto mb-4" />
            <h3 className="font-semibold text-2xl mb-2">Deposit Funds</h3>
            <p className="font-light space-y-1">
              <span className="block">Deposit INR into your account by choosing from</span>
              <span className="block">our banking payment methods such as NEFT,</span>
              <span className="block">RTGS, or IMPS.</span>
            </p>
          </div>

          <div className="text-center max-w-xs">
            <Image src={StartTrading} alt="Start Trading" className="w-36 h-auto mx-auto mb-4" />
            <h3 className="font-semibold text-2xl mb-2">Start Trading</h3>
            <p className="font-light space-y-1">
              <span className="block">Start trading cryptocurrencies with ease,</span>
              <span className="block">using our intuitive trading interface</span>
              <span className="block">available on both web and mobile platforms.</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='mb-5 text-left px-52'>
          <h2 className="text-3xl font-semibold mb-2">
            Sign up now to build your crypto portfolio for free!
          </h2>
        </div>
        <div className='text-left px-52'>
          <button className='bg-cyan-300 px-9 py-2 rounded-full'>Get Started</button>
        </div>
        <div className='text-left px-44 mt-16'>
//           <h3 className='text-4xl font-semibold mb-4'>Salient Features of KoinBx</h3>
//           <p className='font-light text-lg'>KoinBX is a cutting-edge crypto trading platform that offers a host of remarkable features tailored to cater to the needs of seasoned traders and crypto enthusiasts.
//             Here are some of the standout features that set KoinBX apart from the rest</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm">
            <div>
              <div className="flex justify-end">
                <Image src={DiversifiedIcon} alt="" height={100} width={100} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Diversified Crypto Portfolio</h3>
              <p className="text-gray-600">
                Whether you are a beginner or a pro-level trader, KoinBX is a user-friendly and easy-to-navigate app for a smooth and hassle-free <br />
                crypto trading journey.
              </p>
            </div>
          </div>

          <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm">
            <div>
              <div className="flex justify-end">
                <Image src={RobustSecurityIcon} alt="" height={100} width={100} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Robust Security Measures</h3>
              <p className="text-gray-600">
                KoinBX implements state-of-the-art security protocols such as two-factor authentication (2FA), cold storage for cryptos, and encrypted data transmission for securing the data and funds of the users.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm">
            <div>
              <div className="flex justify-end">
                <Image src={CompetitiveIcon} alt="" height={100} width={100} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Competitive Trading Fees</h3>
              <p className="text-gray-600">
                KoinBX offers competitive and transparent fee structures to attract traders from all backgrounds, fostering an inclusive trading community and allowing traders to maximize their profits.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm">
            <div>
              <div className="flex justify-end">
                <Image src={CompetitiveIcon} alt="" height={100} width={100} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fastest Customer Support</h3>
              <p className="text-gray-600">
                Whether it's a technical support call or an account-related query, our dedicated support team is committed to providing prompt and effective solutions to improve the overall user experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-4xl font-medium mt-12 px-40'>Stay ahead and become a Crypto Trailblazer</h3>
          <br /><span className='mt-44 font-medium text-4xl px-40'>with the KoinBX App!</span>
        </div>
        <div className="flex flex-rows justify-around gap-4 p-4 items-center">
          <div>
            <Image
              src={MobileStay} alt="Mobile App"
              className="w-full h-[650px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center  md:px-16 space-x-4">
            <h4 className="text-4xl font-bold text-gray-800 mb-4">
              Trade Anytime<br />Anywhere
            </h4>
            <div className='grid grid-cols-3 items-center'>
              <div className='flex flex-col'>
                <Image src={GoogleApp} alt="Download App" className="w-40 h-auto mb-2 ms-24" />
                <Image src={GooglePlay} alt="Download App" className="w-40 h-auto ms-24" />
              </div>
              <div className='flex'>
                <Image src={QrCode} alt="" className='ms-11' />
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-4xl font-semibold mb-24 text-left md:ms-44 ms-4">
          Need Help?
        </h4>
        <div className="ms-42 max-w-6xl px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-300 bg-gray-100 rounded-xl p-5  shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-left">24/7 Customer Support</h3>
              <p className="text-gray-600 text-left mb-4">
                Our dedicated customer support is always happy to assist you!
              </p>
              <div className='text-left'>
                <button className="text-blue-600 font-medium hover:underline">Raise a Ticket</button>
              </div>
            </div>

            <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-left">FAQ</h3>
              <p className="text-gray-600 mb-4 text-left">
                View FAQs for detailed instructions on specific features.
              </p>
              <div className='text-left'>
                <button className="text-blue-600 font-medium hover:underline">Know More</button>
              </div>
            </div>

            <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-left">Blog</h3>
              <p className="text-gray-600 mb-4 text-left">
                Stay up to date with the latest stories and updates.
              </p>
              <div className='text-left'>
                <button className="text-blue-600 font-medium hover:underline">View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-7'>
          <Image src={Banners} alt="Banners" className='mx-auto object-contain w-5/6 h-fit' />
        </div>
      </section>
      <section>
        <h3 className='text-left font-medium font-sans text-4xl mt-7 px-28 mb-7'>
          Latest Blogs
        </h3>
        <div className="flex justify-start px-14">
          <div className="flex flex-col md:flex-row gap-8 items-center p-6 max-w-6xl w-full">
            <div className="flex flex-col items-center md:items-start px-6 text-center md:text-left">
              <Image src={SmartContracts} alt="Smart Contracts" className="w-full max-w-sm mb-4" />
              <button className="bg-cyan-400 text-white px-6 py-2 rounded shadow hover:bg-cyan-500 transition">
                Guides
              </button>
              <p className="font-bold mt-4">
                The Role of Smart Contracts In Cryptocurrency
                <br />and Blockchain
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-4">
                <Image src={MNTC} alt="MNTC" className="w-52" />
                <div>
                  <button className="bg-cyan-400 text-white w-48 px-7 py-2 rounded shadow hover:bg-cyan-500 transition">
                    Listing / Delisting
                  </button>
                  <p className="font-bold mt-4">
                    Buy, Sell, or Trade Minati Coin (MNTC) in India
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
                <Image src={BlockChain} alt="Blockchain" className="w-52" />
                <div>
                  <button className="bg-cyan-400 text-white w-48 px-7 py-2 rounded shadow hover:bg-cyan-500 transition">
                    Learn
                  </button>
                  <p className="font-bold mt-4">
                    What is Interoperability in Blockchain?
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
                <Image src={KoinbxEarning} alt="Koinbx Earning" className="w-52" />
                <div>
                  <button className="bg-cyan-400 text-white w-48 px-7 py-2 rounded shadow hover:bg-cyan-500 transition">
                    Guides
                  </button>
                  <p className="font-bold mt-4">
                    A Beginner's Guide to KoinBx Earning
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



