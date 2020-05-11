import '../component/corona-list.js';
import '../component/search-bar.js';
import '../data/data-corona.js'
import DataSource from '../data/data-allcountris.js';


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const coronaListData = document.querySelector("corona-item");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchData(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        coronaListData.datac = results;
    };

    const fallbackResult = message => {
        coronaListData.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;