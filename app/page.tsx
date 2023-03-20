import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="w-full bg-yellow-300">
                <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-[90vh]">
                    {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"> */}
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80"
                        width={1200}
                        height={900}
                        alt="asd"
                        className="absolute w-full h-full bg-center bg-cover object-cover"
                    />
                    {/* https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80 */}
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                    {/* </div> */}
                    <div className="container relative mx-auto">
                        <div className="items-center justify-center flex flex-col flex-wrap">
                            <h1 className="text-white font-semibold text-[2rem] md:text-[8rem]">
                                QuickCommerce
                            </h1>
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="">
                                    <h2 className="text-white font-semibold text-5xl">
                                        Your story starts with us.
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-200">
                                        This is a simple example of a Landing
                                        Page you can build using Notus JS. It
                                        features multiple CSS components based
                                        on the Tailwind CSS design system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px z-0">
                        {/* style="transform: translateZ(0px)"> */}
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            {/* <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon> */}
                        </svg>
                    </div>
                </div>
                <section className="pb-48 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Awarded Agency
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Divide details about your product or
                                            agency work into parts. A paragraph
                                            describing a feature will be enough.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Free Revisions
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Keep you user engaged by providing
                                            meaningful information. Remember
                                            that by this time, the user is
                                            curious.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Verified Company
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Write a few lines about each one. A
                                            paragraph describing a feature will
                                            be enough. Keep you user engaged!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
