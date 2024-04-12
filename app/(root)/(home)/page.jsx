import Image from "next/image";
import Link from "next/link";
import { FaRegLightbulb, FaRegIdCard } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMegaphoneSharp } from "react-icons/io5";
import turnst from "@/public/assets/turnst-logo.png"
import cll from "@/public/assets/cll-logo.png"
import kbl from "@/public/assets/kbl-logo.png"
import nbd from "@/public/assets/nbd-logo.png"
import misa from "@/public/assets/misa-logo.png"
import guc from "@/public/assets/guc-logo.png"
import hLeft from "@/public/assets/h-left.png"
import hMid from "@/public/assets/h-mid.png"
import hRight from "@/public/assets/h-right.png"
import aSec from "@/public/assets/a-sec.png"

export const metadata = {
  title: "Grandways - Brilliant Minds, Expect More",
  description: ""
}

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full pt-[100px] pb-[50px] flex flex-col items-center max-md:px-[16px]">
          <h1 className="text-center mb-[50px] max-md:text-[48px]">Brilliant Minds,<br/>Expect More</h1>
          <h2 className="text-center text-[24px] mb-[50px] font-light max-md:text-[18px]">
            For <span className="italic">all your <span className="font-bold">marketing & advertising</span></span> needs, The next generation of the<br/>advertising world.
          </h2>

          <Link href={"/contact"}>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>
          </Link>

          <div className="flex justify-center relative">
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] heroimg rounded-[15px] absolute z-2 left-[280px] top-[150px] max-md:w-[128px] max-md:h-[78px] max-md:left-[100px] max-md:top-[50px]">
              <Image src={hLeft} alt="" width={370} height={225} />
            </div>
            <div className="w-[370px] h-[450px] bg-[#D1D1D1] heroimg rounded-[15px] max-md:w-[129px] max-md:h-[156px]">
              <Image src={hMid} alt="" width={370} height={225} />
            </div>
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] heroimg rounded-[15px] absolute z-2 right-[280px] top-[75px] max-md:w-[128px] max-md:h-[78px] max-md:right-[100px] max-md:top-[25px]">
              <Image src={hRight} alt="" width={370} height={225} />
            </div>
          </div>
        </div>

        <div className="w-full px-[135px] max-md:px-[16px] max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mt-[50px] mb-[25px] max-md:text-[36px]">About</h2>
          <div className="flex mb-[50px]">
            <div>
              <p className="w-[700px] max-md:w-[300px] max-md:text-center max-md:text-[16px]">
                  At Grandways, we transform businesses, brands, and organisations through the use of visual and emotive connections, aiming to create a lasting commercial and social impact. We go the extra mile for our clients, hence the mantra; Brilliant Minds, Expect More.
                <br/><br/>
                  The GrandTeam consists of a group of resourceful, noble individuals, who are humble, highly experienced, and hardworking in the following fields:
              </p>

              <p className="font-bold w-[700px] max-md:w-[300px] max-md:text-center max-md:text-[16px]">
                  Graphic Design and Animation | Production and Quality Assurance | Brand Strategy | Public Relations and Media Specialist | Copy Writing | Publication
              </p>
            </div>

            <div className="w-[370px] h-[200px] bg-[#EAE8E8] ml-[90px] rounded-[15px] flex items-center justify-center overflow-hidden max-md:hidden">
              <Image src={aSec} alt="" width={370} height={200} className="" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[50px] bg-[#f0f0f0] max-md:px-[16px] max-md:py-[25px]">
          <h2 className="mb-[50px] max-md:text-[36px]">Our Services</h2>
          <div className="flex flex-col mb-[50px] max-md:gap-[50px]">

            <div className="flex mb-[25px] max-md:flex-col">
              <div className="services w-[570px] h-[225px] mr-[25px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaRegLightbulb className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px]">Strategy Development</p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">We devise the right strategy for your brand to ensure the right message reaches the right audience, at the right time, every time. Brand Strategy Integrated Marketing and Communications Strategy</p>
                </div>
              </div>
              
              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaRegIdCard className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px]">Brand Identity</p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">We develop brands that will give a true reflection of its promise to its own audience. From initial conceptualisation of a new brand, identifying a brand strategy or even re-branding</p>
                </div>
              </div>
            </div>

            <div className="flex max-md:flex-col">
              <div className="services w-[570px] mr-[25px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaPerson className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px]">Merchandise</p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">Grandways finds the best promotional items, corporate merchandise, memorabilia that will speak your brand to your audience. Corporate & Promotional merchandise Branding material Radio jingles (Script and production)</p>
                </div>
              </div>

              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <IoMegaphoneSharp className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px]">Activations & Publications</p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">With activations we connect consumers with brands in ways that transcend conventional means of interaction. We aim to connect people to brands in a way that inspires and requires action</p>
                </div>
              </div>
            </div>
          </div>

          <Link href={"/services"}>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">View Services</button>
          </Link>
        </div>

        <div className="w-full py-[50px] px-[135px] max-md:px-[16px] max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mb-[25px] max-md:text-[36px]">Our Giants</h2>
          <div className="flex justify-between">
            <p className="w-1/2 mb-[50px] max-md:text-[16px] max-md:text-center max-md:w-full">Celebrate our valued partnerships with leading brands. Appreciating the companies we've collaborated with, each representing a successful journey in marketing and advertising. Together, we've achieved remarkable results and fueled growth for our clients.</p>
            <Link href={"/contact"}>
              <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px] max-md:hidden">Work With Us</button>
            </Link>
          </div>

          <div className="w-full h-[150px] bg-[#f0f0f0] flex justify-between items-center rounded-[15px] p-[25px] max-md:flex-col max-md:w-[200px] max-md:h-full max-md:gap-[15px]">
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={turnst} alt="turnstar logo" width={150} height={100} />
            </div>
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={cll} alt="" width={150} height={100} />
            </div>
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={kbl} alt="" width={150} height={100} />
            </div>
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={nbd} alt="" width={150} height={100} />
            </div>
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={misa} alt="" width={150} height={100} />
            </div>
            <div className="bg-white w-[150px] h-[100px] partners rounded-[7.5px] flex items-center justify-center">
              <Image src={guc} alt="" width={150} height={100} />
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
