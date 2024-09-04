import React from "react";
import Avatar from "../../assets/avatar.svg";

const Dashboard = () => {
  const contacts = [
    {
      name: "Kapil",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Rahul",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Varun",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mukul",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mayank",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Deepu",
      status: "Available",
      img: Avatar,
    },
  ];

  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary">
        <div className="flex  items-center my-8 mx-14">
          <img
            className="border border-primary p-[2px] rounded-full"
            src={Avatar}
            alt="user"
            height={50}
            width={50}
          />
          <div className="ml-4">
            <h1 className="text-2xl">Liwansh Saini</h1>
            <h1 className="text-lg font-light">my account</h1>
          </div>
        </div>
        <hr />

        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          {contacts.map(({ name, status, img }, index) => {
            return (
              <div
                className="flex items-center py-8 border-b border-b-gray-300"
                key={index}
              >
                <div className="cursor-pointer flex items-center">
                  <img src={img} alt={name} height={40} width={40} />
                  <div className="ml-6">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <h1 className="text-lg font-light text-gray-600">
                      {status}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14">
          <div>
            <img className="cursor-pointer" src={Avatar} alt="user" height={40} width={40} />
          </div>
          <div className="ml-6 mr-auto ">
            <h3 className="text-lg ">Kapil</h3>
            <h1 className="text-lg font-light text-gray-600">online</h1>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 5h6" />
              <path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full border overflow-scroll">
          <div className="h-[1000px] px-10 py-14">
            <div className='h-[80px] w-[300px] bg-secondary rounded-b-xl rounded-tr-xl'></div>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen"></div>
    </div>
  );
};

export default Dashboard;
