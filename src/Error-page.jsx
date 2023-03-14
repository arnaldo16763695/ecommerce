import { useRouteError } from "react-router-dom";
import "./error-page.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Lo siento ha ocurrido un error.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
