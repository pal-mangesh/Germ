import React, { ReactElement } from "react";
import ImgHeroBG from "../../images/hero-bg.png";
import Button from "../../components/button";
export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  const heroFeatures = [
    {
      title: "Keine Bonitätsprüfung",
    },
    { title: "Keine Wartezeit" },
    { title: "100% Safe" },
  ];
  return (
    <>
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: `url(${ImgHeroBG})` }}
      >
        <div
          className="-max-w-1366 mx-auto flex items-center justify-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="text-center" style={{ maxWidth: "500px" }}>
            <h5 className="font-bold text-xl">Immer verfügbar</h5>
            <h2 className="font-bold text-5xl">Geldunterstützung</h2>
            <div className="flex justify-center py-4">
              {heroFeatures && heroFeatures.length ? (
                <>
                  <ul className="flex items-center">
                    {heroFeatures.map((f: any) => (
                      <li className="px-2">{f.title}</li>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>
            <h6>
              Ihre Finanzen sind unser Anliegen. Wir bieten eine große Auswahl
              an  Finanzprodukten, die Ihren Anforderungen entsprechen!
            </h6>
            <div className="my-8">
              <Button title="Apply Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
