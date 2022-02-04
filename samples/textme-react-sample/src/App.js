import { TextMeClient } from "@iconicto/textme-js-sdk";
import { useState } from "react";
import ReactJson from "react-json-view";
import MDSpinner from "react-md-spinner";
import "./App.css";

function App() {
  
  const [singleSMS, setSingleSMS] = useState({});
  const [singleSMSId, setSingleSMSId] = useState("");
  const [allSMS, setAllSMS] = useState({});
  const [sendSMSData, setSendSMSData] = useState({});
  const [isAllSMSLoading, setIsAllSMSLoading] = useState(false);
  const [isSingleSMSLoading, setIsSingleSMSLoading] = useState(false);
  const [isSMSSending, setIsSMSSending] = useState(false);
  const [smsStatus, setSMSStatus] = useState({});

  const smsclient = new TextMeClient({
    apiKey: "4|rg6coE8RIS6lQeQf6IbvAna52f4gZqELZ3Bvl1Tp",
    senderID: "Iconicto",
  });

  const viewSingleSMS = () => {
    setIsSingleSMSLoading(true);
    if (!singleSMSId) {
      alert("No SMS ID has been passed.");
      setIsSingleSMSLoading(false);
      return;
    }
    smsclient
      .viewSMS(singleSMSId)
      .then((response) => {
        setSingleSMS(response.data);
        setIsSingleSMSLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSingleSMSLoading(false);
      });
  };

  const viewAllSMS = () => {
    setIsAllSMSLoading(true);
    smsclient
      .viewAllSMS()
      .then((response) => {
        setAllSMS(response.data);
        setIsAllSMSLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsAllSMSLoading(false);
      });
  };

  const sendSMS = () => {
    if (!sendSMSData.to || !sendSMSData.message) {
      alert("No Message or Phone Number was given");
      return;
    }
    setIsSMSSending(true);
    setSMSStatus({});
    smsclient
      .sendSMS(sendSMSData.to, sendSMSData.message)
      .then((response) => {
        console.log(response);
        setIsSMSSending(false);
        setSMSStatus({
          isSuccess: true,
          state: "sent",
        });
      })
      .catch((err) => {
        console.log(err);
        setIsSMSSending(false);
        setSMSStatus({
          isSuccess: false,
          state: "sent",
        });
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://portal.textme.lk/images/logo/ab25c4ade8c582f8896dad64c6ab258f.png"
          className=""
          alt="logo"
        />
        <p>TextMe React JS Sample</p>

        <div className="columns mt-4">
          <div className="column is-4">
            <h1 className="title is-4 has-text-white">Send SMS</h1>
            {smsStatus.state === "sent" ? (
              <h1
                className={
                  smsStatus.isSuccess
                    ? "title is-6 has-text-success"
                    : "title is-6 has-text-danger"
                }
              >
                {smsStatus.isSuccess
                  ? "SMS Successfully Sent"
                  : "SMS Sending Failed"}
              </h1>
            ) : (
              ""
            )}
            {!isSMSSending ? (
              <div>
                <div className="field has-text-left p-3">
                  <label className="label has-text-white">Phone Number</label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="number"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setSendSMSData({ ...sendSMSData, to: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="field has-text-left p-3">
                  <label className="label has-text-white">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      onChange={(e) => {
                        setSendSMSData({
                          ...sendSMSData,
                          message: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                </div>
                <button className="button is-warning" onClick={sendSMS}>
                  Send Message
                </button>
              </div>
            ) : (
              <MDSpinner />
            )}
          </div>
          <div className="column is-4">
            <h1 className="title is-4 has-text-white">View Single SMS</h1>
            <div className="field is-grouped p-3">
              <p className="control is-expanded">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Find an SMS"
                  onChange={(e) => {
                    setSingleSMSId(e.target.value);
                  }}
                />
              </p>
              <p className="control">
                <a
                  className="button is-warning is-small"
                  onClick={viewSingleSMS}
                >
                  Search
                </a>
              </p>
            </div>
            <div className="p-3">
              {!isSingleSMSLoading ? (
                <ReactJson
                  theme="brewer"
                  collapsed={false}
                  indentWidth={1}
                  src={singleSMS}
                />
              ) : (
                <MDSpinner />
              )}
            </div>
          </div>
          <div className="column is-4">
            <h1 className="title is-4 has-text-white">View All SMS</h1>
            <p className="control mb-4">
              <a className="button is-warning is-small" onClick={viewAllSMS}>
                Get All SMS
              </a>
            </p>
            {!isAllSMSLoading ? (
              <ReactJson
                theme="brewer"
                collapsed={false}
                indentWidth={1}
                src={{ allSMS }}
              />
            ) : (
              <MDSpinner />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
