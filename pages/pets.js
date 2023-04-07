import Image from "next/image";
import img from "../public/1.jpg";
const Pets = () => {
  return (
    <div>
      <Image src={img} placeholder='blur' alt="pet" width="280" height="420" />
      {[1, 2, 3, 4, 5].map((image) => {
        return (
          <div key={image}>
            <Image src={`/${image}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
};

export default Pets;
