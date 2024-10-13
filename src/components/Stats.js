export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked =
    numItems && numPacked ? Math.round((numPacked * 100) / numItems) : 0;
  return (
    <footer className="stats">
      <em>
        {percentPacked !== 100
          ? `👜 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentPacked}%)`
          : `you got everything Ready to go ✈️`}
      </em>
    </footer>
  );
}
