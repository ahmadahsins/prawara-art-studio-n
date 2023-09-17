import { useEffect } from "react";
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center mx-0 lg:mx-96">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
