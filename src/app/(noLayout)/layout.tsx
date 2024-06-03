import Header from "@/components/shared/Header";
import React from "react";

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col min-h-screen"}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
