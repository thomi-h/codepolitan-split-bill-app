import Friend from "./Friend";

export default function Friendlist({ friends, onSelected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelected={onSelected} />
      ))}
    </ul>
  );
}
