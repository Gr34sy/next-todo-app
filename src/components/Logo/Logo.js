import React from "react";
import Link from "next/link";

export function Logo() {
  return (
    <div className="logo">
      <Link href="/">

        ToDo <span> App </span>
  
      </Link>
    </div>
  );
}