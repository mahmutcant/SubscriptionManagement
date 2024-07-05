import { useAccount } from "../../store/auth/hooks";

const Profile = () => {
  const account = useAccount();  
  return (
    <div className="px-[28px] py-[58px] text-[#000] flex">
        <img
          src="https://pbs.twimg.com/profile_images/1636115230630506496/o6TOR0nf_400x400.jpg"
          className="rounded-xl"
          width={35}
          height={35}
          alt=""
        />
        <div className="ml-[10px] w-full">
          <div className="font-bold text-[#1a194d] text-[14px]">
            {account.fullName}
          </div>
          <div className="text-[#1a194d] text-[12px]">@{account.userName}</div>
        </div>
      </div>
    
  );
};

export default Profile;
