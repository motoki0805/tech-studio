import Image from "next/image";
import { SectionContainer } from "../../atoms/SectionContainer";
import { InfoCard } from "../../molecules/InfoCard";
import { profile } from "@/data/profile";

export const AboutSection = () => {
  const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(profile.birthDate);

  return (
    <SectionContainer id="about" title="About" maxWidth="7xl">
      {/* プロフィールメインエリア */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-8">
        {/* アイコン */}
        <div className="shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/icon.jpg"
              alt="プロフィールアイコン"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* プロフィールテキスト */}
        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4a3f35] mb-2">
              {profile.name}
            </h3>
            <p className="inline-block px-4 py-1 bg-[#b17a5c] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm mb-4">
              {profile.title}
            </p>

            <ul className="text-sm text-[#5c534a] space-y-1 list-none p-0 text-left">
              <li>
                <span className="font-semibold">年齢:</span>
                {age}歳
              </li>
              <li>
                <span className="font-semibold">出身地:</span>
                {profile.birthPlace}
              </li>
              <li>
                <span className="font-semibold">居住地:</span>
                {profile.residence}
              </li>
              <li>
                <span className="font-semibold">活動エリア:</span>
                {profile.activityArea}
              </li>
            </ul>
          </div>

          <div className="text-[#5c534a] space-y-4 leading-relaxed text-left">
            {profile.introduction.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard title="">
          <div className="space-y-4 text-[#5c534a]">
            <p className="font-bold text-[#4a3f35] text-lg">
              {profile.hobby.title}
            </p>
            {profile.hobby.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="">
          <div className="space-y-4 text-[#5c534a]">
            <p className="font-bold text-[#4a3f35] text-lg">
              {profile.qualityPolicy.title}
            </p>
            {profile.qualityPolicy.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </InfoCard>
      </div>
    </SectionContainer>
  );
};
