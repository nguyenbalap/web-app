import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Content>
          {children}
      </Content>
      <Footer />
    </div>
  );
}

export default BaseLayout;
