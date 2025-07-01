import React, { useEffect, useState } from "react";
import { auth, provider, onAuthStateChanged, signInWithPopup, signOut } from "../firebase";

export default function Auth({ setUser }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, [setUser]);

  const handleSignIn = () => signInWithPopup(auth, provider);
  const handleSignOut = () => signOut(auth);

  if (loading) return <div>Loading...</div>;

  return auth.currentUser ? (
    <div>
      <span>Welcome, {auth.currentUser.displayName}</span>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  ) : (
    <button onClick={handleSignIn}>Sign in with Google</button>
  );
}