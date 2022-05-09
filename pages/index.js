import AppLayout from "../components/AppLayout";
import ButtonLink from "../components/ButtonLink";

const Home = ({ data }) => {
  return (
    <>
      <AppLayout>
        <section className="grid place-items-center place-content-center h-full w-full   ">
          <div className="flex flex-col items-center bg-white shadow-2xl p-10 rounded">
            <img src="/logo-devter.png" alt="devter" className="w-[120px]" />
            <h1 className="text-blue-800 text-xl font-extrabold mb-0">
              Devter
            </h1>
            <h2 className="text-blue-400 text-lg">
              App TEST con NextJs y Express
            </h2>
            <div className="mt-2">
              <ButtonLink path="/users">Entrar</ButtonLink>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default Home;
