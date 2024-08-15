import { Label } from "@/components/ui/label";
import authImage from "../../assets/authImage.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] px-4 flex justify-center items-center bg-accent">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl flex">
        <div className="w-full lg:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Login Now</h3>
          <form className="space-y-6">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full"
              />
            </div>
            <Button className="w-full">Login</Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-primary font-semibold underline"
              >
                SignUp here
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src={authImage}
            alt="Sign Up"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
