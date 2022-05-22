import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <section className="p-4">
      <div>
        <header>
          <h5 className="my-3 text-2xl font-bold">Experiences</h5>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <article>
            <article>
              <h5 className="my-2 text-xl font-bold">Sr Front-End Developer</h5>
              <p className="font-semibold">
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  href="https://group.jumia.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jumia
                </a>
                (2018-now)
              </p>
              <p>
                Wireframing/Prototyping a project based on the
                requirements,Transforming finalized prototype to semantic
                front-end code
              </p>
            </article>
          </article>
          <article>
            <article>
              <h5 className="my-2 text-xl font-bold">
                Front-End UI/UX Developer
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
                (2015-2017)
              </p>

              <p>
                Wireframing/Prototyping a project based on the
                requirements,Transforming finalized prototype to semantic
                front-end code
              </p>
            </article>
          </article>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="my-2">
            <header>
                <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
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
      </div>
    </section>
  );
};

export default resume;
