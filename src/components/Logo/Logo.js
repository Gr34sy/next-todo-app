import React from "react";

export function Logo({isDark}) {
  return (
    <div className={isDark ? "logo logo--dark" : "logo"}>
      <a href="/">
        
        ToDo 
        <span>
          App
        </span>
      
      </a>
    </div>
  );
}