import { HiMiniArrowLongRight } from "react-icons/hi2";

type getInTouchType = {
  placeholder?: string;
};
const GetInTouch = ({
  placeholder = "I am interested to collaborate",
}: getInTouchType) => {
  return (
    <section className="flex flex-col gap-6 text-white">
      <h1 className="text-xl md:text-2xl">Something on mind let's make it</h1>
      <form className="grid md:grid-cols-2  gap-6 md:w-1/2">
        <input
          id="message"
          type="text"
          placeholder="First Name"
          className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56  outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />

        <label htmlFor="message" className="-mb-4 px-4">
          Message(optional)
        </label>
        <textarea
          className="lg:col-span-2 px-4 py-2 bg-transparent border border-yellow-500 md:max-w-96 outline-none md:text-lg rounded"
          name="message"
          id="message"
          rows={4}
          placeholder={placeholder}
        ></textarea>
        <button
          type="submit"
          className="flex space-x-2 items-center bg-yellow-300 hover:bg-yellow-400 w-36 py-1 px-2 justify-center rounded-md text-black"
        >
          <span>Send Message</span>
          <span>
            <HiMiniArrowLongRight />
          </span>
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
