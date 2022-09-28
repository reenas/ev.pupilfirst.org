export default function ListItem({ content }) {
  return (
    <>
      <li>
        <p className="list-with-underscore pb-2 lg:text-xl">{content}</p>
      </li>
    </>
  );
}
