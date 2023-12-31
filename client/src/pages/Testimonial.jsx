import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div className="mt-48">
      <div className="flex flex-row flex-wrap justify-around text-center gap-5">
      <div className="bg-gray-200 shadow-lg hover:bg-gray-300 transition ease-in-out overflow-hidden rounded-lg w-full sm:w-[330px] p-3">
        <FaQuoteLeft className="text-red-700"/>
        <p className="font-serif">David did a wonderful job on our house refurbishment - he was resourceful, creative, hard working and provided excellent workmanship - no request was too much problem for him. Great job and will use them again.</p><br />
        <p className="text-slate-800 font-bold">- Lucy B.</p>
      </div>
      <div className="bg-gray-200 shadow-lg hover:bg-gray-300 transition ease-in-out overflow-hidden rounded-lg w-full sm:w-[330px] p-3">
      <FaQuoteLeft className="text-red-700"/>
        <p className="font-serif">David was very quick to respond to our enquiry and within 24 hours we had our existing original windows recalibrated and adjusted and working perfectly, with an order placed for additional matching units. Extremely happy to recommend.</p><br />
        <p className="text-slate-800 font-bold">- Mike T.</p>
      </div>
      <div className="bg-gray-200 shadow-lg hover:bg-gray-300 transition ease-in-out overflow-hidden rounded-lg w-full sm:w-[330px] p-3">
      <FaQuoteLeft className="text-red-700"/>
        <p className="font-serif">We used Pontes Building Contractors for a kitchen remodel. The team were highly professional and managed a clean and tidy site. The work was faultless and we are extremely happy with the fantastic result. Would highly recommend.</p><br />
        <p className="text-slate-800 font-bold">- Susan L.</p>
      </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 text-center mt-32 font-bold font-sans text-4xl">
          <p>Interested in our Services?</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="bg-slate-900 lg:w-1/2 h-[200px] sm:w-full flex flex-row justify-around flex-wrap items-center">
          <div className="text-center">
            <p className="text-white font-bold text-xl">Ask for a Quote!</p>
          </div>
          <div className="text-center flex justify-center">
            <button className="flex flex-row items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us <FaArrowRight /></button>
          </div>
        </div>
      </div>
      <div className="w=full mt-10">
        <div style={{ background: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg') center no-repeat", backgroundSize:'cover'}} className="h-[300px] opacity-60 w-full"></div>
      </div>
    </div>
  )
}
