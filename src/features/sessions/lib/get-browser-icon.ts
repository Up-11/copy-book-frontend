import { CircleHelp } from 'lucide-react'
import {
	FaChrome,
	FaFirefox,
	FaSafari,
	FaEdge,
	FaOpera,
	FaInternetExplorer,
	FaYandex
} from 'react-icons/fa'

export const getBrowserIcon = (browser: string) => {
	switch (browser.toLowerCase()) {
		case 'chrome':
		case 'google chrome':
			return FaChrome
		case 'firefox':
		case 'mozilla firefox':
			return FaFirefox
		case 'safari':
			return FaSafari
		case 'edge':
		case 'microsoft edge':
			return FaEdge
		case 'opera':
			return FaOpera
		case 'yandex':
		case 'yandex browser':
			return FaYandex
		case 'ie':
		case 'internet explorer':
			return FaInternetExplorer
		default:
			return CircleHelp
	}
}
