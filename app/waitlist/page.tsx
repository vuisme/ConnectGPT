import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Còn chờ gì nữa?"
        description="Liên hệ với chúng tôi để được tư vấn và dùng thử miễn phí."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
