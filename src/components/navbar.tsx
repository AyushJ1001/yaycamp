"use client";

import * as React from "react";
import Link from "next/link";
import { Tent, Upload } from "lucide-react";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-background p-4">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <Tent className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Home</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href="/camps">Find Camps</Link>
        </Button>
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </SignedIn>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/upload">
            <Upload className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Upload</span>
          </Link>
        </Button>
        <UserButton />
        <ModeToggle />
      </div>
    </nav>
  );
}
