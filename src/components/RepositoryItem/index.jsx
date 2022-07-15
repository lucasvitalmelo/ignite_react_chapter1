export function RepositoryItem(props) {
  console.log(props);
  return (
    <li>
      <strong>{props.repository.name ?? "not name"}</strong>
      <p>{props.repository.description ?? "not description"}</p>
      <a href={props.repository.html_url ?? "not link"}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
