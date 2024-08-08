import { LatLngExpression } from "leaflet";
import Map from "../ui/Map";
import GetInTouch from "../ui/GetInTouch";

const Contact = () => {
  const position: LatLngExpression = [27.429319578059378, 85.02870967192413];
  return (
    <section className="flex flex-col gap-6 px-4 md:px-6 lg:px-10 overflow-x-auto my-4 no-scrollbar">
      <div>
        <GetInTouch />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <h1 className="text-lg md:text-xl text-white">My Location</h1>
        <div className="w-full h-96 bg-violet-500 rounded-md">
          <Map center={position} zoom={15} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
