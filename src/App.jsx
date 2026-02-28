import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiJavascript, SiMysql, SiGithub } from "react-icons/si";
function App() {
  return (
    <div className="font-sans bg-white text-black">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 fixed w-full bg-white border-b border-gray-200 z-50">
        <h1 className="text-2xl font-bold tracking-wide">LS</h1>

        <div className="space-x-8 font-medium hidden md:block">
          <a href="#home" className="border-b-2 border-black pb-1">
            Home
          </a>
          <a href="#about" className="hover:opacity-60">
            About
          </a>
          <a href="#skills" className="hover:opacity-60">
            Skills
          </a>
          <a href="#internships" className="hover:opacity-60">
            Internships
          </a>
          <a href="#projects" className="hover:opacity-60">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 pt-32 gap-16"
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[350px] h-[420px] overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Leelavathy S
          </h1>

          <h2 className="text-2xl mt-4 text-gray-600 font-semibold">
            Software Developer
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-xl">
            Computer Science Engineering student skilled in Java, Python, React,
            and Node.js. Eager to learn new technologies, work collaboratively
            in a team,and contribute effectively to organizational growth.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/leelaresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-28 px-10 bg-gray-50">
        <div className="text-center max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Exploring technology through design and development.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Tech</h3>
            <p className="text-gray-600">
              As a tech enthusiast and aspiring developer, I aim to create
              smart, scalable, and user-centered solutions that solve real-world
              problems.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <p className="text-gray-600">
              Undergraduate student in Computer Science and Engineering with a
              focus on developing technical and problem-solving skills.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4">Objective</h3>
            <p className="text-gray-600">
              To develop impactful digital solutions and grow as a technology
              professional, where I can apply my technical skills and continue
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-28 px-10 bg-gray-50">
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Tools & Technologies I Work With
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mt-20 space-y-20">
          {/* LANGUAGES */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-10">Languages</h3>

            <div className="flex flex-wrap justify-center gap-10">
              <SkillCard
                icon={<FaJava className="text-[#f89820]" />}
                name="Java"
              />
              <SkillCard
                icon={<FaPython className="text-[#3776AB]" />}
                name="Python"
              />

              <SkillCard
                icon={
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJDRFXx_O2J30i9naEasnBld3qBhjP1nAV2nktslPmQ&s"
                    alt="C Language"
                    className="w-10 h-10 object-contain"
                  />
                }
                name="C"
              />
              <SkillCard
                icon={<SiMysql className="text-[#00758F]" />}
                name="SQL"
              />
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          {/* WEB TECHNOLOGIES */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-10">Web Technologies</h3>

            <div className="flex flex-wrap justify-center gap-10">
              <SkillCard
                icon={<FaHtml5 className="text-[#E34F26]" />}
                name="HTML5"
              />
              <SkillCard
                icon={<FaCss3Alt className="text-[#1572B6]" />}
                name="CSS3"
              />

              <SkillCard
                icon={
                  <img
                    src="	https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="w-10 h-10 object-contain"
                  />
                }
                name="JavaScript"
              />
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          {/* FRAMEWORKS */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-10">Frameworks</h3>

            <div className="flex flex-wrap justify-center gap-10">
              <SkillCard
                icon={<FaReact className="text-[#61DBFB]" />}
                name="React"
              />
              <SkillCard
                icon={<FaNodeJs className="text-[#3C873A]" />}
                name="Node.js"
              />

              <SkillCard
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
                    alt="REST API"
                    className="w-10 h-10 object-contain"
                  />
                }
                name="REST APIs"
              />
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          {/* TOOLS */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-10">Tools</h3>

            <div className="flex flex-wrap justify-center gap-10">
              <SkillCard
                icon={<FaGitAlt className="text-[#F05032]" />}
                name="Git"
              />
              <SkillCard
                icon={<SiGithub className="text-black" />}
                name="GitHub"
              />

              <SkillCard
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    className="w-10 h-10 object-contain"
                  />
                }
                name="VS Code"
              />

              <SkillCard
                icon={
                  <img
                    src="	https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg"
                    alt="Eclipse"
                    className="w-10 h-10 object-contain"
                  />
                }
                name="Eclipse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIPS SECTION */}
      <section id="internships" className="py-28 px-10 bg-gray-50">
        {/* SECTION HEADING */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Internships
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Practical Exposure & Experience
          </h2>
        </div>

        {/* INTERNSHIP CARDS */}
        <div className="mt-20 max-w-5xl mx-auto space-y-12">
          {/* INTERNSHIP 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  Artificial Intelligence and Machine Learning Intern
                </h3>
                <p className="text-gray-600 mt-1">Edunet Foundation (AICTE)</p>
              </div>

              <span className="text-gray-500 font-medium">
                June 2025 - July 2025
              </span>
            </div>

            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>
                Worked on ML fundamentals,data preprocessing,and basic model
                building in a virtual internship program.
              </li>
              <li>
                {" "}
                Performed data cleaning, preprocessing, and exploratory data
                analysis (EDA) to identify key factors influencing salary
                trends.
              </li>
              <li>
                {" "}
                Presented insights and model results through a structured
                PowerPoint presentation with visualizations and performance
                metrics.
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/Edunett.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* INTERNSHIP 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  Web Application and Development Intern
                </h3>
                <p className="text-gray-600 mt-1">
                  TEK PYRAMID (Test Yantra Software Solutions)
                </p>
              </div>

              <span className="text-gray-500 font-medium">
                March 2025 - April 2025
              </span>
            </div>

            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>
                Developed responsive web applications using HTML, CSS,
                JavaScript, and ReactJS. Built reusable React components to
                enhance UI/UX
              </li>
              <li>
                {" "}
                Integrated APIs and optimized application performance through
                testing, debugging, and deployment support.
              </li>
              <li>
                Designed and developed a responsive music web application with
                features like playlist creation, audio streaming, and user
                authentication.
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/tek.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
              >
                View Certificate
              </a>
            </div>
          </div>
          {/* INTERNSHIP 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">Web Development Intern</h3>
                <p className="text-gray-600 mt-1">Prodigy InfoTech</p>
              </div>

              <span className="text-gray-500 font-medium">
                June 2025 - July 2025
              </span>
            </div>

            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>
                Worked as a Web Development Intern at Prodigy InfoTech,
                completing assigned development tasks
              </li>
              <li>
                Gained hands-on experience in coding, testing, and fixing errors
                while working on real projects.
              </li>
              <li>
                Improved website design and added useful features to make them
                more user-friendly
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="/prodigy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-28 px-10 bg-white">
        {/* SECTION HEADING */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Projects I've Built
          </h2>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-6xl mx-auto">
          {/* PROJECT 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Smart IoT Bin</h3>
            <h4 className="text-1xl font-semibold mb-4">
              Smart Waste Monitoring System Using IoT
            </h4>
            <p className="text-gray-600">
              Designed and implemented an IoT-based waste monitoring system
              using Arduino/NodeMCU and Ultrasonic sensors to measure garbage
              levels in bins. IoT-based system designed to monitor and manage
              plastic waste efficiently, aligned with sustainable development
              goals.
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Innovators Hub Music</h3>
            <h4 className="text-1xl font-semibold mb-4">
              A Music Application built with React{" "}
            </h4>

            <p className="text-gray-600">
              Developed a full-stack music streaming web application using HTML,
              CSS, and JavaScript, React.js for the frontend and Node.js for
              backend services.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://innovators-hub-music-c10c4.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition"
              >
                Live Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ContactSection />
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-sm text-yellow-200 text-center py-6">
        © 2026 Leelavathy S - Engineered with logic and passion.
      </footer>
    </div>
  );
}

function SkillCard({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-3 hover:scale-110 transition duration-300">
      <div className="text-4xl flex items-center justify-center">{icon}</div>
      <p className="font-medium">{name}</p>
    </div>
  );
}

// NEW CONTACT
function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4fxk3r",
        "template_fcszfs8",
        form.current,
        "YgIW-ZNNKkTjKupGV",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="py-28 px-10 bg-gray-50">
      {/* HEADING */}
      <div className="text-center max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-gray-500">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          Let’s Connect & Work Together
        </h2>
      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-16 mt-20 max-w-6xl mx-auto items-start">
        {/* LEFT — MESSAGE FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <div>
            <p className="text-center">Get In Touch With Me</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-black transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-black transition"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="space-y-8">
          <p className="text-gray-600 max-w-md">
            I'm actively looking for software development opportunities. Feel
            free to reach out!
          </p>

          {/* Email */}
          <a
            href="mailto:leelavathy.s284@gmail.com?subject=Portfolio Inquiry&body=Hello,"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-red-300 text-[#EA4335] group-hover:bg-red-50 transition">
              <FiMail size={20} />
            </div>

            <span className="text-gray-800 group-hover:text-[#EA4335] transition">
              leelavathy.s284@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+918610661433"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-green-300 text-[#16A34A] group-hover:bg-green-50 transition">
              <FiPhone size={20} />
            </div>

            <span className="text-gray-800 group-hover:text-[#16A34A] transition">
              +91 8610661433
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-blue-300 text-[#2563EB] group-hover:bg-blue-50 transition">
              <FiMapPin size={20} />
            </div>
            <span className="text-gray-800">Chennai, Tamil Nadu</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/leelavathy-s-931652330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-blue-400 text-[#0A66C2] group-hover:bg-blue-50 transition">
              <FaLinkedinIn size={18} />
            </div>

            <span className="text-gray-800 group-hover:text-[#0A66C2] transition">
              LinkedIn Profile
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Leelavathy-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 text-[#181717] group-hover:bg-gray-300 transition">
              <FaGithub size={18} />
            </div>

            <span className="text-gray-800 group-hover:text-black transition">
              GitHub Profile
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
