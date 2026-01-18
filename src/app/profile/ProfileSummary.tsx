interface ProfileSummaryProps {
  avatarUrl: string;
  info: React.ReactNode;
  socials: React.ReactNode;
}

export default function ProfileSummary({
  avatarUrl,
  info,
  socials,
}: ProfileSummaryProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="order-3 md:order-1 flex-1 w-full md:pl-10 md:py-12">
        {info}
      </div>

      <div className="order-1 md:order-2 shrink-0 flex md:flex-row flex-col items-center md:items-center md:gap-6 gap-4">
        <div className="order-2 md:order-1 flex md:flex-row gap-3 md:gap-4 items-center">
          {socials}
        </div>

        <div className="order-1 md:order-2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-(--cover-border-color)">
          <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}


