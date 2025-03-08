import DownloadButtonGroup from "./DownloadButtonGroup";
import { HomeIconButtonGroup } from "./HomeIconButtonGroup";

const HomePage = () => {
  return (
    <div
      className="container min-h-fit max-h-[100vh] overflow-hidden w-full"
      id={"home"}
    >
      <div className="min-h-[15vh] min-w-[25vw] max-w-[30vw] md:min-w-[20vw] md:max-w-[20vw] md:min-h-[40vh] ml-[90vw] static md:ml-[95vw] md:mb-[-20vh] right-0 top-10 z-[-20] polygon" />
      <div className="h-[40vh] md:h-[40vh]  flex justify-center items-center flex-col">
        <h2 className="text-5xl poppins text-center md:text-7xl ">
          Hi I<span className="font-serif">’</span>m Harshan,
        </h2>
        <p className="poppins-normal font-normal text-center md:text-2xl">
          I<span className="font-serif">’</span>m a Full Stack Developer. I
          <span className="font-serif">’</span>m passionate
          <br />
          about creating reusable digital
          <br />
          products.
        </p>
        <DownloadButtonGroup />
        <HomeIconButtonGroup />
      </div>
      <div className="min-h-[15vh] min-w-[20vw] max-w-[30vw] md:min-w-[20vw] md:max-w-[20vw] md:min-h-[40vh] ml-[-20vw] md:ml-[-15vw] left-0 bottom-10 polygon rotate-180" />
    </div>
  );
};

export default HomePage;
