import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[325px] bg-[#BA9E25] flex items-center justify-center gap-32'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex w-fit h-fit'>
                <Image
                    src={"/images/logo/footer-logo.png"}
                    width={500}
                    height={500}
                    className='w-fit h-fit rounded-[100%]'
                    alt='footer logo'
                />
            </div>
            <div className='flex gap-3'>
                {/* FACEBOOK ICON */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="black"/>
                </svg>
                {/* INSTAGRAM ICON */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <   path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="black"/>
                </svg>
                {/* TWITTER ICON */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28001 9.09 5.11001 7.38 3.00001 4.79C2.63001 5.42 2.42001 6.16 2.42001 6.94C2.42001 8.43 3.17001 9.75 4.33001 10.5C3.62001 10.5 2.96001 10.3 2.38001 10V10.03C2.38001 12.11 3.86001 13.85 5.82001 14.24C5.19085 14.4129 4.53005 14.4369 3.89001 14.31C4.16162 15.1625 4.69355 15.9084 5.41103 16.4429C6.1285 16.9775 6.99546 17.2737 7.89001 17.29C6.37368 18.4905 4.49402 19.1394 2.56001 19.13C2.22001 19.13 1.88001 19.11 1.54001 19.07C3.44001 20.29 5.70001 21 8.12001 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div className='font-iItalic flex gap-10 text-black'>
            <div className='flex flex-col h-fit w-[150px] gap-3'>
                <Link
                    href={"/"}
                    className="text-[24px]"
                >
                    Home
                </Link>
            </div>
            <div className='flex flex-col h-fit w-[150px] gap-3'>
                <Link
                    href={"/"}
                    className="text-[24px]"
                >
                    About Us
                </Link>
                <div className='w-full h-fit gap-3 flex flex-col ms-5 text-[16px]'>
                    <Link
                        href={"/"}
                    >
                        Employees
                    </Link>
                    <Link
                        href={"/"}
                    >
                        Inquiries
                    </Link>
                </div>
            </div>
            <div className='flex flex-col h-fit w-[150px] gap-3'>
                <Link
                    href={"/"}
                    className="text-[24px]"
                >
                    Services
                </Link>
                <div className='w-full h-fit gap-3 flex flex-col ms-5 text-[16px]'>
                    <Link
                        href={"/"}
                    >
                        Offers
                    </Link>
                    <Link
                        href={"/"}
                    >
                        Package
                    </Link>
                    <Link
                        href={"/"}
                    >
                        Pricing
                    </Link>
                </div>
            </div>
            <div className='flex flex-col h-fit w-[150px] gap-3'>
                <Link
                    href={"/"}
                    className="text-[24px]"
                >
                    Booking
                </Link>
                <div className='w-full h-fit gap-3 flex flex-col ms-5 text-[16px]'>
                    <Link
                        href={"/"}
                    >
                        Booking Form
                    </Link>
                    <Link
                        href={"/"}
                    >
                        Find Booking
                    </Link>
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
