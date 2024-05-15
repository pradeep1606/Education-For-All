import Image from "next/image";
import Link from "next/link";

const CourseStep = () => {
    return (
        <div className='py-2 px-4 sm:px-4 md:px-16 lg:px-32 bg-white mt-6'>
            <div className='px-4 py-2 text-2xl font-bold text-[#023047] sans-serif pointer-events-none'>Select Your Step</div>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/ug.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Under Graduate (UG)</div>
                        <span className='text-sm font-normal'>Courses</span>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/pg.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Post Graduate (PG)</div>
                        <span className='text-sm font-normal'>Courses</span>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/intermediate.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Higher Secondary</div>
                        <span className='text-sm font-normal'>Courses</span>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/highschool.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Highschool</div>
                        <span className='text-sm font-normal'>Courses</span>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/middle.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Middle School</div>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/primary.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Primary School</div>
                    </Link>
                </div>
                <div className='flex flex-row md:flex-col p-4 border h-32 md:h-52 border-gray-300 rounded shadow-md bg-[#eefcff]'>
                    <Link href='' className="mr-5 md:mr-0">
                        <Image src='/icon/extra.png' width={80} height={40} alt="" />
                    </Link>
                    <Link href='' className='text-[#262626] font-bold font-serif mt-2 md:mt-5 pr-5'>
                        <div>Extra Curricular</div>
                        <span className='text-sm font-normal'>Courses</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default CourseStep;
