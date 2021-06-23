import React, { ReactElement } from "react";
import Button from "../../components/button";




export interface Props {}

export default function CardSec(props: Props): ReactElement | null {
  return (
    <>
      <div className=" items-center flex flex-wrap -max-w-1366 mx-auto p-8">
        <div className="w-1/2 flex flex-col  justify-start ">
          <h3 className="pt-8">
            Wir helfen unseren Mitarbeitern, ihre Lebensziele zu erreichen
          </h3>
          <h6 className="pt-8 text-justify">
            Mit unserem Expertenwissen über den Markt können wir Ihre
            finanzielle Erholung erleichtern, indem wir eine zuverlässige
            Geldquelle für Sie finden. Mit minimalen Anforderungen und einer
            unübertroffenen Geschwindigkeit des gesamten Prozesses haben Sie die
            Möglichkeit, die schwierigen Zeiten zu überstehen und kurzfristig
            ohne Belastung Ihrer Schultern voranzukommen.
          </h6>
          <div className="pt-8">
            <Button title="Loslegen" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">img</div>
      </div>


    </>
  );
}
