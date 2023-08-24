import React from "react";
import Link from "next/link";

export function Logo({isDark}) {
  return (
    <div className={isDark ? "logo logo--dark" : "logo"}>
      <Link href="/">

        ToDo <span> App </span>
  
      </Link>
    </div>
  );
}