const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
            Copyright ©{date.getFullYear()} | All rights reserved by Fardin
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
