import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/icons/google.svg";

const GoogleButton = () => {
    return (
       <Button variant="outline" className="w-full">
        <img src={GoogleIcon} alt="Google" className="w-4 h-4" />
        <span>Continue with Google</span>
       </Button>
    )
}

export default GoogleButton;