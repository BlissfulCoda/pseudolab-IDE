import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
      <Image
        src="/PSEUDOLAB_HERO.png"
        alt="PseudoLab - Cambridge Pseudocode IDE"
        width={900}
        height={600}
        className="object-contain max-w-full"
        priority
      />
    </div>
  );
};

export default Home;
