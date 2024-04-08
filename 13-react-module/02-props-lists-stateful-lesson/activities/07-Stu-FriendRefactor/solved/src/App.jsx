import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendData from './friends.json';

function App() {
  // Setting initial state to the friendData json array
  const [friends, setFriends] = useState(friendData);

  const removeFriend = (id) => {
    // Filter friends for friend objects with an id not equal to the id being removed
    const newFriends = friends.filter((friend) => friend.id !== id);
    // Set friends equal to the new friends array
    setFriends(newFriends);
  };

  // Map over friends and render a FriendCard component for each friend object
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map((friend) => (
        <FriendCard
          removeFriend={removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </Wrapper>
  );
}

export default App;
