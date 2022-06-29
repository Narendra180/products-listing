import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import '@shopify/polaris/build/esm/styles.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider
			i18n={translations}
		>
			<Component {...pageProps} />			
		</AppProvider>
	)
}

export default MyApp
