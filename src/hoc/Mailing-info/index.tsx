import React, { ReactElement } from "react";
import Heading from "../../components/heading";

export interface MailInfoProps {}

export default function MailInfo(props: MailInfoProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-14   ">
        <Heading position="center">
          <h3 className="text-center p-8 pb-0">Kontakt Informationen</h3>
        </Heading>
        <div className=" shadow-md">
           <div className="flex p-14">
               <h5 className="w-1/2 text-center">service@24sofort-kredit.de
</h5>
               <h5 className="w-1/2 text-center">info@24sofort-kredit.de
</h5>
               </div> 
          <h4 className="p-4">REPRÄSENTATIVEN BEISPIEL</h4>
          <h6 className=" p-4 pt-0">
          *Angaben gem. § 6a PAngV: Unveränderlicher Sollzinssatz ab 3,92%, effektiver Jahreszins ab 3,99% - 15,99%, Nettodarlehensbetrag ab 1.000,- bis 50.000,- €, Laufzeit von 12 bis 120 Monaten, Bonität vorausgesetzt. Bei einem Nettodarlehensbetrag von 10.000,- € und einer Laufzeit von 36 Monaten erhalten 2/3 der Kunden von 24-Sofort Kredit vorraussichttlich einen eff. Zinssatz von 8,90% oder günstiger (geb. Sollzinssatz 5,26%).

          </h6>
        </div>
      </div>
    </>
  );
}
