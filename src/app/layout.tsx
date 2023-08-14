"use client";
import { styled } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

const Wrapper = styled("div")`
  background-color: #f7f3f3;
  height: 100vh;
`;
