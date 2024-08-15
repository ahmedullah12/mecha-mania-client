import { Label } from "@/components/ui/label";
import authImage from "../../assets/authImage.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ReactNode, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { error }] = useLoginUserMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await login(data);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);
  return (
    <div className="min-h-[calc(100vh-64px)] px-4 flex justify-center items-center bg-accent">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl flex">
        <div className="w-full lg:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Login Now</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("email", { required: "Email is required." })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.email?.message as ReactNode}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="mt-1 w-full pr-10"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.password?.message as ReactNode}
                </p>
              )}
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
