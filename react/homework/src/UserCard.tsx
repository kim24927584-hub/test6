type Props = {
  name: string,
  age: number,
  job: string
}
export default function UserCard({ name, age, job } : Props) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{age}세</p>
      <p>{job}</p>
    </div>
  );
}