import { useLocation } from "react-router-dom";
import Path from "./Path";
import { Helmet } from "react-helmet";

export default function Contact() {
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="container mx-auto pt-20 pb-[140px] font-poppins">
      <Helmet>
        <title>Contact Us - Exclusive</title>
        <meta
          name="description"
          content="Need help? Get in touch with us for support, inquiries, or feedback. Our team is here to assist you with your shopping experience."
        />
        </Helmet>
      <Path prev={"Home"} path={"Contact"} />
      <div className="pt-20 px-2 flex flex-col md:flex-row justify-center items-start gap-4">
        <div className="w-full h-full md:w-1/3 p-6 rounded shadow-[0_1px_13px_rgba(0,0,0,0.05)] bg-white">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-phone bg-main text-white p-3 text-2xl rounded-full"></i>
              <p className="text-base text-text-3 font-medium">Call Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-normal">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-normal">Phone: +8801611112222</p>
            </div>
          </div>
          <div className="border-b border-b-black my-8"></div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <i className="fa-regular fa-envelope bg-main text-white p-3 text-2xl rounded-full"></i>
              <p className="text-base text-text-3 font-medium">Write To US</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-normal">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm font-normal">
                Email: customer@exclusive.com
              </p>
              <p className="text-sm font-normal">
                Email: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:w-2/3 px-6 py-8 rounded shadow-[0_1px_13px_rgba(0,0,0,0.05)] bg-white">
          <form action="" className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="text-base font-normal rounded bg-gray-100 border-none py-3 pl-4 outline-none w-full lg:max-w-[335px] focus:ring-main"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="text-base font-normal rounded bg-gray-100 border-none py-3 pl-4 outline-none w-full lg:max-w-[335px] focus:ring-main "
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                required
                className="text-base font-normal rounded bg-gray-100 border-none py-3 pl-4 outline-none w-full lg:max-w-[335px] focus:ring-main "
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 text-base font-normal rounded bg-gray-100 border-none h-[207px] resize-none outline-none focus:ring-main"
            />
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="text-white font-medium bg-main hover:bg-opacity-90 rounded-md px-6 py-2 w-fit text-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
