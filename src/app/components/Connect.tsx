export default function Connect() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center p-6 sm:flex-row sm:gap-20">
            <div className="flex items-center justify-center gap-2 max-w-[400px] sm:order-last">
                <div className="flex flex-col gap-2">
                    <div><img className="w-[100%]" src="/images/connect/profile.jpg" alt="A screenshot of someone's profile page. The header contains their picture with their name to the right. The body contains a gallery of their artwork." /></div>
                    <div className="flex justify-end"><img className="w-[80%]" src="/images/connect/pexels-cottonbro-7023742.jpg" alt="Hands over a pastel drawing of an orange flower. A box of pastels lies next to it." /></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div><img className="w-[80%]" src="/images/connect/pexels-sai-t-agin-619376496-17359207.jpg" alt="A black and white sketch of a ballerina. Different movements are superimposed on each other." /></div>
                    <div><img className="w-[100%]" src="/images/connect/pexels-anntarazevich-5435073.jpg" alt="Ten brush strokes on white paper of a watercolour palette arranged horizontally across two lines, with five colours on each line. Each colour is labeled above its respective stroke with its name to identify each hue." /></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 max-w-md">
                <h3 className="text-xl sm:text-2xl">Find your community</h3>
                <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-700 sm:text-xl">
                        Meet others who share your passions.
                    </p>
                    <p className="text-base text-gray-700 sm:text-xl">
                        Struggling with figure or portrait drawing? Encourage one another by sharing ideas, resources and feedback.
                    </p>
                </div>
            </div>
        </div>
    );
}

//Photo by cottonbro studio: https://www.pexels.com/photo/photo-of-a-person-s-flower-drawing-7023742/
//Photo by SAİT Ağın: https://www.pexels.com/photo/drawing-of-ballerina-17359207/
//Photo by Anna Tarazevich: https://www.pexels.com/photo/color-palette-on-a-notepad-5435073/