import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from "./components/DCandidates";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { IonApp } from "@ionic/react";
function App() {
	return (
		<IonApp>
			<Provider store={store}>
				<ToastProvider autoDismiss={true}>
					<Container maxWidth="lg">
						<DCandidates />
					</Container>
				</ToastProvider>
			</Provider>
		</IonApp>
	);
}

export default App;
