import React from 'react'
import { Navbar, Footer, Button, ServiceFeature } from "../components"
import {Coworking, DedicatedDesk, EventSpace, MeetingRoom, OfficeSpace, VirtualOffice} from "../public/images"

export default function Services(props) {
	return (
		<>
			<main className='bg-body-background'>
				<Navbar />
				<section className='lg:p-20 p-5'>
					<div className='bg-[#F0F2FB] flex flex-col lg:p-10 p-5 py-10 gap-y-10'>
						<div className='flex flex-col items-center justify-center gap-y-5'>
							<h1 className='font-bold lg:text-5xl text-4xl font-Outfit text-[#242839] text-center md:w-3/4 lg:w-1/2'>
								Our Services
							</h1>
							<p className='text-[#53587A] lg:text-lg text-sm text-center md:w-3/4 lg:w-1/2 font-medium'>
								Sed libero lorem, malesuada at velit sed, efficitur luctus nulla. Sed nec feugiat enim, nec euismod magna.
							</p>
						</div>
						<div className='flex md:flex-row flex-col gap-x-5 justify-center gap-y-5'>
							<Button className={`cursor-pointer font-Outfit rounded text-base text-text-color-2 leading-4 p-4 ${props.buttonStyle}`}>
								Request a Quote
							</Button>
							<Button className={`cursor-pointer bg-transparent border border-[#53587A] font-Outfit rounded text-base text-[#53587A] leading-4 p-4 ${props.buttonStyle}`}>
								View Services
							</Button>
						</div>
					</div>
				</section>
				<section className='lg:p-20 p-5' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
					<div className='flex flex-row flex-wrap gap-y-5 lg:gap-y-0'>
						<ServiceFeature 
							image={Coworking} 
							title="Coworking Space" 
							text="Maecenas at feugiat elit. Aliquam ac tortor a nisl tempus venenatis sed." 
							range="1" />
						<ServiceFeature 
							image={DedicatedDesk} 
							title="Dedicated Desk" 
							text="Nullam nec justo eu elit ornare eleifend. Etiam consectetur quam at ante." 
							range="1" />
						<ServiceFeature 
							image={OfficeSpace} 
							title="Office Space" 
							text="Integer quis felis a arcu ornare facilisis. Morbi tristique augue vel egestas." 
							range="1-100" />
						<ServiceFeature 
							image={VirtualOffice} 
							title="Virtual Office" 
							text="Nam non ante in nunc convallis tempus. Integer scelerisque urna in ex." 
							range="1" />
						<ServiceFeature 
							image={MeetingRoom} 
							title="Meeting Room" 
							text="Nulla consectetur sem a neque tincidunt euismod. Nunc ornare nunc a nisl." 
							range="1-20" />
						<ServiceFeature 
							image={EventSpace} 
							title="Event Space" 
							text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia." 
							range="1-200" />
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}
