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
                  <h1 className="text-lg font-light text-gray-600">{status}</h1>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
          <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14">
            <div> <img src={Avatar} alt="user" height={40} width={40}/></div>
            <h3  className="text-lg ml-6">Kapil</h3>
          </div>
      </div>
      <div className="w-[25%] h-screen"></div>
    </div>
  );
};

export default Dashboard;
