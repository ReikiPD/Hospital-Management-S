import React from "react";
import background from "../assets/bg.jpg";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-primary text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Your Appointment <br /> With Your Trusted Doctors
        </p>
      </div>

      {/* --------- Header Right (Optional) --------- */}
      <div className="md:w-1/2 relative">

      </div>
    </div>
  );
};

export default Header;
