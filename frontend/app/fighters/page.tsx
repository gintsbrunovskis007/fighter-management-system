import Link from "next/link";

export default function FighterList() {
  return (
    <>
      <div>
        <h1>Fighter List</h1>
      </div>
      <Link href="/fighters/create">Create Fighter</Link>
      <Link href="/">Home Page</Link>
    </>
  );
}
