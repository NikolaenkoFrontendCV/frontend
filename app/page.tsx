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

export default function Page() {
  return (
    <Wrapper>
      <Section data-name="Intro" className="flex items-center" id="intro">
        {/* <div
          className="absolute top-65.25 left-52.75 h-129.75 w-158"
          data-node-id="2109:166"
        >
          <div className="absolute inset-[-43.76%_-35.93%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgEllipse2}
            />
          </div>
        </div> */}
        <div className="flex w-full items-start justify-between">
          <div
            className="top-89.25 left-0 flex w-full translate-y-[-50%] flex-col justify-center font-['Inter:Regular',sans-serif] text-[16px] leading-0 font-normal text-[#d4d4d4] not-italic"
            data-node-id="2107:142"
          >
            <p className="max-w-76.75 leading-normal whitespace-pre-wrap text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Amet duis dictum justo
              proin viverra bibendum rhoncus quis sagittis. Elit feugiat egestas
              senectus a.
            </p>
          </div>
          <div
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
          </div>
        </div>
        <div className="absolute bottom-0 aspect-1297/185 w-full">
          <div className="relative h-full w-full">
            <Image
              alt=""
              className="aspect-1297/185"
              fill
              src={"/FRONTEND.svg"}
            />
          </div>
        </div>
      </Section>
      <Section
        data-name="About"
        className="flex flex-col items-center justify-center"
        id="about"
      >
        <div
          className="flex w-full max-w-135.5 flex-col content-stretch items-center gap-7.5"
          data-name="Container"
          data-node-id="2109:178"
        >
          <SectionTitle number="01" title="About Me" />
          <div
            className="font-lato relative flex w-min min-w-full shrink-0 flex-col justify-center text-center text-[16px] leading-0 text-[#a3a3a3]"
            data-node-id="2109:177"
          >
            <p className="leading-[normal] whitespace-pre-wrap">
              Lorem ipsum dolor sit amet consectetur. Nullam commodo sem metus
              turpis mauris cursus quis tempus. Non nisi dui aliquet pulvinar in
              netus. Facilisi felis blandit condimentum netus donec ac
              consectetur eu. Pretium gravida iaculis at aliquam odio eu ac.
              Cras amet eget est quis tincidunt ornare. Et imperdiet quam
              dictumst accumsan eget. Nec interdum tincidunt orci commodo in
              maecenas varius lobortis diam.
            </p>
          </div>
          <ButtonSet>
            <Button style="filled">Contact me</Button>
            <Button style="outlined">Download CV</Button>
          </ButtonSet>
        </div>
        {/* <div
          className="absolute top-41.25 left-157.5 h-112.5 w-157.25"
          data-name="About-fon"
          data-node-id="2109:975"
        >
          <div className="absolute inset-[-50.47%_-36.1%]">
            <Image
              alt=""
              className="block max-w-none size-full"
              src={imgAboutFon}
            />
          </div>
        </div> */}
      </Section>
      <Section data-name="Skills" id="skills">
        {/* <div
          className="absolute top-14.5 left-18.5 h-182.75 w-248"
          data-name="Skills-fon"
          data-node-id="2133:453"
        >
          <div className="absolute inset-[-31.07%_-22.89%]">
            <Image
              alt=""
              className="block max-w-none size-full"
              src={imgSkillsFon}
            />
          </div>
        </div> */}
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
        {/* <div className="absolute top-[403px] left-[650px] flex h-[1002px] w-0 items-center justify-center">
          <div className="flex-none rotate-[90deg]">
            <div className="relative h-0 w-[1002px]" data-node-id="2117:149">
              <div className="absolute inset-[-1px_0_0_0]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={imgLine1}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div
          className="absolute top-[341px] left-[40px] h-[1152px] w-[1309px]"
          data-name="Experience-fon"
          data-node-id="2133:454"
        >
          <div className="absolute inset-[-19.71%_-17.35%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={imgExperienceFon}
            />
          </div>
        </div> */}
        <SectionTitle number="03" title="Experience" />
        <div
          className="relative flex w-full flex-col content-stretch items-start gap-15"
          data-name="Info"
          data-node-id="2117:183"
        >
          <div className="absolute top-0 left-[50%] h-full w-px rounded-full bg-white"></div>
          <ExperienceStep
            position="Frontend-разработчик"
            company="Cyberzion"
            period="2024-2025"
          >
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac purus
              morbi odio pretium eu. At in nullam vel consectetur sed cras in
              malesuada. Ultricies tincidunt massa eu nam dui elit metus diam.
              Vestibulum enim morbi egestas ligula. Malesuada amet at amet
              ultricies ac. Gravida netus ut pharetra potenti fames a. Mattis
              suscipit lacus dapibus risus elit neque et nibh.
            </p>
            <p>
              At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
              bibendum sapien eu amet pellentesque purus. Ipsum mattis consequat
              lectus euismod et sit feugiat magna. Diam sed feugiat nisl lacinia
              egestas quisque molestie id. Diam risus consectetur quam feugiat
              augue. Gravida amet dignissim ac risus elit lorem et lacinia
              placerat. Posuere viverra posuere nunc diam.
            </p>
          </ExperienceStep>
          <ExperienceStep
            reverse
            position="Frontend-разработчик"
            company="Cyberzion"
            period="2024-2025"
          >
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac purus
              morbi odio pretium eu. At in nullam vel consectetur sed cras in
              malesuada. Ultricies tincidunt massa eu nam dui elit metus diam.
              Vestibulum enim morbi egestas ligula. Malesuada amet at amet
              ultricies ac. Gravida netus ut pharetra potenti fames a. Mattis
              suscipit lacus dapibus risus elit neque et nibh.
            </p>
            <p>
              At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
              bibendum sapien eu amet pellentesque purus. Ipsum mattis consequat
              lectus euismod et sit feugiat magna. Diam sed feugiat nisl lacinia
              egestas quisque molestie id. Diam risus consectetur quam feugiat
              augue. Gravida amet dignissim ac risus elit lorem et lacinia
              placerat. Posuere viverra posuere nunc diam.
            </p>
          </ExperienceStep>
          <ExperienceStep
            position="Frontend-разработчик"
            company="Cyberzion"
            period="2024-2025"
          >
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra leo ac purus
              morbi odio pretium eu. At in nullam vel consectetur sed cras in
              malesuada. Ultricies tincidunt massa eu nam dui elit metus diam.
              Vestibulum enim morbi egestas ligula. Malesuada amet at amet
              ultricies ac. Gravida netus ut pharetra potenti fames a. Mattis
              suscipit lacus dapibus risus elit neque et nibh.
            </p>
            <p>
              At ante urna vel ac sit mi gravida lorem. Lacus euismod tellus
              bibendum sapien eu amet pellentesque purus. Ipsum mattis consequat
              lectus euismod et sit feugiat magna. Diam sed feugiat nisl lacinia
              egestas quisque molestie id. Diam risus consectetur quam feugiat
              augue. Gravida amet dignissim ac risus elit lorem et lacinia
              placerat. Posuere viverra posuere nunc diam.
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
        {/* <div
          className="absolute top-[628px] left-[-66px] h-[934px] w-[1217px]"
          data-name="Portfolio-fon"
          data-node-id="2133:451"
        >
          <div className="absolute inset-[-24.31%_-18.66%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={imgPortfolioFon}
            />
          </div>
        </div> */}
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
        className="flex flex-col items-center gap-7.5 pt-15"
        id="contact"
      >
        {/* <div
          className="absolute top-[152px] left-[92px] h-[743px] w-[1220px]"
          data-name="Contact-fon"
          data-node-id="2133:450"
        >
          <div className="absolute inset-[-30.57%_-18.61%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={imgContactFon}
            />
          </div>
        </div> */}
        <SectionTitle number="05" title="Contact" />
        <Form />
      </Section>
    </Wrapper>
  );
}
