import Nav from "./Nav";

export default function Create() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center p-6 sm:flex-row sm:gap-20">
            <div className="flex items-center justify-center gap-2 max-w-[400px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <img className="w-[100%]" src="/images/create/sunflower.jpg" alt="A close-up photograph of a sunflower." />
                    </div>
                    <div className="flex justify-end">
                        <img className="w-[80%]" src="/images/create/pexels-anntarazevich-6358780.jpg" alt="An illustration of a blue eye centered on white paper." />
                    </div>
            
                </div>
                <div className="flex flex-col gap-2">
                    <div><img className="w-[80%]" src="/images/create/pexels-rlldied-11673768.jpg" alt="A painting of three red flowers." /></div>
                    <div><img className="w-[100%]" src="/images/create/pexels-andreea-ch-371539-1204941.jpg" alt="A grayscale photograph of leaves." /></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 max-w-md">
                <h3 className="text-xl sm:text-2xl">Share your creative journey</h3>
                <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-700 sm:text-xl">
                        Create your digital gallery and inspire others with your unique projects, be they finished pieces or works in progress.
                    </p>
                    <div className="flex flex-col gap-2 sm:items-center sm:flex-row">
                        <p className="text-base text-gray-700 sm:text-xl">
                            Start by creating your profile
                        </p>
                        <Nav link="signup" text="here" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
// Photo by Valeria Nikitina: https://www.pexels.com/photo/painting-of-red-flowers-in-close-up-photography-11673768/
// Photo by Anna Tarazevich: https://www.pexels.com/photo/an-illustration-of-a-person-s-eye-6358780/
// Photo by Andreea Ch: https://www.pexels.com/photo/white-black-and-gray-floral-textile-1204941/