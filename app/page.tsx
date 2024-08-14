import { Button } from '@nextui-org/react';

import { auth } from '@/auth';

import { signInAction, signOutAction } from '@/actions/userActions';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={signInAction}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={signOutAction}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
    </div>
  );
}
