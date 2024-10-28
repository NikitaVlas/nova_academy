import Header from "@/components/modules/Header/Header";

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
      <div className="" />
    </>
  );
};

export default Layout;
