import axios from "axios";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";

const Home = ({ data }) => {
  return (
    <>
      <AppLayout>
        <section className="grid place-items-center place-content-center h-[50%] w-[50%] shadow-2xl ">
          <img src="/logo-devter.png" alt="devter" className="w-[120px]" />
          <h1 className="text-blue-800 text-xl font-extrabold mb-0">Devter</h1>
          <h2 className="text-blue-400 text-lg">
            App TEST con NextJs y Express
          </h2>
          <div className="mt-2">
            <Link href="/test">
              <a>
                <Button>Entrar</Button>
              </a>
            </Link>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api");

  return { data };
};

export default Home;
