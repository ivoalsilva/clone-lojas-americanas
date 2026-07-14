import Vitrine from "@/components/Vitrine"
import Banner from "@/components/Banner.js"

export default function Home () {
  return(
    <main className="flex-1">
      <Banner/>
      <Vitrine />
    </main>
  );
}