
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or need assistance?
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="bg-maroon/10 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a href="tel:+15551234567" className="text-maroon hover:underline">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="bg-maroon/10 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email</p>
              <a href="mailto:contact@instantcases.com" className="text-maroon hover:underline">
                contact@instantcases.com
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <div className="bg-maroon/10 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our store</p>
              <span className="text-gray-900">
                123 Main Street, New York, NY 10001
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message in detail"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-maroon hover:bg-maroon-light text-white w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Store Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-maroon/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-gray-600">
                      123 Main Street <br />
                      New York, NY 10001 <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-maroon/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Store Hours</h3>
                    <div className="text-gray-600">
                      <p className="flex justify-between w-64">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 8:00 PM</span>
                      </p>
                      <p className="flex justify-between w-64">
                        <span>Saturday:</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex justify-between w-64">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-[3/2] w-full rounded-lg overflow-hidden mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175686981!2d-73.9856644!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc7591914a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Store Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
