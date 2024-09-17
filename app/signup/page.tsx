import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle
} from '@/components/ui/card';
import { signIn } from '@/lib/auth/auth';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Fill the form to create an account or sign in with your GitHub.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="" method="post">
                  
            </form>
        </CardContent>
        <CardFooter>
          <form
            action={async () => {
              'use server';
              await signIn('github', {
                redirectTo: '/dashboard'
              });
            }}
            className="w-full"
          >
            <Button className="w-full">Sign Up with GitHub</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

