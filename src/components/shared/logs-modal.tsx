"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const LogsModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const hasDialogOpen = sessionStorage.getItem("log-dialog");
    if (!hasDialogOpen) {
      setIsDialogOpen(true);
      sessionStorage.setItem("log-dialog", "true");
    }
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
      <DialogTrigger className="hidden"></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="text-[clamp(1.3rem,6vw,1.6rem)] font-logo">
              Welcome to moobie ❤️!
            </span>
          </DialogTitle>
          <DialogDescription>What&apos;s new in moobie v1.</DialogDescription>
        </DialogHeader>

        <div className="">
          <h2 className="text-lg font-logo">1. Currently Underconstruction.</h2>
          <ul className="pl-7">
            <li className="list-disc">
              <p className="text-sm">
                Authentication.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Menu button functionality for mobiles.
              </p>
            </li>
          </ul>


          {/* V1.0.0 */}
          {/* <h2 className="text-lg font-logo">1. New Features.</h2>
          <ul className="pl-7">
            <li className="list-disc">
              <p className="text-sm">
                Implemented search functionality through the navbar.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Toggle theme options - dark, light and system.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Added moobie player to watch drama with different functionality.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Added Logs for show all changes and fixes.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Tooltip for the buttons and links (hover any button).
              </p>
            </li>
          </ul> */}

<h2 className="text-lg font-logo mt-2">2. Fixes bugs.</h2>
          <ul className="pl-7">
            <li className="list-disc">
              <p className="text-sm">Fixed SEO Metadata.</p>
            </li>
            <li className="list-disc">
              <p className="text-sm">Fixed loading carousel rounded for homepage (changed to 0px).</p>
            </li>
          </ul>

          {/* <h2 className="text-lg font-logo mt-2">2. Fixes bugs.</h2>
          <ul className="pl-7">
            <li className="list-disc">
              <p className="text-sm">Fixed SEO for all the pages.</p>
            </li>
            <li className="list-disc">
              <p className="text-sm">Fixed search button error.</p>
            </li>
            <li className="list-disc">
              <p className="text-sm">
                Fixed format of date from recents and details page.
              </p>
            </li>
          </ul> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default LogsModal;
