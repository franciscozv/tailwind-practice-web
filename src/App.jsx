import { useState } from "react"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="min-h-screen dark:bg-black dark:text-white bg-slate">
    <header className={`bg-teal-500 sticky top-0 z-10 ${showMenu && 'hidden'}`}>
          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium"><a href="#hero">🚀 Acme Rockets</a></h1>
            <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer"
             onClick={()=> setShowMenu(!showMenu)}
            >
              &#9776;
            </button>
            <nav className="hidden md:block space-x-8 text-xl" aria-label='main'>
              <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
              <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
              <a href="#contact" className="hover:opacity-90">Contact Us</a>
            </nav>
          </section>
      </header>
      
      <section id="mobile-menu" className={`absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu ${showMenu ? 'flex':'hidden'}`}>

            <button className="text-8xl self-end px-6"
            onClick={() => setShowMenu(!showMenu)}
            >
              &times;
            </button>
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label='mobile'>
              <a href="#hero" className="w-full text-center py-6 hover:opacity-90" onClick={() => setShowMenu(!showMenu)}>Home</a>
              <a href="#rockets" className="w-full text-center py-6 hover:opacity-90" onClick={() => setShowMenu(!showMenu)}>Our Rockets</a>
              <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90"onClick={() => setShowMenu(!showMenu)}>Testimonials</a>
              <a href="#contact" className="w-full text-center py-6 hover:opacity-90" onClick={() => setShowMenu(!showMenu)}>Contact Us</a>
              <a href="#footer" className="w-full text-center py-6 hover:opacity-90" onClick={() => setShowMenu(!showMenu)}>Legal</a>
            </nav>
          </section>
      <main className="max-w-4xl mx-auto">
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <article className="sm:w-1/2" >
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">We Boldy Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before...</h2>
             <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-salte-700
             dark:text-slate-400">
              We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
             </p>
             <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-salte-700
             dark:text-slate-400">
              Think Acme Rockets.
             </p>
          </article>
          <img className="w-1/2" src="../rocketdab.png" alt="rocketdab" />

        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid dark:bg-black border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img className="w-1/2 mb-6" src="../rocketman.png" alt="explorer" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
              <p className=" hidden sm:block text-3xl  text-slate-500 text-center mt-2 dark:text-slate-400">$</p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-900 dark:text-white">Affordable Exploration</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid dark:bg-black border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img className="w-1/2 mb-6" src="../rocketride.png" alt="Adventurer" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
              <p className=" hidden sm:block text-3xl  text-slate-500 text-center mt-2 dark:text-slate-400">$$</p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-900 dark:text-white">Best Selling Rocket!</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid dark:bg-black border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img className="w-1/2 mb-6" src="../rocketlaunch.png" alt="Infinity" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
              <p className=" hidden sm:block text-3xl  text-slate-500 text-center mt-2 dark:text-slate-400">$$$</p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-900 dark:text-white">Luxury Starship</h3>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2   after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212; Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2   after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212; Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2   after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212; Wile E. Coyote, Genius
              </figcaption>
            </figure>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact us
          </h2>
          <form className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
            <label htmlFor="subjet">Subject:</label>
            <input type="text" className="w-full text-black text-2xl sm:text-3xl rounde-xl border boder-solid border-slate-900 p-3 dark:border-none" required minLength='3' maxlenght='60' placeholder="Your Subject" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10"
            placeholder="Your Message" required className='w-full text-black text-2xl sm:text-3xl rounde-xl border boder-solid border-slate-900 p-3 dark:border-none'
            ></textarea>
            <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>Lorem ipsum dolor sit.</h2>
            Email: <a href="#">Javierzambranovaldes@gmail.com</a><br />
            Phone: <a href="tel:+134134">(555) 5555-55555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label='footer'>
            <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
            <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
            <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">Copyright &copy; <span id="year">2023</span></p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
    </>
  )
}

export default App
