import React from "react";

import TopCard from "./component/TopCard";
import ProfileDetails from "./component/ProfileDetails";
import Card from "./component/Card";
import Footer from "./component/Footer";

const page = () => {
  return (
    <>
      {" "}
      <TopCard />
      <ProfileDetails />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-black mb-6">Profile Details</h1>
        <Card
          title="Associate Professor"
          subtitle="Medical Physics, IIT Hyderabad"
          dateRange="Jul 2022 - Present"
          content="With expertise in advanced imaging techniques and radiation therapy, my research focuses on enhancing cancer treatment efficacy while minimizing side ..."
          readTime="8min read"
          category="Experience"
        />
        <Card
          title="PhD"
          subtitle="Using nanobots in internal surgery, IIT Bombay"
          dateRange="Jul 2012 - 2017"
          content="It's a surgery being performed by tiny microsurgeons. The surgeons, called nanorobots, are really tiny groups of magnetically charged particles that band together to break up clogged arteries."
          readTime="8min read"
          category="Education"
        />
        <Card
          title="How the neutron collide with another neutron in a certain condition?"
          subtitle="Thoughts of Dr. K Gautam"
          dateRange=""
          content="How the neutron collide with the another neutron in a certain condition how the neutron collide with the another neutron in a certain condition, How the neutron collide with the another neutron in a certain condition how the neutron..."
          readTime="8min read"
          category="Physics"
        />
      </div>
      <Footer />
    </>
  );
};

export default page;
