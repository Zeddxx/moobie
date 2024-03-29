"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

const SearchDialog = () => {
  const [query, setQuery] = useState<string>("")

  const handleSearch = () => {
    const constructedURI = query.split(" ").join("-");
    window.location.assign(`/s/${constructedURI}`)
  }
  return (
    <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost">
                <Search />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-logo text-2xl tracking-wider">Search Drama</DialogTitle>
                <DialogDescription>
                  You can find all drama but i am not sure if your searched drama can be searched or not. 💀
                </DialogDescription>
              </DialogHeader>
              <div className="">
                <Input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Searched drama..."
                />
              </div>
              <DialogFooter className="w-full">
                <Button
                onClick={handleSearch}
                disabled={query.length < 4}
                variant="secondary"
                className="w-full font-logo tracking-wide text-lg">
                    Search <Search className="ml-2" />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
  )
}
export default SearchDialog