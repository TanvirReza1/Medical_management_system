import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="
      w-full
      flex
      items-center
      justify-center
      gap-3
      rounded-xl
      border
      border-slate-300
      bg-white
      py-3
      font-medium
      text-slate-700
      hover:bg-slate-50
      hover:text-slate-900
      transition
      "
    >
      <FcGoogle size={24} />
      <span className="text-slate-700 font-medium">Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
