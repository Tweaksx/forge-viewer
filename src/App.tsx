import { useState, useEffect } from "react";
import { ForgeViewer } from "@lagarsoft/forge-viewer-react";
import "./App.css";

const getToken = () => {
  return fetch(
    "https://developer.api.autodesk.com/authentication/v1/authenticate",
    {
      body: new URLSearchParams({
        client_id: "7L7sGElkiLtAudgDcqo5OfxonfyPudAz",
        client_secret: "ZJwAVtGdZnKcGG1O",
        grant_type: "client_credentials",
        scope: "code:all data:read",
      }),
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((res) => res.json());
};

function App() {
  const [token, setToken] = useState();
  const urn =
    "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTY3MDE3ODA1MTI0M19jYmJkY2ZiYy01ZjQ4LTRmMTYtOWE5MC01ODk1NDY4Mjc1NTJfMTY3MDE3ODA1MTI0My5ydnQ";
  useEffect(() => {
    getToken().then((response) => {
      setToken(response.access_token);
      console.log('response.access_token: ', response.access_token);
    });
  }, []);
  return (
    <div className="App">
      {token && <ForgeViewer urn={urn} accessToken={token} />}
    </div>
  );
}

export default App;
