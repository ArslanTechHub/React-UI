import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Last = () => {
  return (
    <div id="Last" className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo ut
          labore dignissimos ullam, cum, omnis dolor cumque molestias quasi
          perferendis optio numquam voluptate eum officiis! Eaque, enim eveniet?
        </p>
      
        <div className="flex justify-between md:w-[75%] my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      <div>
        <div className="grid text-center gap-1 sm:grid-cols-4 lg:grid-cols-4 sm:gap-40 lg:gap-40">
          <div>
            <h6 className="font-medium text-gray-400 text-2xl">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400 text-2xl">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400 text-2xl">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blogs</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Press</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400 text-2xl">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Term</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
