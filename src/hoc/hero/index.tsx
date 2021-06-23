import React, { ReactElement } from "react";
import HeroBottomBG from "../../images/hero-bottom-bg.svg";
import ImgHeroBG from "../../images/hero-bg.png";
import Button from "../../components/button";
import {Link } from 'gatsby';
export interface HeroProps {}

export default function Hero(props: HeroProps): ReactElement | null {
  const heroFeatures = [
    {
      title: "Keine Bonitätsprüfung",
    },
    { title: "Keine Wartezeit" },
    { title: "100% Safe" },
  ];
  return (
    <div
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${ImgHeroBG})` }}
    >
      <div
        className="absolute bg-center bg-cover"
        style={{
          left: "-10px",
          right: "-10px",
          bottom: "-1px",
        }}
      >
        <img src={HeroBottomBG} className="w-full" />
      </div>
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
            Ihre Finanzen sind unser Anliegen. Wir bieten eine große Auswahl an
            Finanzprodukten, die Ihren Anforderungen entsprechen!
          </h6>
          <div className="my-8">
            <Link to="/apply">
               <Button title="Apply Now" />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
