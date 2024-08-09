import { ChangeEvent, useState } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";

type getInTouchType = {
  placeholder?: string;
};
const GetInTouch = ({
  placeholder = "I am interested to collaborate",
}: getInTouchType) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log(formData);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <section className="flex flex-col gap-6 text-white">
      <h1 className="text-xl md:text-2xl">Something on mind let's make it</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 md:w-1/2">
          <input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            id="message"
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56  outline-none md:text-lg rounded"
          />
          <input
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="text"
            placeholder="Email Address"
            className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
          />
          <input
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            type="text"
            placeholder="Phone Number"
            className="px-4 py-2 bg-transparent border border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="">
            Message(optional)
          </label>
          <textarea
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            className="lg:col-span-2 px-4 py-2 bg-transparent border border-yellow-500 md:max-w-96 outline-none md:text-lg rounded"
            name="message"
            id="message"
            rows={4}
            placeholder={placeholder}
          ></textarea>
        </div>
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
