export const getTimeDiff = (date, duration) => {
    const strTime = date.replace('.000Z', '').replace('T', '-').replace(/:/g, '-').split('-');

    let departure = new Date(...strTime);
    let arrival = new Date(departure.getTime() + duration * 60 * 1000);

    departure = departure.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    arrival = arrival.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `${departure} - ${arrival}`;
};

export const getParseTime = (duration) => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    return `${hours}ч ${minutes}м`;
};

export const getStopText = (count) => {
    if (!count) return `${count} пересадок`;

    if (count === 1) return `${count} пересадка`;

    return `${count} пересадки`;
};