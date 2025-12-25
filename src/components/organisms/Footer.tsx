export const Footer = () => {
  return (
    <footer className="bg-[#f5efeb] border-t border-[#e5ded8] py-8">
      <div className="mx-auto max-w-7xl px-4 flex justify-center items-center">
        <p className="text-[10px] sm:text-xs text-[#8c8279] uppercase tracking-widest text-center font-medium">
          &copy; {new Date().getFullYear()} Nanashima Tech Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
