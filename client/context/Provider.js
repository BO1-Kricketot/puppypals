import { useRouter, useSegments } from 'expo-router';
import React from 'react';

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the landing page.
      router.replace('/');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, segments]);
}

const dummyDog = {
  _id: '6408d66fec97eb3b6680290f',
  name: 'Kiwi',
  breed: 'Golden Retriever',
  mainImageUrl: 'https://i.ibb.co/gSq3C1N/kiwi2.jpg',
  imageUrls: [
    'https://i.ibb.co/9cf7Fwc/kiwi.jpg',
    'https://i.ibb.co/fdrv6wX/kiwi3.jpg',
    'https://i.ibb.co/FxzLxGH/kiwi4.jpg',
    'https://i.ibb.co/276W0vr/kiwi5.jpg',
    'https://i.ibb.co/TgbLpDx/kiwi6.jpg',
  ],
  energy: 'high',
  size: 'large',
  isDogFriendly: true,
  isHumanFriendly: true,
  bio: "I'm a dog with a nose for trouble and a tongue for tasty treats. I'm not always a good girl, but when I am, it's because I'm plotting my next mischievous move. If you need me, you can find me napping in a sunbeam or sniffing butts at the dog park.",
  location: {
    address1: '2121 Cedar Dr',
    address2: '',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94109',
    coordinates: {
      lat: 37.7917,
      lng: -122.4186,
    },
  },
  owner: {
    name: 'Heyme',
    imageUrl: 'https://i.ibb.co/QcRqhYs/4f2f570afa15.jpg',
  },
};

export function Provider(props) {
  // const [user, setUser] = React.useState(null);
  const [user, setUser] = React.useState(dummyDog);

  // useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (dog) => setUser(dog),
        signOut: () => setUser(null),
        setUser,
        user,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
