import confeti from 'canvas-confetti';

export const ThrowConfetti = () => {
	confeti();
}

//Kind of modular localStorage data getter, setter and cleaner.
/**
 * Get the value of an item from localStorage.
 * @param {string} item
 * @param {any} defaultValue
 */
export const GetStoredItem = (item, defaultValue) => {
	let _item = window.localStorage.getItem(item);
	if (!_item) return defaultValue;
	
	return JSON.parse(_item);
};
/**
 * stringify data containing a key and a value to be saved. 
 * @param {{ [key: string]: any }} dataToSave
 * */
export const SaveState = (dataToSave) => {
	for (const [key, value] of Object.entries(dataToSave)) {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
}
/**
 * data containing the keys of the items to be removed.
 * @param {[string]} dataToClear
 */
export const ClearState = (dataToClear) => {
	for (const value of dataToClear) {
		window.localStorage.removeItem(value);
	}
}