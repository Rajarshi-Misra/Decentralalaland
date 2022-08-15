import Header from "../components/Header";
import Template from "../components/Template";
import Mainbody from "../components/Mainbody";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <Template />
      <Mainbody />
    </div>
  );
}
