import Button, { ButtonSet } from "../components/buttons/button";
import Wrapper from "../components/layout/wrapper";
import SectionTitle from "../components/main/section-title";
import Skills from "../components/main/skills";
import Section from "../components/section/section";
import Image from "next/image";
import Link from "next/link";

const imgImage2 =
  "https://www.figma.com/api/mcp/asset/cadf1045-37c4-4a3b-8d36-e4d2d0de172e";
const img =
  "https://www.figma.com/api/mcp/asset/0f7263ed-5bc8-4eba-ab34-e191916117a4";
const imgDesktop1 =
  "https://www.figma.com/api/mcp/asset/f3a908fb-5794-4e81-889c-7c9156e3dc5e";
const imgDesktop3 =
  "https://www.figma.com/api/mcp/asset/88ee11bc-bf54-49c2-984c-d56c7a774bfe";
const imgDesktop4 =
  "https://www.figma.com/api/mcp/asset/a726e8f2-cd45-480e-9213-9ec5dcfd67ff";
const imgHtml5SvgrepoCom1 =
  "https://www.figma.com/api/mcp/asset/46b70ba0-3ba3-49b9-82cc-f4a706fa80ea";
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/3b2534d4-5506-4c3d-87fa-47f4749c039a";
const imgGroup2 =
  "https://www.figma.com/api/mcp/asset/672e985b-4711-4998-8d86-939b9edb68e3";
const imgTelegramSvgrepoCom1 =
  "https://www.figma.com/api/mcp/asset/5efcc9f4-be40-474b-9c64-38c9a37e0a35";
const imgGroup3 =
  "https://www.figma.com/api/mcp/asset/3ce968fc-9775-4c55-9228-e249b8656c76";
const imgLine2 =
  "https://www.figma.com/api/mcp/asset/6b471691-5d91-4063-953e-da7a7e189af4";
const imgContactFon =
  "https://www.figma.com/api/mcp/asset/5f7c63ea-1d6f-40ac-b3e9-0b4aa02be3d6";
const imgPortfolioFon =
  "https://www.figma.com/api/mcp/asset/a8ebb62f-7715-4b13-8ffa-5eea7db4cea0";
const img1 =
  "https://www.figma.com/api/mcp/asset/41350f33-8ce6-4dc2-89fe-f409f16392da";
const imgLine1 =
  "https://www.figma.com/api/mcp/asset/1ec2a611-1bf0-480b-8439-00d3b5f3cae4";
const imgEllipse1 =
  "https://www.figma.com/api/mcp/asset/667c8113-13c6-463f-bd6d-4c4f206bddde";
const imgExperienceFon =
  "https://www.figma.com/api/mcp/asset/c44658b0-2faf-4804-aee1-bbd09df1fcc0";
const imgSkillsFon =
  "https://www.figma.com/api/mcp/asset/5a8b50dc-7dbd-4246-ae66-2a1bce84ac5e";
const imgAboutFon =
  "https://www.figma.com/api/mcp/asset/6d731a31-3690-43f4-94ed-c94388242961";
const imgEllipse2 =
  "https://www.figma.com/api/mcp/asset/5e3166a0-7369-47c0-a6dd-2d02209054f1";


function Frame1({ className }: { className?: string }) {
  return (
    <div className={className} data-node-id="2117:221">
      <div
        className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
        data-node-id="2117:215"
      >
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Show more
        </p>
      </div>
      <div
        className="relative shrink-0 size-[24px]"
        data-name="arrow-right"
        data-node-id="2117:218"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={imgArrowRight}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Wrapper>
      <Section
        data-name="Intro"
        className="flex items-center"
        data-node-id="2109:174"
      >
        <div
          className="absolute h-[519px] left-[211px] top-[261px] w-[632px]"
          data-node-id="2109:166"
        >
          <div className="absolute inset-[-43.76%_-35.93%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgEllipse2}
            />
          </div>
        </div>
        <div className="flex justify-between items-start w-full">
          <div
            className="flex flex-col w-full font-['Inter:Regular',sans-serif] font-normal justify-center leading-0 left-0 not-italic text-[#d4d4d4] text-[16px] top-[357px] translate-y-[-50%] w-[307px]"
            data-node-id="2107:142"
          >
            <p className="leading-[1.5] max-w-[307px] text-gray-300 whitespace-pre-wrap">
              Lorem ipsum dolor sit amet consectetur. Amet duis dictum justo
              proin viverra bibendum rhoncus quis sagittis. Elit feugiat egestas
              senectus a.
            </p>
          </div>
          <div
            className="flex flex-col w-full text-gray-300 font-['Inter:Regular',sans-serif] font-normal justify-center leading-0 left-[660px] not-italic text-[#d4d4d4] text-[16px] top-[347px] translate-y-[-50%] w-[307px] whitespace-pre-wrap"
            data-node-id="2127:1008"
          >
            <span className="leading-[1.5] mb-0">
              <span>{`Phone: `}</span>
              <Link
                href={"tel:89218121099"}
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline"
              >
                +7 (921) 812 10 99
              </Link>
            </span>
            <span className="leading-[1.5] mb-0">
              <span>{`Email: `}</span>
              <Link
                href={"mailto:nikol.alex06@mail.ru"}
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline"
              >
                nikol.alex06@mail.ru
              </Link>
            </span>
            <span className="leading-[1.5]">
              <span>{`Telegram: `}</span>
              <Link
                href={"https://t.me/AliBabagg"}
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline"
              >
                @AliBabagg
              </Link>
            </span>
          </div>
        </div>
        <div className="absolute w-full bottom-0 aspect-1297/185">
          <div className="relative w-full h-full">
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
        data-node-id="2109:175"
      >
        <div
          className="content-stretch flex flex-col gap-7.5 items-center max-w-135.5 w-full"
          data-name="Container"
          data-node-id="2109:178"
        >
          <SectionTitle number="01" title="About Me" />
          <div
            className="flex flex-col font-lato justify-center leading-0 min-w-full relative shrink-0 text-[#a3a3a3] text-[16px] text-center w-[min-content]"
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
        <div
          className="absolute h-[450px] left-[630px] top-[165px] w-[629px]"
          data-name="About-fon"
          data-node-id="2109:975"
        >
          <div className="absolute inset-[-50.47%_-36.1%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgAboutFon}
            />
          </div>
        </div>
      </Section>
      <Section data-name="Skills" data-node-id="2109:974">
        <div
          className="absolute h-[731px] left-[74px] top-[58px] w-[992px]"
          data-name="Skills-fon"
          data-node-id="2133:453"
        >
          <div className="absolute inset-[-31.07%_-22.89%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgSkillsFon}
            />
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[40px] items-center left-0 overflow-clip px-[202px] py-[60px] top-0 w-[1300px]"
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
      <Section data-name="Experience" data-node-id="2109:977">
        <div className="absolute flex h-[1002px] items-center justify-center left-[650px] top-[403px] w-0">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[1002px]" data-node-id="2117:149">
              <div className="absolute inset-[-1px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine1}
                />
              </div>
            </div>
          </div>
        </div>
        <SectionTitle number="03" title="Experience" />
        <div
          className="content-stretch flex flex-col gap-[60px] items-start left-0 top-[403px] w-[1300px]"
          data-name="Info"
          data-node-id="2117:183"
        >
          <div
            className="content-stretch flex gap-[40px] items-center justify-center overflow-clip px-[40px] py-[10px] relative shrink-0 w-full"
            data-node-id="2117:168"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px relative shrink-0"
              data-node-id="2117:169"
            >
              <div
                className="content-stretch flex flex-col gap-2.5 h-[53px] items-center justify-center leading-0 not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="2117:170"
              >
                <div
                  className="flex flex-col font-['Lato:Bold',sans-serif] justify-center relative shrink-0 text-[#f5f5f5] text-[20px]"
                  data-node-id="2117:171"
                >
                  <p className="leading-[normal]">Frontend-разработчик</p>
                </div>
                <div
                  className="flex flex-col font-lato justify-center relative shrink-0 text-[#a3a3a3] text-[16px]"
                  data-node-id="2117:172"
                >
                  <p className="leading-[normal]">Cyberzion, 2024-2025</p>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 size-[12px]"
              data-node-id="2117:173"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse1}
              />
            </div>
            <div
              className="content-stretch flex flex-col gap-2.5 items-start justify-center relative shrink-0"
              data-node-id="2117:195"
            >
              <div
                className="flex flex-col font-lato justify-center leading-[1.5] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-justify w-[564px] whitespace-pre-wrap"
                data-node-id="2117:174"
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
              </div>
              <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
            </div>
          </div>
          <div
            className="content-stretch flex gap-[40px] items-center justify-center overflow-clip px-[40px] py-[10px] relative shrink-0 w-full"
            data-node-id="2117:176"
          >
            <div
              className="content-stretch flex flex-col gap-2.5 items-start justify-center relative shrink-0"
              data-node-id="2117:245"
            >
              <div
                className="flex flex-col font-lato justify-center leading-[1.5] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-justify w-[564px] whitespace-pre-wrap"
                data-node-id="2117:246"
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
              </div>
              <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
            </div>
            <div
              className="relative shrink-0 size-[12px]"
              data-node-id="2117:181"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse1}
              />
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative shrink-0"
              data-node-id="2117:177"
            >
              <div
                className="content-stretch flex flex-col gap-2.5 h-[53px] items-center justify-center leading-0 not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="2117:178"
              >
                <div
                  className="flex flex-col font-['Lato:Bold',sans-serif] justify-center relative shrink-0 text-[#f5f5f5] text-[20px]"
                  data-node-id="2117:179"
                >
                  <p className="leading-[normal]">Frontend-разработчик</p>
                </div>
                <div
                  className="flex flex-col font-lato justify-center relative shrink-0 text-[#a3a3a3] text-[16px]"
                  data-node-id="2117:180"
                >
                  <p className="leading-[normal]">Cyberzion, 2024-2025</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[40px] items-center justify-center overflow-clip px-[40px] py-[10px] relative shrink-0 w-full"
            data-node-id="2117:184"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px relative shrink-0"
              data-node-id="2117:187"
            >
              <div
                className="content-stretch flex flex-col gap-2.5 h-[53px] items-center justify-center leading-0 not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="2117:188"
              >
                <div
                  className="flex flex-col font-['Lato:Bold',sans-serif] justify-center relative shrink-0 text-[#f5f5f5] text-[20px]"
                  data-node-id="2117:189"
                >
                  <p className="leading-[normal]">Frontend-разработчик</p>
                </div>
                <div
                  className="flex flex-col font-lato justify-center relative shrink-0 text-[#a3a3a3] text-[16px]"
                  data-node-id="2117:190"
                >
                  <p className="leading-[normal]">Cyberzion, 2024-2025</p>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 size-[12px]"
              data-node-id="2117:186"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse1}
              />
            </div>
            <div
              className="content-stretch flex flex-col gap-2.5 items-start justify-center relative shrink-0"
              data-node-id="2117:261"
            >
              <div
                className="flex flex-col font-lato justify-center leading-[1.5] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-justify w-[564px] whitespace-pre-wrap"
                data-node-id="2117:262"
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
              </div>
              <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
            </div>
          </div>
        </div>

        <div
          className="content-stretch flex gap-5 items-start left-[487px] top-[1455px]"
          data-name="Contact-buttons"
          data-node-id="2124:510"
        >
          <div
            className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0"
            data-node-id="2124:511"
          >
            <div
              className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#262626] text-[20px] whitespace-nowrap"
              data-node-id="I2124:511;2109:201"
            >
              <p className="leading-[99.91000366210938%]">Contact me</p>
            </div>
          </div>
          <div
            className="border border-[#f5f5f5] border-solid content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0"
            data-node-id="2124:512"
          >
            <div
              className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap"
              data-node-id="I2124:512;2109:198"
            >
              <p className="leading-[99.91000366210938%]">Download CV</p>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[1152px] left-[40px] top-[341px] w-[1309px]"
          data-name="Experience-fon"
          data-node-id="2133:454"
        >
          <div className="absolute inset-[-19.71%_-17.35%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgExperienceFon}
            />
          </div>
        </div>
      </Section>
      <Section data-name="Portfolio" data-node-id="2117:269">
        <div
          className="absolute h-[934px] left-[-66px] top-[628px] w-[1217px]"
          data-name="Portfolio-fon"
          data-node-id="2133:451"
        >
          <div className="absolute inset-[-24.31%_-18.66%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgPortfolioFon}
            />
          </div>
        </div>
        <SectionTitle number="04" title="Portfolio" />
        <div
          className="absolute content-stretch flex flex-col gap-5 items-center left-0 top-[403px] w-[1301px]"
          data-name="Portfolio-list"
          data-node-id="2124:483"
        >
          <div
            className="content-stretch flex flex-[1_0_0] gap-5 items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full"
            data-node-id="2124:420"
          >
            <div
              className="border border-[#a3a3a3] border-solid content-stretch flex flex-col gap-2.5 h-full items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[640px]"
              data-node-id="2124:421"
            >
              <div
                className="aspect-910/568 relative rounded-[10px] shrink-0 w-full"
                data-name="Desktop - 1"
                data-node-id="I2124:421;2124:350"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                  <img
                    alt=""
                    className="absolute h-[131.51%] left-0 max-w-none top-[0.02%] w-full"
                    src={img}
                  />
                </div>
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px p-[10px] relative shrink-0 w-full"
                data-node-id="I2124:421;2124:353"
              >
                <div
                  className="content-stretch flex flex-col gap-2.5 items-start leading-0 relative shrink-0 text-white w-full"
                  data-node-id="I2124:421;2124:364"
                >
                  <div
                    className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[24px] whitespace-nowrap"
                    data-node-id="I2124:421;2124:352"
                  >
                    <p className="leading-[normal]">DialTrace</p>
                  </div>
                  <div
                    className="flex flex-col font-lato justify-center min-w-full not-italic relative shrink-0 text-[16px] w-[min-content]"
                    data-node-id="I2124:421;2124:354"
                  >
                    <p className="leading-[normal] whitespace-pre-wrap">
                      Lorem ipsum dolor sit amet consectetur. Etiam est commodo
                      et pulvinar commodo tortor donec duis tellus. Mattis et id
                      nullam adipiscing.
                    </p>
                  </div>
                </div>
                <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
              </div>
            </div>
            <div
              className="border border-[#a3a3a3] border-solid content-stretch flex flex-col gap-2.5 h-full items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[640px]"
              data-node-id="2124:422"
            >
              <div
                className="aspect-[910/568] relative rounded-[10px] shrink-0 w-full"
                data-name="Desktop - 1"
                data-node-id="2124:423"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[10px]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                    <img
                      alt=""
                      className="absolute h-[131.51%] left-0 max-w-none top-[0.02%] w-full"
                      src={img}
                    />
                  </div>
                  <div
                    className="absolute bg-repeat bg-size-[620.0000141859055px_387.3388862013817px] bg-top-left inset-0 rounded-[10px]"
                    style={{ backgroundImage: `url('${imgDesktop1}')` }}
                  />
                </div>
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px p-[10px] relative shrink-0 w-full"
                data-node-id="2124:424"
              >
                <div
                  className="content-stretch flex flex-col gap-2.5 items-start leading-0 relative shrink-0 text-white w-full"
                  data-node-id="2124:425"
                >
                  <div
                    className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[24px] whitespace-nowrap"
                    data-node-id="2124:426"
                  >
                    <p className="leading-[normal]">PZKgroup</p>
                  </div>
                  <div
                    className="flex flex-col font-lato h-[38px] justify-center not-italic relative shrink-0 text-[16px] w-[600px]"
                    data-node-id="2124:427"
                  >
                    <p className="leading-[normal] whitespace-pre-wrap">
                      Lorem ipsum dolor sit amet consectetur. Etiam est commodo
                      et pulvinar commodo tortor donec duis tellus. Mattis et id
                      nullam adipiscing.
                    </p>
                  </div>
                </div>
                <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] gap-5 items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full"
            data-node-id="2124:444"
          >
            <div
              className="border border-[#a3a3a3] border-solid content-stretch flex flex-col gap-2.5 h-full items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[640px]"
              data-node-id="2124:446"
            >
              <div
                className="aspect-[910/568] bg-repeat bg-size-[619.9999998807907px_421.8895965218544px] bg-top-left rounded-[10px] shrink-0 w-full"
                data-name="Desktop - 3"
                data-node-id="2124:481"
                style={{ backgroundImage: `url('${imgDesktop3}')` }}
              />
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px p-[10px] relative shrink-0 w-full"
                data-node-id="2124:448"
              >
                <div
                  className="content-stretch flex flex-col gap-2.5 items-start leading-0 relative shrink-0 text-white w-full"
                  data-node-id="I2124:446;2124:364"
                >
                  <div
                    className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[24px] whitespace-nowrap"
                    data-node-id="I2124:446;2124:352"
                  >
                    <p className="leading-[normal]">Cyberzion</p>
                  </div>
                  <div
                    className="flex flex-col font-lato h-[38px] justify-center not-italic relative shrink-0 text-[16px] w-[600px]"
                    data-node-id="I2124:446;2124:354"
                  >
                    <p className="leading-[normal] whitespace-pre-wrap">
                      Lorem ipsum dolor sit amet consectetur. Etiam est commodo
                      et pulvinar commodo tortor donec duis tellus. Mattis et id
                      nullam adipiscing.
                    </p>
                  </div>
                </div>
                <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
              </div>
            </div>
            <div
              className="border border-[#a3a3a3] border-solid content-stretch flex flex-col gap-2.5 h-full items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[640px]"
              data-node-id="2124:467"
            >
              <div
                className="aspect-[910/568] overflow-clip relative rounded-[10px] shrink-0 w-full"
                data-name="Desktop - 1"
                data-node-id="2124:468"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[10px]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                    <img
                      alt=""
                      className="absolute h-[131.51%] left-0 max-w-none top-[0.02%] w-full"
                      src={img}
                    />
                  </div>
                  <div
                    className="absolute bg-repeat bg-size-[620.0000141859055px_387.3388862013817px] bg-top-left inset-0 rounded-[10px]"
                    style={{ backgroundImage: `url('${imgDesktop1}')` }}
                  />
                </div>
                <div
                  className="absolute bg-repeat bg-size-[621.9999916553497px_389.07260888814926px] bg-top-left h-[388px] left-[-1px] top-[-1px] w-[622px]"
                  data-name="Desktop - 4"
                  data-node-id="2124:484"
                  style={{ backgroundImage: `url('${imgDesktop4}')` }}
                />
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px p-[10px] relative shrink-0 w-full"
                data-node-id="2124:469"
              >
                <div
                  className="content-stretch flex flex-col gap-2.5 items-start leading-0 relative shrink-0 text-white w-full"
                  data-node-id="2124:470"
                >
                  <div
                    className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[24px] whitespace-nowrap"
                    data-node-id="2124:471"
                  >
                    <p className="leading-[normal]">Exchange</p>
                  </div>
                  <div
                    className="flex flex-col font-lato h-[38px] justify-center not-italic relative shrink-0 text-[16px] w-[600px]"
                    data-node-id="2124:472"
                  >
                    <p className="leading-[normal] whitespace-pre-wrap">
                      Lorem ipsum dolor sit amet consectetur. Etiam est commodo
                      et pulvinar commodo tortor donec duis tellus. Mattis et id
                      nullam adipiscing.
                    </p>
                  </div>
                </div>
                <Frame1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-2.5 items-center relative shrink-0"
            data-node-id="2124:509"
          >
            <div
              className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0"
              data-node-id="2124:486"
            >
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                data-node-id="I2124:486;2117:215"
              >
                <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline">
                  Show more
                </p>
              </div>
              <div
                className="relative shrink-0 size-[24px]"
                data-name="arrow-right"
                data-node-id="I2124:486;2117:218"
              >
                <img alt="" className="block max-w-none size-full" src={img1} />
              </div>
            </div>
            <div
              className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
              data-node-id="2124:498"
            >
              <p className="leading-[normal]">or</p>
            </div>
            <div
              className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
              data-node-id="2124:500"
            >
              <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline">
                Look at my github
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section data-name="Contact" data-node-id="2124:524">
        <SectionTitle number="05" title="Contact" />
        <div
          className="absolute content-stretch flex flex-col gap-[30px] items-center justify-center left-[355px] top-[308px] w-[591px]"
          data-name="Form"
          data-node-id="2133:427"
        >
          <div
            className="border border-[#a3a3a3] border-solid content-stretch flex flex-col gap-5 items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full"
            data-node-id="2124:539"
          >
            <div
              className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full"
              data-node-id="2124:543"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-2.5 items-start min-h-px min-w-px relative shrink-0"
                data-node-id="2124:568"
              >
                <div
                  className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                  data-node-id="2124:569"
                >
                  <p className="leading-[normal]">Your phone number*</p>
                </div>
                <div
                  className="border border-[#a3a3a3] border-solid content-stretch flex items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="2124:542"
                >
                  <div
                    className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
                    data-node-id="2124:541"
                  >
                    <p className="leading-[normal]">Phone</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                data-node-id="2124:547"
              >
                <p className="leading-[normal]">or</p>
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-2.5 items-start min-h-px min-w-px relative shrink-0"
                data-node-id="2124:570"
              >
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0"
                  data-node-id="2124:574"
                >
                  <div
                    className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                    data-node-id="2124:571"
                  >
                    <p className="leading-[normal]">Your email*</p>
                  </div>
                </div>
                <div
                  className="border border-[#a3a3a3] border-solid content-stretch flex items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="2124:572"
                >
                  <div
                    className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
                    data-node-id="2124:573"
                  >
                    <p className="leading-[normal]">Email</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2.5 items-start relative shrink-0 w-full"
              data-node-id="2124:577"
            >
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                data-node-id="2124:578"
              >
                <p className="leading-[normal]">How should I address you*</p>
              </div>
              <div
                className="border border-[#a3a3a3] border-solid content-stretch flex items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="2124:579"
              >
                <div
                  className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
                  data-node-id="2124:580"
                >
                  <p className="leading-[normal]">Name</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2.5 items-start relative shrink-0 w-full"
              data-node-id="2124:582"
            >
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                data-node-id="2124:583"
              >
                <p className="leading-[normal]">Where are you from</p>
              </div>
              <div
                className="border border-[#a3a3a3] border-solid content-stretch flex items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="2124:584"
              >
                <div
                  className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
                  data-node-id="2124:585"
                >
                  <p className="leading-[normal]">Company</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2.5 items-start relative shrink-0 w-full"
              data-node-id="2124:591"
            >
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
                data-node-id="2124:592"
              >
                <p className="leading-[normal]">Additional information</p>
              </div>
              <div
                className="border border-[#a3a3a3] border-solid content-stretch flex h-[82px] items-start px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full"
                data-node-id="2124:593"
              >
                <div
                  className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap"
                  data-node-id="2124:594"
                >
                  <p className="leading-[normal]">{`Additional `}</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full"
              data-node-id="2133:394"
            >
              <button
                className="block border border-[#a3a3a3] border-solid cursor-pointer relative rounded-[4px] shrink-0 size-[20px]"
                data-node-id="I2133:394;2109:818"
              />
              <p
                className="flex-[1_0_0] font-lato leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f5f5] text-[16px] tracking-[0.8px] whitespace-pre-wrap"
                data-node-id="I2133:394;2109:793"
              >
                Подтверждаю согласие с политикой конфиденциальности и обработки
                персональных данных
              </p>
            </div>
            <div
              className="bg-[#737373] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0"
              data-node-id="2124:587"
            >
              <div
                className="flex flex-col font-lato justify-center leading-0 not-italic relative shrink-0 text-[#262626] text-[20px] whitespace-nowrap"
                data-node-id="I2124:587;2109:213"
              >
                <p className="leading-[99.91000366210938%]">Send</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0 w-full"
            data-node-id="2133:426"
          >
            <div
              className="flex-[1_0_0] h-0 min-h-px min-w-px relative shrink-0"
              data-node-id="2133:423"
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine2}
                />
              </div>
            </div>
            <div
              className="flex flex-col font-lato h-[27px] justify-center leading-0 not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[19px]"
              data-node-id="2133:425"
            >
              <p className="leading-[normal] whitespace-pre-wrap">or</p>
            </div>
            <div
              className="flex-[1_0_0] h-0 min-h-px min-w-px relative shrink-0"
              data-node-id="2133:424"
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine2}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-[rgba(23,23,23,0.5)] border border-[#171717] border-solid content-stretch flex gap-2.5 items-center p-[10px] relative rounded-[100px] shrink-0"
            data-node-id="2133:398"
          >
            <div
              className="content-stretch flex items-center overflow-clip relative shrink-0 size-[40px]"
              data-name="linkedin-svgrepo-com 1"
              data-node-id="2133:399"
            >
              <div
                className="flex-[1_0_0] h-full min-h-px min-w-px relative shrink-0"
                data-node-id="2133:400"
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup2}
                />
              </div>
            </div>
            <div
              className="relative shrink-0 size-[40px]"
              data-name="image 2"
              data-node-id="2133:404"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgImage2}
              />
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[40px]"
              data-name="telegram-svgrepo-com 1"
              data-node-id="2133:405"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgTelegramSvgrepoCom1}
              />
            </div>
            <div
              className="content-stretch flex items-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]"
              data-name="gmail-svgrepo-com 1"
              data-node-id="2133:411"
            >
              <div
                className="flex-[1_0_0] h-full min-h-px min-w-px relative shrink-0"
                data-node-id="2133:412"
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup3}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[743px] left-[92px] top-[152px] w-[1220px]"
          data-name="Contact-fon"
          data-node-id="2133:450"
        >
          <div className="absolute inset-[-30.57%_-18.61%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgContactFon}
            />
          </div>
        </div>
      </Section>
    </Wrapper>
  );
}
