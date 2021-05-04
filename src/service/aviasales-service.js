export default class AviasalesService {
    baseUrl = 'https://front-test.beta.aviasales.ru/';

    searchId = '';

    async getResponse(path) {
        const url = new URL(`${path}`, this.baseUrl);

        if (!this.searchId && !path.includes('search')) {
            await this.getSearchId();
        }

        url.searchParams.set('searchId', this.searchId);

        const response = await fetch(url);

        if (!response.ok) {
            const { errors } = await response.json();

            throw new Error(errors);
        }

        const parseResponse = await response.json();

        return parseResponse;
    }

    getSearchId = async () => {
        const { searchId } = await this.getResponse('/search');
        this.searchId = searchId;
    };

    getTickets = async () => {
        const response = await this.getResponse('/tickets');
        return response;
    };
}
