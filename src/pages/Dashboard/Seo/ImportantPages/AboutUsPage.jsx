import { useEffect, useState } from "react";
import H2Title from "../../../../components/Titles/H2Title";
import TextTransition, { presets } from "react-text-transition";
import ScrollToTop from "../../../../components/ScrollToTheTop/ScrollToTheTop";

const timeMoneyEnergyText = ["Time", "Money", "Energy"];
const consistencyQualityFreedom = ["Consistency", "Quality", "Freedom"];
const templatesToolsAssetsResources = ["Templates", "Assets", "Resources"];

const AboutUsPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className=" my-20">
      <ScrollToTop />
      <H2Title baseText={"About"} coloredText={"Us"} />

      <div className="">
        <p className=" max-w-[720px] mx-auto mt-5 text-center p-3 rounded-md">
          Welcome to YT Shops— The Ultimate & Free Marketplace for Content
          Creators - Get millions of stock designs, photos, videos, tools, and
          resources, all in one platform.
        </p>

        {/* who we are and what we do div  */}
        <div className=" flex flex-col lg:flex-row gap-5  max-w-7xl mx-auto">
          {/* who we are div  */}
          <div className=" flex-1 h-52">
            <h2 className=" pl-8 text-start mt-16 text-2xl font-bold">
              Who We Are
            </h2>
            <h3 className=" pl-8  text-start text-base font-medium">
              A Creator-First Culture
            </h3>
            <p className=" mt-5 bg-slate-100  h-64 p-8 rounded-md text-justify">
              At our core, YT Shops is a team built by creators, for creators.
              We are dedicated to building and nurturing the creator economy and
              its ecosystem. Our team culture is centered around understanding
              creators, valuing their input, and continually striving to exceed
              their expectations.
            </p>
          </div>

          {/* what we do div  */}
          <div className=" flex-1">
            <div className=" flex-1">
              <h2 className=" pl-8  text-start mt-16 text-2xl font-bold">
                What We Do
              </h2>
              <h3 className=" pl-8  text-start text-base font-medium">
                The First Global Marketplace for Content Creators
              </h3>
              <p className="  mt-5 bg-slate-100 md:h-64 p-8 rounded-md text-justify">
                We are proud to be the first global marketplace in the Creator
                Economy aiming to help 400 million content creators, there has
                been no centralized marketplace to serve their unique needs -
                until now. Big corporations and existing marketplaces produce
                assets and resources without truly understanding what creators
                need. Our platform gives you tons of stock images, videos,
                designs, tools and resources to use for free. We are proud to be
                the first global marketplace in the creator economy, built by
                creators, for creators.
              </p>
            </div>
          </div>
        </div>

        {/* our mission and vision div  */}
        <div className="w-full  bg-slate-100 mt-28">
          <div className="flex flex-col lg:flex-row lg:max-w-7xl mx-auto justify-between">
            {/* our mission div  */}
            <div className="w-full lg:w-[50%] lg:max-w-xl lg:py-28 px-3">
              <h2 className="text-2xl font-bold w-40 mb-5 text-black">
                Our Mission
              </h2>
              <p className="  text-justify">
                At YT Shops, our mission is to make the content creator&apos;s
                journey & lifespan sustainable by providing freedom with
                creative assets, templates, tools, and resources - entirely for
                free. There are over 400 million creators out there making
                incredible videos and other awesome content. Whether you&apos;re
                a creator yourself, part of a creator&apos;s team, or someone
                who edits videos or designs thumbnails - YT Shops has everything
                you need.
              </p>
            </div>
            {/* our Vision div  */}
            <div className="w-full lg:w-[50%] lg:max-w-xl py-28 px-3">
              <h2 className="text-2xl font-bold w-40 mb-5 text-black">
                Our Vision
              </h2>
              <p className=" text-justify">
                We envision a world where every content creator has the freedom
                to innovate and succeed. YT Shops aims to be the cornerstone of
                the creator economy, providing over 400 million creators with
                free, unlimited access to the tools and resources they need to
                thrive. Our goal is to make the creative process as seamless and
                productive as possible, making creators lifespan longer.
              </p>
            </div>
          </div>
        </div>

        {/* Assets and Resources,  Innovating for Creators, Why Choose YT Shops?Div  */}
        <div className="max-w-7xl mx-auto mt-20 text-justify px-2 lg:px-0">
          {/* Millions of Free Assets and Resources  */}
          <div className="mt-10 ">
            <h2 className="text-2xl font-bold mb-5 text-black ">
              Millions of Free Assets and Resources
            </h2>
            <p className="mt-3">
              At YT Shops, creators gain access to millions of stock images,
              videos, designs, tools, and resources that they can use for free
              in their creative projects. No more wasting time scouring multiple
              platforms or settling for subpar content.
            </p>
          </div>

          {/* Constantly Innovating for Creators */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black ">
              Constantly Innovating for Creators
            </h2>
            <p className="mt-3">
              We are constantly expanding our offerings, with plans to introduce
              advanced tools that leverage AI to make content creation even
              easier. From instantly creating thumbnails and enhancing videos to
              assistance with scriptwriting, YT Shops is committed to developing
              cutting-edge solutions that save creators time and effort.
            </p>
          </div>

          {/* Why Choose YT Shops? */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black ">
              Why Choose YT Shops?
            </h2>
            <p className="mt-3">
              We understand the unique challenges creators face. That&apos;s why
              we&apos;ve obsessed over building a seamless, intuitive experience
              that eliminates workflow friction and fragmentation. With YT
              Shops, you have a single destination for all your creative
              demands, freeing you to focus on what you do best - crafting
              brilliant content.
            </p>
          </div>

          {/* Save Time/Money/Energy */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black inline-flex">
              <span className=" mr-2">Save</span>
              <TextTransition springConfig={presets.wobbly} direction="up">
                {timeMoneyEnergyText[index % timeMoneyEnergyText.length]}
              </TextTransition>
            </h2>
            <p className="mt-3">
              Make your production costs zero and get everything at one place
              that saves your time, money and energy. All in one place.
            </p>
          </div>

          {/* Ensure Consistency/Quality/Freedom */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black inline-flex">
              <span className=" mr-2">Ensure</span>
              <TextTransition springConfig={presets.wobbly} direction="up">
                {
                  consistencyQualityFreedom[
                  index % consistencyQualityFreedom.length
                  ]
                }
              </TextTransition>
            </h2>
            <p className="mt-3">
              Having everything at one place will help you to be more creative,
              will help you to achieve better quality and will give you creative
              freedom.
            </p>
          </div>

          {/* Comprehensive templates/tools/assets/resources */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black inline-flex">
              <span className=" mr-2">Comprehensive</span>
              <TextTransition springConfig={presets.wobbly} direction="up">
                {
                  templatesToolsAssetsResources[
                  index % templatesToolsAssetsResources.length
                  ]
                }
              </TextTransition>
            </h2>
            <p className="mt-3">
              Dive into millions of high-quality, creative assets—all
              meticulously curated to fuel your projects and streamline your
              workflow. Make your lifespan longer and sustainable.
            </p>
          </div>

          {/* Join the YT Shops Revolution */}
          <div className=" mt-10">
            <h2 className="text-2xl font-bold mb-5 text-black ">
              Join the YT Shops Revolution
            </h2>
            <p className="mt-3">
              Whether you&apos;re an established creator or just starting, YT
              Shops is here to support your creative journey every step of the
              way. Explore our vast library of free resources, and experience
              the power of a platform built specifically for content creators
              like you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
