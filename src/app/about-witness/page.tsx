import { PageBanner } from "@/src/components/layout/PageBanner";
import SubscribeSection from "@/src/components/sections/SubscribeSection";

export default function AboutWitnessPage() {
  return (
    <div className="w-full">
      <PageBanner
        backgroundImage="/images/bg_banner.png"
        title="About Lex Witness"
        subtitle="Your Witness Please!"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Lex Witness" },
        ]}
      />

      <section className="mt-20 w-full bg-white">
        <div className="mx-auto max-w-[1155px] px-5 pb-16 pt-4">
          <div className="text-center">
            <p className="text-[30px] font-semibold leading-[1.2] text-[#f58220]">
              Your Witness Please
            </p>

            <h2 className="mt-3 font-poppins text-[44px] font-bold leading-[1.15] text-[#48688f]">
              Why Lex Witness?
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-[120px] bg-[#C9060A]" />
          </div>

          <div className="mt-6 font-roboto text-[16px] leading-[1.65] text-[#7A7A7A]">
            <p>
              The Indian legal universe has close to 5 million individuals. This
              represents highest number in the world who, directly or
              indirectly, are a part of it. Lex Witness is a high quality
              monthly magazine with the power of fresh and original content that
              deals exclusively with subjects on legality. Some of India&apos;s
              top-notch practitioners and experts contribute in Lex Witness on
              subjects relevant to all stakeholders in this profession.
            </p>

            <p className="mt-6">
              Lex Witness, ever since its inception in 2009, has become
              India&apos;s most credible platform for the legal luminaries here
              to opine, comment and share their views. With an interesting blend
              of opinion pieces, commentary, reportage, analysis, interviews and
              movements, Lex Witness is for the entire fraternity of In House
              and External Counsel besides key decision makers, luminaries,
              experts, policy makers, bureaucracy and the industry captains in
              India.
            </p>

            <h3 className="mt-5 text-[17px] font-bold text-[#7A7A7A]">
              A Must Read
            </h3>

            <p className="mt-7">
              The readers of Lex Witness are high-profile, influential
              HNI&apos;s. They are the ones who frame the laws and the ones who
              practice it. Lex Witness covers an interesting bandwidth of
              readers right from the core legal community of the country that
              includes the Hon&apos;ble Judges, Lawyers, Bureaucrats, Corporate
              Legal Professionals and other allied professionals. Lex Witness is
              available in all the major metropolitan cities of the country and
              not only India, Lex Witness has a prompt presence in the global
              legal community as well.
            </p>

            <p className="mt-7">
              <strong>
                To know more, get in touch with our brand experts;
              </strong>{" "}
              <br />
              Bhupinder Kaur | +91-9654155065 |{" "}
              <a
                className="text-[#c9060a]"
                href="mailto:bhupinder@witnesslive.in"
              >
                bhupinder@witnesslive.in
              </a>{" "}
              <br />
              Neelima Maheshwari | +91-8800841600 |{" "}
              <a
                className="text-[#c9060a]"
                href="mailto:neelima.maheshwari@witnesslive.in"
              >
                neelima.maheshwari@witnesslive.in
              </a>
            </p>

            <p className="mt-7">
              <strong>
                Lex Witness – India&apos;s 1st Magazine on Legal &amp; Corporate
                Affairs
              </strong>{" "}
              <br />
              Suite 1/6, Lower Ground Floor, Block B, Hauz Khas, New Delhi –
              110016
            </p>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </div>
  );
}
