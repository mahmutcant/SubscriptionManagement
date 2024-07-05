import { SidebarElement } from "../../contants/SidebarElement";
import Button from "./Button/Button";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    
      <div className="w-96 bg-[#f8f8ff] rounded-l-[30px] h-full">
        <Profile />
        <div className="w-11/12 h-[260px] space-y-80">
          <div>
          {SidebarElement.map((item, index) => (
            <Button to={item.to} icon={item.icon} title={item.title} key={index} />
          ))}
          </div>
        </div>
        <button className="flex w-full justify-start ml-8 text-[13px] text-[#62618f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 800 800"
            >
              <path fill="#62618F" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
            Log out
          </button>
      </div>
  );
};

export default Sidebar;
