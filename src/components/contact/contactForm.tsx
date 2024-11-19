const ContactForm = () => {
  return (
    <form
      className="rounded-md border border-pink-500 text-brown-800 pt-5 pb-7 px-6 md:w-1/2 w-full"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <p className="md:text-[17px] text-m py-2 w-full font-bold">
        Please fill in all the fields to submit your enquiry
      </p>
      <input type="hidden" name="access_key" value="" />
      <input
        type="hidden"
        name="subject"
        value="New Contact form Submission from General Energy website"
      />
      <input type="hidden" name="from_name" value="GE Contact" />

      <div className="grid gap-4 py-2 pt-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            id="name"
            required
            name="name"
            className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m"
            placeholder="Your name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m"
            placeholder="Your email"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2">
            Phone
          </label>
          <input
            id="phone"
            required
            name="phone"
            className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m"
            placeholder="260 774 323 334"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2e">
            Message
          </label>
          <textarea
            required
            className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m"
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div className="pl-4 py-2 relative">
        <label htmlFor="botcheck" className="py-2 text-blue-700">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden left-0 bottom-[14px]"
          />
        </label>
      </div>
      <button
        className="w-full bg-yellow-400 text-blue-800 px-4 py-2 rounded-md"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
