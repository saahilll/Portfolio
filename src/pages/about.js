import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
              <Image
                src={profilePic}
                alt="Image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div
              className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8
            "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello, I&apos;m Saahil Pandya, a budding data scientist eager to
                explore the vast world of data and analytics. With a fresh
                perspective and a hunger for knowledge, I&apos;m excited to
                embark on this journey in the field of data science.
              </p>
              <p className="my-4 font-medium">
                Having recently entered this dynamic realm, I am committed to
                unraveling the complexities of data and transforming raw
                information into meaningful insights. My curiosity and
                dedication drive me to constantly seek new challenges and
                innovative solutions.
              </p>
              <p className="font-medium">
                I firmly believe that data science is not just about numbers and
                algorithms; it&apos;s a powerful tool for problem-solving and
                decision-making. My goal is to leverage my skills in statistical
                analysis, machine learning, and data visualization to derive
                valuable conclusions and make informed decisions.
              </p>
              <p className="my-4 font-medium">
                As I navigate through the world of data, I am enthusiastic about
                contributing to projects that have a real-world impact. I am
                confident that my passion for understanding data patterns and my
                commitment to continuous learning will make a positive
                difference in any data-driven endeavor.
              </p>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
