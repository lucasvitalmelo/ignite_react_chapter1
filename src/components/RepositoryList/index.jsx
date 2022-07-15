import { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";

import "./styles.scss";

// const repository = {
//   name: "unform",
//   description: "Forms in React",
//   link: "https://github.com/unform/unform",
// };
export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/lucasvitalmelo/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}

export default RepositoryList;
