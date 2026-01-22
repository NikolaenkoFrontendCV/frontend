"use client";

import ExperienceStep from "@/components/main/exerience-step";
import Button, { ButtonSet } from "../components/buttons/button";
import Wrapper from "../components/layout/wrapper";
import SectionTitle from "../components/main/section-title";
import Skills from "../components/main/skills";
import Section from "../components/section/section";
import Image from "next/image";
import Link from "next/link";
import ArrowLink from "@/components/links/arrow-link";
import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/main/project-card";
import Form from "@/components/form/form";
import { motion, MotionConfig } from "framer-motion";
import AnimationText from "@/components/typography/animation-text";
import Dialog from "@/components/dialog/dialog";
import StoreProvider from "./StoreProvider";
import Preview from "@/components/main/preview";
// import EllipsFon from "@/components/layout/fon-figure";

export default function Page() {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <StoreProvider>
        <Wrapper>
          <Section data-name="Intro" className="flex items-center" id="intro">
            {/* <EllipsFon bottom="63px" left="211px" x={632 /2} y={519/2} rotate={0}/> */}
            <div className="flex w-full items-start justify-between">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(-20px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0)" }}
                className="top-89.25 left-0 flex w-full translate-y-[-50%] flex-col justify-center font-['Inter:Regular',sans-serif] text-[16px] leading-0 font-normal text-[#d4d4d4] not-italic"
                data-node-id="2107:142"
              >
                <p className="max-w-76.75 leading-normal whitespace-pre-wrap text-gray-300">
                  Lorem ipsum dolor sit amet consectetur. Amet duis dictum justo
                  proin viverra bibendum rhoncus quis sagittis. Elit feugiat
                  egestas senectus a.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(20px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0)" }}
                className="top-86.75 left-165 flex w-full translate-y-[-50%] flex-col justify-center font-['Inter:Regular',sans-serif] text-[16px] leading-0 font-normal whitespace-pre-wrap text-gray-300 not-italic"
                data-node-id="2127:1008"
              >
                <span className="mb-0 leading-normal">
                  <span>{`Phone: `}</span>
                  <Link
                    href={"tel:89218121099"}
                    className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                  >
                    +7 (921) 812 10 99
                  </Link>
                </span>
                <span className="mb-0 leading-normal">
                  <span>{`Email: `}</span>
                  <Link
                    href={"mailto:nikol.alex06@mail.ru"}
                    className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                  >
                    nikol.alex06@mail.ru
                  </Link>
                </span>
                <span className="leading-normal">
                  <span>{`Telegram: `}</span>
                  <Link
                    href={"https://t.me/AliBabagg"}
                    className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                  >
                    @AliBabagg
                  </Link>
                </span>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, bottom: -20 }}
              whileInView={{ opacity: 1, bottom: 0 }}
              className="absolute bottom-0 aspect-1297/185 w-full"
            >
              <div className="relative h-full w-full">
                <Image
                  alt=""
                  className="aspect-1297/185"
                  fill
                  src={"/FRONTEND.svg"}
                />
              </div>
            </motion.div>
          </Section>
          <Section
            data-name="About"
            className="flex flex-col items-center justify-center"
            id="about"
          >
            {/* <EllipsFon top="165px" left="630px" x={632 /2} y={450/2} rotate={0}/> */}
            <div
              className="flex w-full max-w-135.5 flex-col content-stretch items-center gap-7.5"
              data-name="Container"
              data-node-id="2109:178"
            >
              <SectionTitle number="01" title="About Me" />
              <AnimationText
                direction="bottomToTop"
                className="font-lato relative flex w-min min-w-full shrink-0 flex-col justify-center text-center text-[16px] leading-0 text-[#a3a3a3]"
                data-node-id="2109:177"
              >
                <p className="leading-[normal] whitespace-pre-wrap">
                  Lorem ipsum dolor sit amet consectetur. Nullam commodo sem
                  metus turpis mauris cursus quis tempus. Non nisi dui aliquet
                  pulvinar in netus. Facilisi felis blandit condimentum netus
                  donec ac consectetur eu. Pretium gravida iaculis at aliquam
                  odio eu ac. Cras amet eget est quis tincidunt ornare. Et
                  imperdiet quam dictumst accumsan eget. Nec interdum tincidunt
                  orci commodo in maecenas varius lobortis diam.
                </p>
              </AnimationText>
              <ButtonSet>
                <Button style="filled">Contact me</Button>
                <Button style="outlined">Download CV</Button>
              </ButtonSet>
            </div>
          </Section>
          <Section data-name="Skills" id="skills">
            {/* <EllipsFon bottom="63px" left="211px" x={632 /2} y={519/2} rotate={0}/> */}
            <div
              className="top-0 left-0 flex w-full flex-col content-stretch items-center gap-10 overflow-clip py-15"
              data-name="Frame"
              data-node-id="2109:189"
            >
              <SectionTitle number="02" title="Skills" />
              <Skills />
              <ButtonSet>
                <Button style="filled">Contact me</Button>
                <Button style="outlined">Download CV</Button>
              </ButtonSet>
            </div>
          </Section>
          <Section
            data-name="Experience"
            className="flex flex-col items-center gap-15 pt-31"
            id="experience"
          >
            {/* <EllipsFon top="341px" left="64px" x={315*1.5} y={225*1.5} rotate={0}/>
            <EllipsFon top="693px" left="720px" x={315} y={225} rotate={0}/>
            <EllipsFon top="1043px" left="40px" x={315} y={225} rotate={0}/> */}
            <SectionTitle number="03" title="Experience" />
            <div
              className="relative flex w-full flex-col content-stretch items-start gap-15"
              data-name="Info"
              data-node-id="2117:183"
            >
              <div className="absolute top-0 left-[50%] h-full w-px rounded-full bg-white"></div>
              <ExperienceStep
                id={0}
                position="Frontend-разработчик"
                company="Cyberzion"
                period="2024-2025"
              >
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac
                  purus morbi odio pretium eu. At in nullam vel consectetur sed
                  cras in malesuada. Ultricies tincidunt massa eu nam dui elit
                  metus diam. Vestibulum enim morbi egestas ligula. Malesuada
                  amet at amet ultricies ac. Gravida netus ut pharetra potenti
                  fames a. Mattis suscipit lacus dapibus risus elit neque et
                  nibh.
                </p>
                <p>
                  At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
                  bibendum sapien eu amet pellentesque purus. Ipsum mattis
                  consequat lectus euismod et sit feugiat magna. Diam sed
                  feugiat nisl lacinia egestas quisque molestie id. Diam risus
                  consectetur quam feugiat augue. Gravida amet dignissim ac
                  risus elit lorem et lacinia placerat. Posuere viverra posuere
                  nunc diam.
                </p>
              </ExperienceStep>
              <ExperienceStep
                id={1}
                reverse
                position="Frontend-разработчик"
                company="Cyberzion"
                period="2024-2025"
              >
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac
                  purus morbi odio pretium eu. At in nullam vel consectetur sed
                  cras in malesuada. Ultricies tincidunt massa eu nam dui elit
                  metus diam. Vestibulum enim morbi egestas ligula. Malesuada
                  amet at amet ultricies ac. Gravida netus ut pharetra potenti
                  fames a. Mattis suscipit lacus dapibus risus elit neque et
                  nibh.
                </p>
                <p>
                  At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
                  bibendum sapien eu amet pellentesque purus. Ipsum mattis
                  consequat lectus euismod et sit feugiat magna. Diam sed
                  feugiat nisl lacinia egestas quisque molestie id. Diam risus
                  consectetur quam feugiat augue. Gravida amet dignissim ac
                  risus elit lorem et lacinia placerat. Posuere viverra posuere
                  nunc diam.
                </p>
              </ExperienceStep>
              <ExperienceStep
                id={2}
                position="Frontend-разработчик"
                company="Cyberzion"
                period="2024-2025"
              >
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac
                  purus morbi odio pretium eu. At in nullam vel consectetur sed
                  cras in malesuada. Ultricies tincidunt massa eu nam dui elit
                  metus diam. Vestibulum enim morbi egestas ligula. Malesuada
                  amet at amet ultricies ac. Gravida netus ut pharetra potenti
                  fames a. Mattis suscipit lacus dapibus risus elit neque et
                  nibh.
                </p>
                <p>
                  At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
                  bibendum sapien eu amet pellentesque purus. Ipsum mattis
                  consequat lectus euismod et sit feugiat magna. Diam sed
                  feugiat nisl lacinia egestas quisque molestie id. Diam risus
                  consectetur quam feugiat augue. Gravida amet dignissim ac
                  risus elit lorem et lacinia placerat. Posuere viverra posuere
                  nunc diam.
                </p>
              </ExperienceStep>
            </div>

            <ButtonSet>
              <Button style="filled">Contact me</Button>
              <Button style="outlined">Download CV</Button>
            </ButtonSet>
          </Section>
          <Section
            data-name="Portfolio"
            className="flex flex-col items-center gap-15 pt-31"
            id="portfolio"
          >
            <SectionTitle number="04" title="Portfolio" />
            <div
              className="flex flex-col content-stretch items-center gap-5"
              data-name="Portfolio-list"
              data-node-id="2124:483"
            >
              <div className="grid grid-cols-2 gap-5">
                {portfolioData.map((item) => (
                  <ProjectCard key={item.id} {...item} />
                ))}
              </div>
              <div
                className="relative flex shrink-0 flex-col content-stretch items-center gap-2.5"
                data-node-id="2124:509"
              >
                <ArrowLink href="#">Show more</ArrowLink>
                <div
                  className="font-lato relative flex shrink-0 flex-col justify-center text-[16px] leading-0 whitespace-nowrap text-gray-400 not-italic"
                  data-node-id="2124:498"
                >
                  <p className="leading-[normal]">or</p>
                </div>
                <div
                  className="font-lato relative flex shrink-0 flex-col justify-center text-[16px] leading-0 whitespace-nowrap text-white not-italic"
                  data-node-id="2124:500"
                >
                  <p className="leading-[normal] underline decoration-solid [text-underline-position:from-font]">
                    Look at my github
                  </p>
                </div>
              </div>
            </div>
          </Section>
          <Section
            data-name="Contact"
            className="flex flex-col items-center justify-center gap-7.5 pt-15 pb-30"
            id="contacts"
          >
            <SectionTitle number="05" title="Contact" />
            <Form />
          </Section>
        </Wrapper>
        <Dialog />
        <Preview />
      </StoreProvider>
    </MotionConfig>
  );
}
