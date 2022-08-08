import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from "react";

Amplify.configure({ ...awsExports, ssr: true });


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>

      <Authenticator>
        <Component {...pageProps} />
      </Authenticator>
    </div>

  );
}
export default MyApp;