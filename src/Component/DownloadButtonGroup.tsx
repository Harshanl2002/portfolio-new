const DownloadButtonGroup: React.FC = () => {
  return (
    <div className="flex justify-between w-[70vw] md:w-[25vw] my-4 md:justify-around md:gap-0">
      <a
        className="btn btn-primary rounded-3xl"
        href="https://drive.google.com/file/d/1W3fbEJVsN7D4lP2xRKKEff2otIBA-yOB/view?usp=sharing"
        target="blank"
      >
        Download CV
      </a>
      <a
        className="btn btn-primary btn-outline rounded-3xl"
        href="mailto:harshan.l@outlook.com"
        target="blank"
      >
        Contact Me
      </a>
    </div>
  );
};

export default DownloadButtonGroup;
