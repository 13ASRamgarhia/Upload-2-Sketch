import React from "react";
import { Icon } from "semantic-ui-react";
import Appointment from "./Appointment";

const Contact = () => {
  document.title = "Contact |  CineSense"
  const contactlist = [
    {
      icon: "phone",
      title: "Talk to us",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpaa expedita hic ex voluptatum nam possimus temporibus",
      contact: "+91-99999-99999",
    },
    {
      icon: "whatsapp",
      title: "Chat with us",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpaa expedita hic ex voluptatum nam possimus temporibus",
      contact: "+91-90000-00000",
    },
    {
      icon: "chat",
      title: "Live Chat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpaa expedita hic ex voluptatum nam possimus temporibus",
      contact: "Live Chat",
    },
    {
      icon: "user",
      title: "Customer Service",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpaa expedita hic ex voluptatum nam possimus temporibus",
      contact: "8888-8888",
    },
    {
      icon: "mail",
      title: "Email us",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpaa expedita hic ex voluptatum nam possimus temporibus",
      contact: "optic@esports.com",
    },
  ];
  return (
    <div className="py-14 min-h-screen ">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>Contact us</p>
            </div>
            <div className="desc space-y-6 text-white px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                a expedita hic ex voluptatum nam possimus temporibus
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          GET IN TOUCH
        </p>
        <div className="space-y-1">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-xl text-subHeadingColor mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              quidem harum facilis odio error voluptate, libero rem officiis
              quod tempore, molestias sint voluptatum consequuntur. Hic odit
              omnis fuga exercitationem atque.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              quidem harum facilis odio error voluptate, libero rem officiis
              quod tempore, molestias sint voluptatum consequuntur. Hic odit
              omnis fuga exercitationem atque.
            </p>
            <button className="mt-10 bg-gradient-to-r from-logoColor to-headingColor text-xl text-white hover:text-white focus:text-white hover:outline hover:outline-offset-2 rounded-lg">
              <Appointment />
            </button>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
          <div className="space-y-5 w-full">
            <div>
              <p className="text-headingColor text-2xl font-medium font-inter">
                OUR LOCATION
              </p>
              <div className="space-y-1">
                <div className="h-1 w-44 bg-logoColor"></div>
                <div className="h-1 w-36 bg-logoColor"></div>
              </div>
            </div>

            <div className="h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45992.187244567715!2d-78.94110199697552!3d43.90737903791604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51b902fedb973%3A0xdd6091694035e8a1!2sDurham%20College!5e0!3m2!1sen!2sca!4v1712139651605!5m2!1sen!2sca"
              className="border-none w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-4 flex flex-col laptop:flex-row space-x-0 laptop:space-x-10 space-y-4 laptop:space-y-0 mt-10">
        <div className="flex flex-col justify-center w-full px-4 laptop:px-48 space-y-5">
          <div className="grid grid-cols-autofit gap-10 w-full items-center">
            {contactlist.map((element) => {
              return (
                <div className="flex justify-center" key={element.title}>
                  <div className="bg-white shadow-xl rounded-3xl text-center font-inter w-fit text-headingColor space-y-4 p-4">
                    <div className="space-y-3">
                      <Icon name={element.icon} size="large" />
                      <p className="text-2xl font-bold">{element.title}</p>
                    </div>
                    <div>
                      <p className="text-lg">{element.description}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="cursor-pointer bg-headingColor text-white rounded-xl px-4 py-2 w-fit">
                        <p>{element.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
