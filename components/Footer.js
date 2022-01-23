import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accesibility</p>
        <p>This is not a real site</p>
        <p>Made by r4vit3j4</p>
        <p>lorem ipsum</p>
        <p>Dolor amet</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>r4vit3j4</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Security</p>
        <p>Say Hi</p>
        <p>Easter Eggs</p>
        <p>Policies</p>
      </div>
    </div>
  );
}

export default Footer;
