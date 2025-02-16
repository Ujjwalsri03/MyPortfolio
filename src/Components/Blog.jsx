// src/Components/Blog.jsx

import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BlogData } from "./blogData";

const Blog = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 text-center border-b-2 border-b-blue-600 my-10">
        My Blogs
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {BlogData.map(({ title, img, link, description, techstack }, index) => (
          <div
            key={index}
            className="flex flex-col w-96 gap-2 drop-shadow-xl dark:bg-grey-800 rounded-lg p-4"
          >
            <div className="relative group rounded-lg bg-violet-50">
              <img
                loading="lazy"
                alt="Blog Image"
                className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
                src={img}
              />
              <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                <Link
                  to={link}
                  target="_blank"
                  className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                >
                  <BiLinkExternal size={20} />
                </Link>
              </div>
            </div>

            <div className="my-2 flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-center text-blue-900">
                {title}
              </h3>
              <p className="text-lg text-center text-gray-900">
                {description}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
