import SectionHeader from "./SectionHeader";
import WorkItem from "./ProjectItem";

export default function Projects() {
  return (
      <section className="bg-blue-100 px-6">
        <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title='Projects' href='#'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
        </div>
      </section>
    
  );
}