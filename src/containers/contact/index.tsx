import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Network from '../../commons/network';
import Cookies from '../../commons/cookies';
// import Sec2Image from "../../images/sec-2-img.png";

export interface ContactProps {}

export default function Contact(props: ContactProps): ReactElement | null {
  const [formData, setFormData] = React.useState({} as any);

  const submitData = async (e:any) => {
    const {data} = await Network.post("/auth/local",formData);
   
    if(data && data.jwt){
      Cookies.put("authKey",data.jwt);
    }

  };

  const onFormFieldChange = (fieldName: string) => (e: any) => {
    const _fd = { ...formData };
    _fd[fieldName] = e.target.value;
    setFormData(_fd);
  };

  const checkAuthValid = async () =>{
    console.log(await Network.get("/leads"));
  }

  return (
    <>
    
      <div className="w-full h-96 shadow-md ">
        <br />
        asdjljd
        <br />
        asdjljd
        <br />
        asdjljd
        <br />
      </div>
      <div className="-max-w-1366 mx-auto p-8 shadow-md mb-8  w-full">
        <div className="w-full">
          <Heading position="center">
            <h3 className="w-full flex justify-center align-middle text-center">
              Kontakt
            </h3>
          </Heading>
        </div>
        <div className="w-full flex ">
          <div className="justify-center align-middle text-center h-96 justify-items-center flex w-1/2">
            <div className="w-1/2 flex flex-col">
              <div className=" p-8 flex justify-center text-center align-middle">
                img
              </div>
              <div className="flex justify-center text-center align-middle">
                service@24sofort-kredit.de
              </div>
            </div>
            <div className="w-1/2 flex flex-col  ">
              <div className=" p-8 flex justify-center text-center align-middle">
                img
              </div>
              <div className="flex justify-center text-center align-middle">
                service@24sofort-kredit.de
              </div>
            </div>
          </div>
          <div className=" flex w-1/2">
            <div className=" p-8">
             
                <div className="pl-2 pt-8">
                  <label>Vorname</label>
                </div>
                <div className="h-120">
                  <input
                    type="text"
                    id="fname"
                    className="border-pink-600 h-12 "
                    placeholder=""
                    onChange={onFormFieldChange("identifier")}
                  />
                </div>
                <div className="pl-2 pt-8">
                  <label>Email</label>
                </div>
                <div className="h-120">
                  <input
                    type="text"
                    id="fname"
                    className="border-pink-600 h-12 "
                    placeholder=""
                    onChange={onFormFieldChange("password")}
                  />
                </div>
                <div className="pl-2 pt-8">
                  <label>Telefon</label>
                </div>
                <div className="h-120">
                  <input
                    type="text"
                    id="fname"
                    className="border-pink-600 h-12 "
                    placeholder=""
                    onChange={onFormFieldChange("phone")}
                  />
                </div>
                <div className="pl-2 pt-8">
                  <label>Abfrage</label>
                </div>
                <div className="h-120">
                  <input
                    type="text"
                    id="fname"
                    className="border-pink-600 h-12 "
                    placeholder=""
                    onChange={onFormFieldChange("message")}
                  />
                </div>
                <div className="pt-8 pl-2">
                  <Button onClick={submitData} title="Einreichen" />
                </div>
              
            </div>
          </div>
        </div>
        <div>
          <h4 className="pt-8">REPRÄSENTATIVEN BEISPIEL</h4>
          <h6 className="pt-4">
            *Angaben gem. § 6a PAngV: Unveränderlicher Sollzinssatz ab 3,92%,
            effektiver Jahreszins ab 3,99% - 15,99%, Nettodarlehensbetrag ab
            1.000,- bis 50.000,- €, Laufzeit von 12 bis 120 Monaten, Bonität
            vorausgesetzt. Bei einem Nettodarlehensbetrag von 10.000,- € und
            einer Laufzeit von 36 Monaten erhalten 2/3 der Kunden von 24-Sofort
            Kredit vorraussichttlich einen eff. Zinssatz von 8,90% oder
            günstiger (geb. Sollzinssatz 5,26%).
          </h6>
        </div>
      </div>
      <div className="flex align-middle pb-14 justify-center">
        <Button onClick={checkAuthValid} title="Jetzt Antrag Erstellen" />
      </div>
    </>
  );
}
