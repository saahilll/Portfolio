import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/ironpng.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saahil Pandya Portfolio</title>
        <meta name="description" content="Saahil Pandya Portfolio Website" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-6 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Saahil Pandya"
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Data."
                className="!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text=5xl sm:!text-3xl
              "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Aspiring data scientist passionate about uncovering stories in
                data. Check my recent projects showcasing exploration of machine
                learning, statistical analysis, and data visualization.
                Proficient in Python, I apply these skills to derive insights
                and make data accessible. Explore my evolving portfolio to see
                my journey in the exciting world of data science and its
                transformative potential.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Saahil's Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transperent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* <Link
                  href="mailto:saahilpandya@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base
                "
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
