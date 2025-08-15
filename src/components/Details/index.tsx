import Personal from "@/components/Details/Personal";
import Education from "./Education";
import Family from "./Family";
import Contact from "./Contact";
import Photos from "./Photos";

const Index = () => {
  return (
    <>
      <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 py-4">
        <div className="space-y-6">
          <Personal />
          <Education />
        </div>
        <div className="space-y-6">
          <Family />
        </div>
      </div>
      <Contact />
      <Photos />
    </>
  );
};

export default Index;
