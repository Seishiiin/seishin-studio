import {Poppins} from "next/font/google";
import "./globals.css";

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Seishin Studio",
    description: "Entreprise de développement. Site web, application mobile, logiciel, jeux vidéo.",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
