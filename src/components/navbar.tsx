"use client";

import * as React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-background flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </SignedIn>
      </div>
      <div className="flex items-center space-x-4">
        <UserButton />
        <ModeToggle />
      </div>
    </nav>
  );
}
