import Image from "next/image";
import AppLayout from "components/AppLayout.jsx";
import ButtonLink from "components/ButtonLink";

const Home = () => {
  return (
    <>
      <AppLayout>
        <section className="grid place-items-center place-content-center h-full w-full   ">
          <div className="flex flex-col items-center bg-white shadow-2xl p-20  rounded">
            <Image
              width={120}
              height={120}
              src="/logo-devter.png"
              alt="devter"
            />
            <h1 className="text-blue-800 text-xl font-extrabold mb-0 mt-2">
              Devter
            </h1>
            <h2 className="text-blue-400 text-lg">App de notas con NextJs</h2>
            <div className="mt-2">
              <ButtonLink path="/notes">Entrar</ButtonLink>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default Home;
