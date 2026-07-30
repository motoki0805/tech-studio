import dynamic from "next/dynamic";
import { SectionContainer } from "@/components/atoms/SectionContainer";

const ContactForm = dynamic(
  () => import("@/components/molecules/ContactForm").then((m) => m.ContactForm),
  { ssr: false }
);

export const ContactSection = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <p className="text-[#5c534a] mb-10 text-center md:text-left">
        お仕事のご依頼・ご質問などお気軽にお問い合わせください。
      </p>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <ContactForm />
      </div>
    </SectionContainer>
  );
};
