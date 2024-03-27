import Link from "next/link";
import MainWrapper from "./containers/main-wrapper";
import { Icons } from "./icons";

const Footer = () => {
  return (
    <div className="h-max border-t w-full bg-muted">
      <MainWrapper className="h-full py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icons.moobieIcon className="h-7 w-7" />
            <p className="font-logo text-2xl ml-2 mb-1">moobie</p>
          </div>

          <div className="">
            <p className="text-muted-foreground text-xs">Made with ❤️</p>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-muted-foreground text-sm">
            Liked my project? Give it a ⭐.
          </p>
          <Link
            href="https://github.com/Zeddxx/moobie"
            title="Moobie GitHub"
            target="_blank"
            className="text-sm font-logo underline"
          >
            GitHub
          </Link>
        </div>
      </MainWrapper>
    </div>
  );
};
export default Footer;
