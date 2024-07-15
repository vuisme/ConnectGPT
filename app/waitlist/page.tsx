import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Waitlist"
        description="Liên hệ với chúng tôi."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
