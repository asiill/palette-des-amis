import { signup } from "../actions/auth/actions";

export default async function Signup() {
  return (
    <main className=" flex items-center justify-center px-4 ">
      {/* Conteneur principal avec deux colonnes */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full max-w-4xl bg-[rgb(255 255 255 / 0%)] p-8 rounded-lg shadow-2xl mb-[70px]">
        
        {/* Image à droite (masquée sur mobile) */}
        <div className="hidden md:block w-1/2">
          <img src="/images/minimalistic_black-and-white_sketch-style_removebg.png" className="w-full h-auto mt-[70px]" alt="Illustration" />
        </div>

        {/* Formulaire à gauche */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wider">
            Sign Up
          </h3>

          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" name="email" id="email" required className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input type="password" name="password" id="password" required className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500" />
            </div>

            {/*<div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
              <input type="password" name="confirmPassword" id="confirmPassword" required className="w-full h-10 px-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500" />
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" required className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                I accept the <span className="text-teal-500">Terms of Use</span> & <span className="text-teal-500">Privacy Policy</span>.
              </label>
            </div>*/}

            <button formAction={signup} className="w-full h-10 bg-teal-500 text-white text-sm font-semibold uppercase rounded-full hover:bg-teal-600 transition duration-300 ease-in-out">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
