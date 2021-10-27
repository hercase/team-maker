import Image from "next/image";

const Feedback = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white p-1">¿Querés contactarnos?</p>
      <div className="p-1">
        <a href="https://twitter.com/teammakerapp">
          <Image alt="Twitter logo" src="/img/twitter.svg" height={20} width={20} />
        </a>
      </div>
      <div className="p-1">
        <a href="mailto:teammeakerapp@gmail.com?Subject=Feedback">
          <Image alt="Mail icon" src="/img/mail.svg" height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default Feedback;
