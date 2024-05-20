import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Not Found",
  description: "We think you may be lost",
};

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <Link href={"/"} className="text-center text-secondary">
          /Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
