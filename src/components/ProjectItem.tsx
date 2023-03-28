import Image from 'next/image'

export default function WorkItem() {
  return (
    <article className="flex-col items-center border-b-2 py-6">
      <Image src='/placeholder.jpg' alt="placeholder" width={500}
      height={500} />
      <div>
        <h3 className="text-gray-600 mb-4 block">Post Title</h3>
        <span className="text-gray-600 mb-4 block">
          Project
        </span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
     </div>
    </article>
  );
}