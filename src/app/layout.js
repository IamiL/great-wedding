import "./globals.css";

export const metadata = {
  title: "Роман & Татьяна",
  description: "Приглашение на свадьбу",
};

export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
