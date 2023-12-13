import {
  Header,
  Home,
  AboutUs,
  Experience,
  Project,
  Download,
  Contact,
} from "@templates-components/index";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* Hello world!! This is run in localhost:3000. */}
      <Header />
      <Home />
      <AboutUs />
      <Experience />
      <Project />
      <Download />
      <Contact />
    </main>
  );
}
