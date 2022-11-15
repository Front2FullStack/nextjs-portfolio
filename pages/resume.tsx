import { motion } from "framer-motion";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { fadeInUp } from "../animations";
const resume = () => {
  return (
    <section className="p-4">
      <div>
        <header>
          <h5 className="my-3 text-2xl font-bold">Experiences</h5>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="my-2">
            <header>
              <h5 className="my-3 text-2xl font-bold">
                Languages & Frameworks
              </h5>
            </header>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </article>
          <article>
            <header>
              <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            </header>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.article
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <article>
              <h5 className="my-2 text-xl font-bold">FullStack Developer</h5>
              <p className="font-semibold">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  href="https://group.jumia.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jumia Group
                </a>
                (2021-now)
              </p>
              <ul className="text-sm font-light">
                <li>
                  ✅ Agility tech roadmap planning and preparation for the
                  product.
                </li>
                <li>
                  ✅ Study/brainstorm the design of modules/microservices.
                </li>
                <li>✅ Helping the backend team to develop web APIs.</li>
                <li>✅ Helping the team with database schema design.</li>
                <li>
                  ✅ Full feature delivery from the front to the backend for the
                  modules.
                </li>
                <li> ✅ Writing technical documentation for each feature.</li>
              </ul>
            </article>
          </motion.article>
          <motion.article
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <article>
              <h5 className="my-2 text-xl font-bold">
                Front-End UI/UX Developer
              </h5>
              <p className="font-semibold">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  href="https://group.jumia.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jumia Group
                </a>
                (2018-2021)
              </p>

              <ul className="text-sm font-light">
                <li>
                  ✅ Developing UI components as per the stylesheet using
                  ReactJS/VueJS.
                </li>
                <li>
                  ✅ Collaborating with UI Designer to develop UI/UX flow for
                  the features.
                </li>
                <li>
                  ✅ TDD development with the React Test library and Jest.
                </li>
                <li>
                  ✅ Working with QA engineers to analyze/perform test cases..
                </li>
                <li>✅ Helped developers to design Rest API’s endpoints.</li>
                <li>
                  ✅ Hackathon to test various technologies e.g. (React Native,
                  Flutter, etc...)
                </li>
                <li>
                  ✅ Multi-project experience with a variety of businesses and
                  technologies.
                </li>
              </ul>
            </article>
          </motion.article>
        </div>
        <div className="grid gap-6 pt-2 md:grid-cols-2">
          <motion.article
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <article>
              <h5 className="my-2 text-xl font-bold">
                FRONT END UI/UX DEVELOPER
              </h5>
              <p className="font-semibold">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  href="https://growbydata.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GrowByData
                </a>
                (2015-2016)
              </p>
              <ul className="text-sm font-light">
                <li>✅ Wireframe/Prototyping the UI/UX flow.</li>
                <li>✅ Experience with agile methodologies.</li>
                <li>
                  ✅ Getting familiar with JS frameworks (AngularJS, ReactJS)
                </li>
                <li>✅ Front-end development with HTML5, CSS3, JQuery</li>
                <li>✅ Getting familiar with PHP/.Net</li>
                <li>✅ Doing research to improve performance and user flow</li>
              </ul>
            </article>
          </motion.article>
          <motion.article
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <article>
              <h5 className="my-2 text-xl font-bold">
                Front-End UI/UX Developer
              </h5>
              <p className="font-semibold">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  href="https://itechnepal.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Itech Nepal
                </a>
                (2018-2021)
              </p>

              <ul className="text-sm font-light">
                <li>
                  ✅ Graphic designing (print, media, banner, logo etc...)
                </li>
                <li>✅ Project planning and research.</li>
                <li>✅ Designing mockups for Web/Mobile App</li>
                <li>✅ Web Development (HTML5, CSS3, JQUERY, PHP)</li>
                <li>✅ Familiar with wordpress custom theme development</li>
                <li>✅ Taking feedback from client to improve webpages.</li>
              </ul>
            </article>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default resume;
