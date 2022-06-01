import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/news">news</Link>
        <Link href="/contact">contact</Link>
        <Link href="/mailing-list">mailinglist</Link>
      </nav>
    </div>
  );
}
