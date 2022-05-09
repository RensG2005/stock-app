import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../../components/ui/Button/Button';
import Title from '../../components/ui/Title';

export default function Signout() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Title type="h1">Are you sure you want to sign out?</Title>
      <div className="flex mt-5">
        <Button variant="transparent" onClick={() => router.back()}>
          Take me back
        </Button>
        <Button variant="primary" onClick={() => signOut({ callbackUrl: '/' })}>
          Signout
        </Button>
      </div>
    </div>
  );
}
