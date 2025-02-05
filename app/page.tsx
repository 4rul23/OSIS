import WelcomePage from "./ui/home/Welcome";
import ListBidang from "./ui/home/ListBidang";
import SambutanKetos from "./ui/home/SambutanKetos";
import JoinUs from "./ui/home/JoinUs";
import VisiMisi from "./ui/home/VisiMisi";
import Events from "./ui/home/Events";
import AboutUS from "./ui/home/About";

export default async function Home() {
  return (
    <div className="pt-20">
      <WelcomePage />

      <VisiMisi />

      <ListBidang />

      <SambutanKetos />

      <AboutUS />

      <Events />

      <JoinUs />
    </div>
  );
}
