import { data } from "../data";

export function Projects() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="md:grid md:grid-cols-2 gap-10 grid-cols-1">
        {data.map((item) => (
          <div className="mb-5" key={item.id}>
            <img className="min-w-sm" src={item.image} alt={item.title} />
            <div className="mt-5">
              <h1>
                {item.title}{" "}
                <span>
                  <a href={item.link} target="_blank">
                    | GitHub
                  </a>
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
