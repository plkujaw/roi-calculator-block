import { useState, useEffect } from "react";

// Fetch currency list with fallback
export async function fetchCurrenciesWithFallback() {
	try {
		const response = await fetch("https://api.frankfurter.app/currencies");
		const data = await response.json();
		if (data) {
			return Object.entries(data).map(([code, name]) => ({
				label: `${code} - ${name}`,
				value: code,
			}));
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("Error fetching currencies:", error);
	}
	// Fallback
	return [
		{ label: "GBP", value: "GBP" },
		{ label: "USD", value: "USD" },
		{ label: "EUR", value: "EUR" },
		{ label: "JPY", value: "JPY" },
	];
}

// Fetch conversion rate between two currencies, with fallback to 1
export async function fetchConversionRate(from, to) {
	if (!from || !to || from === to) return 1;
	try {
		const url = `https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`;
		const response = await fetch(url);
		const data = await response.json();
		if (data && data.rates && data.rates[to]) {
			return data.rates[to];
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("Error fetching conversion rate:", error);
	}
	return 1;
}

// Use currency list
export function useCurrencies() {
	const [currencies, setCurrencies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			setIsLoading(true);
			const currencyOptions = await fetchCurrenciesWithFallback();
			if (isMounted) setCurrencies(currencyOptions);
			setIsLoading(false);
		};
		fetchData();
		return () => {
			isMounted = false;
		};
	}, []);

	return { currencies, isLoading };
}

// Use conversion rate between two currencies, with fallback to 1
export function useConversionRate(from, to) {
	const [conversionRate, setConversionRate] = useState(1);

	useEffect(() => {
		let isMounted = true;
		const getRate = async () => {
			const rate = await fetchConversionRate(from, to);
			if (isMounted) setConversionRate(rate);
		};
		getRate();
		return () => {
			isMounted = false;
		};
	}, [from, to]);

	return conversionRate;
}
