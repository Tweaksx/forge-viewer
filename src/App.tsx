import { useState, useEffect } from "react";
import { ForgeViewer } from "@lagarsoft/forge-viewer-react";
import "./App.css";

const getToken = () => {
  return fetch(
    "https://developer.api.autodesk.com/authentication/v1/authenticate",
    {
      body: new URLSearchParams({
        client_id: "QuNj30eGTLgZsAZAYDPXIAKV0PmtyFYO",
        client_secret: "9aGpVUhoLYlyviFo",
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
    "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXVuajMwZWd0bGd6c2F6YXlkcHhpYWt2MHBtdHlmeW9fam9yZ2VfYnVpbGRlcl9wcm9qZWN0L0lDUi1WREMtVDEtRjIzLXY4LnJ2dA==";
  useEffect(() => {
    getToken().then((response) => {
      setToken(response.access_token);
    });
  }, []);
  return (
    <div className="App">
      {token && <ForgeViewer urn={urn} accessToken={token} />}
    </div>
  );
}

export default App;
