import SectionHeader from "./SectionHeader";
import WorkItem from "./ProjectItem";
import LazyShow from "./LazyShow";

export default function Projects() {
  return (
      <section className="bg-blue-100 px-6 font-poppins text-black" id="projects">
        <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title='Projects' href='#'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <LazyShow>
            <WorkItem />
          </LazyShow>
          <LazyShow>
            <WorkItem />
          </LazyShow>
          <LazyShow>
            <WorkItem />
          </LazyShow>
          <LazyShow>
            <WorkItem />
          </LazyShow>
        </div>
        </div>
      </section>
    
  );
}