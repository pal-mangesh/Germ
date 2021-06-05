import React, { ReactElement } from "react";
import Featuer1Icon from "../../images/feature_one_icon.svg";
import Featuer2Icon from "../../images/feature_two_icon.svg";
import Featuer3Icon from "../../images/feature_three_icon.svg";

interface IFeature {
  icon: any;
  title: string;
  description: string;
}
export interface FeaturesProps {}

export default function Features(props: FeaturesProps): ReactElement | null {
  const features: IFeature[] = [
    {
      icon: Featuer1Icon,
      title: "Schnelle Entscheidung",
      description: `Füllen Sie ein einfaches Antragsformular aus, um einen Kredit zu beantragen. Sie erhalten innerhalb von 1 Stunde eine Genehmigungsbenachrichtigung.`,
    },
    {
      icon: Featuer2Icon,
      title: "0 Gebühren",
      description: `Für die Bearbeitung Ihrer Bewerbung wird keine Gebühr erhoben! Es ist ein automatisierter Prozess und dauert nicht länger als ein paar Stunden.`,
    },
    {
      icon: Featuer3Icon,
      title: "Vollständig transparent",
      description: `Sie haben die volle Kontrolle über den Prozess! Unser Prozess ist vollständig transparent und es gibt keine versteckten Kosten oder Bedingungen.`,
    },
  ];
  return (
    <>
      <div className="flex items-center flex-wrap -max-w-1366 mx-auto p-8">
        {features && features.length
          ? features.map((f: IFeature) => (
              <div className="w-full md:w-1/3">
                <div>
                  <img src={f.icon} />
                </div>
                <div className="mt-2">
                  <h4>{f.title}</h4>
                </div>
                <div className="mt-2">
                  <h6>{f.description}</h6>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}
