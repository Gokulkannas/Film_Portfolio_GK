
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credits = [
  {
    image: "/images/credits/crime-patrol-credit-1.jpg",
    title: "Assistant Director Credit",
    description: "On-screen professional credit from Crime Patrol.",
  },
  {
    image: "/images/credits/crime-patrol-credit-2.jpg",
    title: "Production Credits",
    description: "Screenshot from the series credits.",
  },
  {
    image: "/images/credits/crime-patrol-credit-3.jpg",
    title: "Crime Patrol",
    description: "Additional professional credit.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white font-light overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <Image
          src="/images/film1.jpg"
          alt="Cinematic Background"
          fill
          priority
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/grain.png')]"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 px-6 md:px-10 py-20">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white shadow-2xl"
          >
            <Image
              src="/images/profile.webp"
              alt="Gokul Kanna"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-widest bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              GOKUL KANNA
            </h1>

            <p className="mt-6 text-xl text-gray-300">
              Assistant Director | Writer | Filmmaker
            </p>

            <p className="mt-3 text-sm tracking-widest text-gray-400">
              CINEMA • STORYTELLING • DIRECTION
            </p>

            <a
              href="/GokulKanna_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-500 transform hover:scale-105"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-10 text-center bg-zinc-950"
      >
        <h2 className="text-4xl font-semibold mb-8 tracking-wide">
          About Me
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
          I am an Assistant Director, Writer and aspiring Filmmaker
          passionate about bringing stories to life through cinema.
          I have worked as an Assistant Director on the Crime Patrol
          web series and have independently written, directed and
          produced three short films.

          My creative strengths include screenplay development,
          script breakdowns, shot division, scene planning and
          on-set coordination. I combine creative thinking with
          organizational skills to contribute effectively to
          filmmaking and production teams.
        </p>
      </motion.section>


      {/* SEEKING OPPORTUNITIES */}
      <section className="py-20 px-6 md:px-10 text-center bg-black border-t border-zinc-800">

        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Seeking Film Opportunities
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
          I am interested in working with passionate directors
          and production houses on feature films, web series and
          digital projects. I am enthusiastic about storytelling,
          pre-production planning, shot breakdowns, scheduling
          and on-set execution.
        </p>

        <div className="mt-8 text-gray-300 space-y-3">
          <p>✔ Assistant Direction & On-Set Coordination</p>
          <p>✔ Script Breakdown & Scene Planning</p>
          <p>✔ Shot Division & Storyboarding</p>
          <p>✔ Screenplay & Dialogue Writing</p>
          <p>✔ Production Scheduling</p>
        </div>
      </section>


      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-10 bg-black text-center"
      >

        <h2 className="text-3xl font-semibold mb-12">
          Skills & Strengths
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            {
              title: "Pre-Production",
              desc: "Script breakdown, location planning, casting coordination and scheduling.",
            },
            {
              title: "On-Set Execution",
              desc: "Assistant direction, coordinating departments, maintaining schedules and continuity.",
            },
            {
              title: "Creative Development",
              desc: "Shot division, visual storytelling, screenplay and dialogue development.",
            },
          ].map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-zinc-700 rounded-xl hover:bg-zinc-900 transition duration-500 hover:scale-105"
            >
              <h3 className="text-white text-lg font-semibold mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-400">
                {skill.desc}
              </p>
            </motion.div>

          ))}
        </div>
      </motion.section>


      {/* FEATURED FILMS */}
      <section className="py-24 px-6 md:px-10 bg-zinc-950">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Film Posters
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "HOUSE HUSBAND",
              year: "2026",
              img: "House_Husband1.jpg",
            },
            {
              title: "POLAMPAL",
              year: "2024",
              img: "polampal_title.png",
            },
          ].map((film, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative w-full aspect-video max-h-[350px] overflow-hidden rounded-xl cursor-pointer shadow-lg"
            >
              <Image
                src={`/images/${film.img}`}
                alt={film.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-semibold">
                  {film.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {film.year}
                </p>
              </div>
            </motion.div>

          ))}
        </div>
      </section>


      {/* SHORT FILMS */}
      <section className="py-24 px-6 md:px-10 bg-black">

        <h2 className="text-4xl text-center mb-16">
          Short Films
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* HOUSE HUSBAND */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl bg-black"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/efehaY81rZM"
              title="House Husband Short Film"
              allowFullScreen
            />
          </motion.div>


          {/* POLAMPAL */}
          <motion.a
            href="https://drive.google.com/file/d/1uEjNdlq_atAnB4ZfNWhJC-ttH4NYr883/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl group"
          >
            <Image
              src="/images/polampal_title.png"
              alt="Polampal"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold">
                POLAMPAL
              </h3>

              <p className="mt-2 text-gray-300">
                Click to Watch
              </p>
            </div>
          </motion.a>

        </div>
      </section>



{/* PROFESSIONAL EXPERIENCE – CRIME PATROL */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="py-24 px-6 md:px-10 bg-zinc-950 border-y border-zinc-800"
>
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
      Professional Experience
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      On-Screen Credits
    </h2>

    <h3 className="text-2xl font-semibold text-white">
      Crime Patrol in SonyLiv
    </h3>

    <p className="text-gray-400 mt-3 mb-10">
      Assistant Director
    </p>

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative max-w-3xl mx-auto rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-black"
    >
      <Image
        src="/images/crime-patrol-credit.png"
        alt="Gokul Kanna - Crime Patrol Assistant Director end credits"
        width={1200}
        height={675}
        className="w-full h-auto object-contain"
      />
    </motion.div>

    <p className="mt-8 text-gray-400 leading-8 max-w-2xl mx-auto">
      Proud to have worked as an Assistant Director
      on the Crime Patrol web series. This on-screen
      credit represents my professional contribution
      to the project.
    </p>

  </div>
</motion.section>


      {/* SCREENPLAYS */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-10 text-center bg-black"
      >

        <h2 className="text-4xl mb-12 tracking-wide">
          Screenplays & Scripts
        </h2>

        <div className="space-y-8 max-w-2xl mx-auto">

          {[
            {
              title: "House Husband",
              file: "/House-Husband.pdf",
            },
            {
              title: "Polampal",
              file: "/polampal-2.pdf",
            },
            {
              title: "Treasunt",
              file: "/Treasunt-5.pdf",
            },
            {
              title: "Drama Script",
              file: "/girlss-drama.pdf",
            },
          ].map((script, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="border border-zinc-700 p-6 rounded-xl bg-zinc-900/40 backdrop-blur-lg hover:bg-zinc-800 transition duration-500 shadow-xl"
            >

              <h3 className="text-xl font-semibold text-white">
                {script.title}
              </h3>

              <p className="text-gray-400">
                Short Film Script
              </p>

              <a
                href={script.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm underline text-gray-300 hover:text-white"
              >
                View Script (PDF)
              </a>

            </motion.div>

          ))}

        </div>
      </motion.section>


      {/* CONTACT */}
      <section className="py-24 px-6 text-center bg-zinc-950 border-t border-zinc-800">

        <h2 className="text-4xl mb-6">
          Let’s Collaborate
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          I am open to working as an Assistant Director, Writer
          and Creative Team Member in feature films, web series
          and digital projects.
        </p>

        <div className="mt-8 text-gray-300">

          <p>
            <a
              href="mailto:gkdirector14@gmail.com"
              className="hover:text-white transition"
            >
              gkdirector14@gmail.com
            </a>
          </p>

          <p className="mt-2">
            <a
              href="tel:+919626117994"
              className="hover:text-white transition"
            >
              +91 9626117994
            </a>
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-600 text-sm bg-black">
        © 2026 Gokul Kanna | Assistant Director | Writer | Filmmaker
      </footer>

    </main>
  );
}
