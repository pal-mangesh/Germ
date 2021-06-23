import React, { ReactElement } from "react";
import Button from "../../components/button/index";
import logo from "../../images/logo.svg";

export interface FooterProps {}

export default function Footer(props: FooterProps): ReactElement | null {
  return (
    <>
      <div className="w-full text-gray-300"  style={{ backgroundColor: "#160f42"}}>
        <div className="-max-w-1366 flex mx-auto p-14">
          <div className="w-1/2 ">
            <div>
              <img src={logo} className=" max-w-md " />
            </div>
            <h6 className="p-8 text-justify pr-0 pl-0">
              Die 24sofort-kredit.de ist eine preisgekrönte Organisation, die
              Kleinunternehmen, Unternehmern und gemeinnützigen Organisationen
              in ganz Deutschland Kreditanbieter sowie Beratungs- und
              Schulungsdienste anbietet.
            </h6>
          </div>
          <div className=" p-8 pb-0 pl-24 pt-0">
            <h4 className="text-gray-200">Sitemap</h4>
            <div className="pt-8 flex">
              <div className="flex flex-col ">
                <div className="pt-4">Startseite</div>
                <div className="pt-4">Anwenden</div>
                <div className="pt-4">Blogs</div>
                <div className="pt-4">Kontakte</div>
              </div>
              <div className="flex flex-col pl-8 ">
                <div className="pt-4">Über uns</div>
                <div className="pt-4">FAQ</div>
                <div className="pt-4">Bedingungen</div>
                <div className="pt-4">Privatsphäre</div>
              </div>
            </div>
          </div>
          <div className="pl-14">
            <h4 className="flex text-gray-200 flex-col flex-nowrap ">Neueste Nachrichten</h4>
            <div className="flex flex-col pt-8 ">
              <h5 className="pt-4 ">Eine Kaufhypothek in...</h5>
              <div className="pt-2 ">
                <div className="h-4px w-32 rounded-xl p-1 flex align-middle text-white bg-pink-500">
                  October 9, 2020
                </div>
              </div>
              <h5 className="pt-4">Coronavirus und der ...</h5>
              <div className="pt-2">
                <div className="h-4px w-32 rounded-xl p-1 flex align-middle text-white  bg-pink-500">
                  October 9, 2020
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="-max-w-1366 text-gray-600 flex mx-auto p-4 text-justify">
            Haftungsausschluss : Ziel dieser Website ist es, potenzielle
            Kreditnehmer mit den Kreditgebern und Finanzdienstleistern in
            Verbindung zu bringen, die auf dieser Website werben. Der Betreiber
            dieser Website ist weder Kreditgeber noch Makler und trifft keine
            Kreditentscheidungen. Diese Website nimmt lediglich Informationen
            von Verbrauchern entgegen und leitet sie an Kreditgeber und Dritte
            weiter, die möglicherweise in der Lage sind, die Arten von Darlehen
            bereitzustellen, die den Bedürfnissen der Verbraucher entsprechen.
            Für diejenigen Verbraucher, die sich nicht für einen Privatkredit
            qualifizieren, werden wir Sie an alternative Kreditgeber und
            Anbieter verweisen. Diese Website gilt nicht als Angebot oder
            Aufforderung zur Abgabe eines Darlehens. Es gibt keine Garantie
            dafür, dass Sie für jede Art von Darlehen zugelassen werden. Wir
            berechnen Ihnen keine Gebühren für die von uns erbrachten
            Dienstleistungen und sind weder Vertreter noch Vertreter eines
            Kreditgebers oder eines Drittanbieters. Wir werden von Kreditgebern
            und Dritten entschädigt. Die Zeit, die für die Überweisung des
            Geldes auf Ihr Konto benötigt wird, variiert je nach Kreditgeber und
            hängt auch von Ihrem jeweiligen Finanzinstitut ab. Möglicherweise
            müssen Sie Informationen an Ihren Kreditgeber faxen, um einen Kredit
            zu erhalten. Dieser Service und die Kreditgeber sind nicht in allen
            Bundesstaaten verfügbar. Wenn Sie Fragen zu den Details Ihres
            Kredits haben, wenden Sie sich direkt an Ihren Kreditgeber.
            Privatdarlehen und andere Arten von Darlehen sollten nicht als
            langfristige Finanzlösung angesehen werden. Sie sind Mittel zur
            kurzfristigen Finanzierung, um unmittelbare finanzielle Bedürfnisse
            zu lösen. Kreditgeber und Drittanbieter können eine Kreditprüfung
            bei einer oder mehreren Kreditagenturen durchführen. Diese
            Kreditprüfungen können sich auf Ihre Kreditwürdigkeit auswirken. Mit
            der Übermittlung Ihrer Anfrage ermächtigen Sie die Kreditgeber und
            Drittanbieter, die von Ihnen übermittelten Informationen und Ihre
            Kreditwürdigkeit unabhängig zu überprüfen. Nichts auf dieser Website
            stellt ein Angebot oder eine Aufforderung zur Abgabe eines Darlehens
            dar.
          </div>
      </div>
    </>
  );
}
